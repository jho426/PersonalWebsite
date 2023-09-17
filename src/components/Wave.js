import React from "react";
import Wave from "react-wavify";

const WaveFunction = () => {
  return (
    <div className="">
      <Wave
        fill="#131313"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.2,
          points: 3,
        }}
      >
        <defs>
          <linearGradient>
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="-200" width="2000" height="300" />
          </mask>
        </defs>
      </Wave>
    </div>
  );
};

export default WaveFunction;
