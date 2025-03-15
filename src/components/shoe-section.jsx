import React from "react";

const ShoeSection = ({ image }) => {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center rotate-[5deg]">
      <img src={image} className="-mt-40" style={{ transform: "scaleX(-1)" }} />
      <div>
        
      </div>
    </div>
  );
};

export default ShoeSection;
