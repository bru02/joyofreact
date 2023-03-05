import React from "react";

function Banner({ children, type }) {
  const className = type ? `banner ${type}` : "banner";

  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
