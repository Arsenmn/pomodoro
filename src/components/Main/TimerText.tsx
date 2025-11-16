import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerText = React.memo(({ minutes, seconds, timerColor }: any) => {
  return (
    <h1
      className="text-9xl text-white font-bold mb-4"
      style={{ color: timerColor }}
    >
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </h1>
  );
});

export default TimerText;
