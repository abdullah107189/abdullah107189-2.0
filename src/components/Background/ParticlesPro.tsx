/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

type Vec2 = { x: number; y: number };

interface ParticlesProProps {
  className?: string;
  // Counts
  stars?: number;
  particles?: number;

  // Motion
  speed?: number; // base animation speed
  parallaxStrength?: number; // mouse parallax strength
  sphereWarp?: number; // sphere warp intensity (0~1.5)
  rotation?: number; // ambient rotation factor
  hoverOnlyInside?: boolean; // if true, only moves when cursor inside container

  // Look
  spread?: number; // cloud spread
  baseSize?: number; // gl_PointSize base
  sizeJitter?: number; // size randomness
  colors?: string[]; // particle colors
  starColor?: string; // star color hex
  alphaParticles?: boolean; // smooth alpha edges
  cameraDistance?: number;

  // Performance
  maxDPR?: number; // cap devicePixelRatio
  pauseWhenHidden?: boolean; // pause when document hidden
}

const defaultColors = ["#ffffff", "#C8E4FF", "#A7C7FF"];

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  const int = parseInt(hex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

// GPU-friendly DPR cap
function applyDprCap(gl: WebGLRenderingContext, maxDPR: number) {
  const setSize = (gl as any).canvas.setSize;
  if (setSize) return; // OGL already wraps; we’ll just set CSS size
}

const particleVertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 rand4;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeJitter;
  uniform float uSphereWarp;     // 0..1.5
  uniform vec2  uMouse;          // normalized -1..1

  varying vec3 vColor;

  // simple sphere-ish warp towards center with mouse parallax
  vec3 warp(vec3 p) {
    // pull slightly towards a unit sphere surface
    float r = length(p);
    if (r > 0.0001) {
      vec3 dir = normalize(p);
      // push/pull towards radius ~0.8 for a gently curved shell
      float target = 0.8 + 0.2 * sin(uTime * 0.4 + rand4.x * 6.2831);
      p = mix(p, dir * target, uSphereWarp);
    }
    // add subtle mouse parallax in XY
    p.xy += uMouse * 0.1;
    return p;
  }

  void main() {
    vColor = color;
    // scaled cloud
    vec3 p = position * uSpread;
    p = warp(p);

    // floaty motion
    float t = uTime;
    p.x += sin(t * (0.6 + rand4.z) + rand4.w * 6.2831) * mix(0.02, 0.22, rand4.x);
    p.y += sin(t * (0.5 + rand4.y) + rand4.x * 6.2831) * mix(0.02, 0.22, rand4.w);
    p.z += sin(t * (0.7 + rand4.w) + rand4.y * 6.2831) * mix(0.02, 0.22, rand4.z);

    vec4 mPos = modelMatrix * vec4(p, 1.0);
    vec4 mvPos = viewMatrix * mPos;

    // point size perspective
    float sz = uBaseSize * (1.0 + uSizeJitter * (rand4.x - 0.5));
    gl_PointSize = sz / max(0.0001, length(mvPos.xyz));

    gl_Position = projectionMatrix * mvPos;
  }
`;

const particleFragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uAlphaParticles; // 0 or 1
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - 0.5);
    if (uAlphaParticles < 0.5) {
      if (d > 0.5) discard;
      gl_FragColor = vec4(vColor, 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d);
      gl_FragColor = vec4(vColor, circle);
    }
  }
`;

const starVertex = /* glsl */ `
  attribute vec3 position;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;

  uniform float uBaseSize;
  void main(){
    vec4 mvPos = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_PointSize = uBaseSize / max(0.0001, length(mvPos.xyz));
    gl_Position = projectionMatrix * mvPos;
  }
`;

const starFragment = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  void main(){
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - 0.5);
    float soft = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, soft);
  }
