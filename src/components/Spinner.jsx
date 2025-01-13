import React from "react";

const Spinner = () => {
  return (
    <div className="spinner w-full h-screen fixed z-[100000] flex items-center justify-center bg-[#0b0b0b8c]">
      <span className="loader "></span>
    </div>
  );
};

export default Spinner;
