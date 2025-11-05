"use client";

import React, { useEffect } from "react";

export default function AbdullahTrimPath({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <svg
        height="100"
        stroke="#bac736"
        strokeWidth="2"
        className="text-line"
        width="100%"
      >
        <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
          Md. Abdullah All Shamem
        </text>
      </svg>

      <style jsx>{`
        .container {
          background: #f8f8f8;
          display: flex;
          font-family: "Momo Signature", cursive;
          align-items: center;
          height: 90vh;
          width: 100%;
        }

        .text-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: dash 5s linear forwards, filling 5s ease-in forwards;
          font-size: 80px;
        }

        .text-line text {
          font-family: "Momo Signature", cursive;
          font-weight: normal;
          font-style: normal;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes filling {
          0%,
          90% {
            fill: #bac736;
            fill-opacity: 0;
          }
          100% {
            fill: #bac736;
            fill-opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