`;

const ParticlesPro: React.FC<ParticlesProProps> = ({
  className,
  // counts
  stars = 400,
  particles = 220,

  // motion
  speed = 1.0,
  parallaxStrength = 0.9,
  sphereWarp = 0.7,
  rotation = 0.15,
  hoverOnlyInside = false,

  // look
  spread = 9,
  baseSize = 120,
  sizeJitter = 0.9,
  colors = defaultColors,
  starColor = "#7aa2ff",
  alphaParticles = true,
  cameraDistance = 20,

  // perf
  maxDPR = 1.5,
  pauseWhenHidden = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<Vec2>({ x: 0, y: 0 });
  const insideRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      depth: false,
      dpr: Math.min(window.devicePixelRatio || 1, maxDPR),
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    // Fit canvas to container
    const setSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };

    // Camera
    const camera = new Camera(gl, { fov: 18 });
    camera.position.set(0, 0, cameraDistance);

    // Scene objects (we’ll render meshes directly)
    // ---- Stars (background)
    const starPositions = new Float32Array(stars * 3);
    for (let i = 0; i < stars; i++) {
      // far sphere shell for stars
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = 1.0 + Math.random() * 1.5; // spread stars further
      starPositions.set([x * r * 30, y * r * 30, z * r * 30], i * 3);
    }

    const starGeo = new Geometry(gl, {
      position: { size: 3, data: starPositions },
    });

    const [sr, sg, sb] = hexToRgb(starColor);
    const starProg = new Program(gl, {
      vertex: starVertex,
      fragment: starFragment,
      uniforms: {
        uBaseSize: { value: 80 },
        uColor: { value: [sr, sg, sb] },
      },
      transparent: true,
      depthTest: false,
    });

    const starsMesh = new Mesh(gl, {
      mode: gl.POINTS,
      geometry: starGeo,
      program: starProg,
    });

    // ---- Particles (mid-layer)
    const colArr = new Float32Array(particles * 3);
    const posArr = new Float32Array(particles * 3);
    const rndArr = new Float32Array(particles * 4);

    for (let i = 0; i < particles; i++) {
      // inside unit sphere
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);

      const r = Math.cbrt(Math.random()); // more dense at center
      posArr.set([x * r, y * r, z * r], i * 3);

      rndArr.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );

      const cHex = colors[Math.floor(Math.random() * colors.length)];
      const [r1, g1, b1] = hexToRgb(cHex);
      colArr.set([r1, g1, b1], i * 3);
    }

    const pGeo = new Geometry(gl, {
      position: { size: 3, data: posArr },
      rand4: { size: 4, data: rndArr },
      color: { size: 3, data: colArr },
    });

    const pProg = new Program(gl, {
      vertex: particleVertex,
      fragment: particleFragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: spread },
        uBaseSize: { value: baseSize },
        uSizeJitter: { value: sizeJitter },
        uSphereWarp: { value: sphereWarp },
        uMouse: { value: [0, 0] },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    const particleMesh = new Mesh(gl, {
      mode: gl.POINTS,
      geometry: pGeo,
      program: pProg,
    });

    // Resize & DPR
    const onResize = () => {
      // cap DPR on resize too
      const dpr = Math.min(window.devicePixelRatio || 1, maxDPR);
      renderer.dpr = dpr;
      setSize();
    };

    // Mouse (works through content because we use window events)
    const rafMouse = { pending: false };
    const updateMouse = (e: MouseEvent) => {
      if (rafMouse.pending) return;
      rafMouse.pending = true;
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        insideRef.current = inside;

        // Only update when inside OR if hoverOnlyInside=false keep parallax globally
        if (!hoverOnlyInside || inside) {
          const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          mouseRef.current.x = nx * parallaxStrength;
          mouseRef.current.y = ny * parallaxStrength;
        } else {
          mouseRef.current.x = 0;
          mouseRef.current.y = 0;
        }
        rafMouse.pending = false;
      });
    };

    const clearMouse = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseleave", clearMouse);
    window.addEventListener("resize", onResize);
    onResize();

    // Pause on hidden (perf)
    let paused = false;
    const onVis = () => {
      if (!pauseWhenHidden) return;
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    // Animate
    let af = 0;
    let last = performance.now();
    const loop = (t: number) => {
      af = requestAnimationFrame(loop);
      if (paused) return;

      const dt = Math.max(0, Math.min(100, t - last));
      last = t;
      const time = t * 0.001 * speed;

      // uniforms
      pProg.uniforms.uTime.value = time;
      pProg.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];

      // ambient rotation (GPU-cheap euler)
      const rotT = time * rotation;
      particleMesh.rotation.x = Math.sin(rotT * 0.35) * 0.2;
      particleMesh.rotation.y = Math.cos(rotT * 0.5) * 0.25;

      starsMesh.rotation.y = rotT * 0.1;

      // render both layers back-to-back
      renderer.render({ scene: starsMesh, camera });
      renderer.render({ scene: particleMesh, camera });
    };

    af = requestAnimationFrame(loop);

    // Cleanup
    return () => {
      cancelAnimationFrame(af);
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseleave", clearMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, [
    stars,
    particles,
    speed,
    parallaxStrength,
    sphereWarp,
    rotation,
    hoverOnlyInside,
    spread,
    baseSize,
    sizeJitter,
    colors,
    starColor,
    alphaParticles,
    cameraDistance,
    maxDPR,
    pauseWhenHidden,
  ]);

  return (
    <div
      ref={containerRef}
      className={[
        "relative w-full h-full pointer-events-none select-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ zIndex: 0 }}
      // NOTE: pointer-events: none ⇒ never blocks your UI,
      // but we still track mouse globally via window events.
    />
  );
};

export default ParticlesPro;
