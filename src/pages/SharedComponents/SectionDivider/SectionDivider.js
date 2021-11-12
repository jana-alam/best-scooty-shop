import React from "react";

const SectionDivider = ({ transform }) => {
  const dividerStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: `rotate(${transform}deg)`,
  };

  const svgStyle = {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "100px",
  };

  const shapeFill = {
    fill: "#ffffff",
  };
  return (
    <div style={dividerStyle} className="hidden sm:block">
      <svg
        style={svgStyle}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" style={shapeFill}></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
