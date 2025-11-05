import "./logo.css";
const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest uppercase">
          <svg className="writing-svg" viewBox="0 0 600 120">
            {/* Background Path (Always Visible) */}
            <path
              id="abdullah-path-bg"
              className="svg-text-stroke-bg"
              d="M50 60 C150 -30 250 150 350 60 C450 -30 550 150 550 60"
              fill="none"
            />

            {/* Animated Path */}
            <path
              id="abdullah-path"
              className="svg-text-stroke"
              d="M50 60 C150 -30 250 150 350 60 C450 -30 550 150 550 60"
              fill="none"
            />

            {/* Animated Text */}
            <text className="svg-text-fill">
              <textPath
                href="#abdullah-path"
                startOffset="0%"
                className="text-path-style"
              >
                Abdullah
              </textPath>
            </text>
          </svg>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
