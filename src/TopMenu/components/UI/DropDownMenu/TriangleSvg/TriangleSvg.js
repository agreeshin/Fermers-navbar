import React from "react";

const TriangleSvg = ({ isDirectionUp }) => {
  return (
    <svg
      style={{ transform: `rotate(${isDirectionUp ? "180deg" : "0deg"})`, transition: "transform 0.2s" }}
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 10.0588L0.870834 0.308838L12.1292 0.308838L6.5 10.0588Z"
        fill="#00463B"
      />
    </svg>
  );
};

export default TriangleSvg;
