import React from "react";

const ShoeSection = ({ image, id }) => {
  return (
    <div id={id} className="h-dvh w-dvw flex justify-center items-center">
      <img
        src={image || ""}
        className="-mt-40 -ml-4"
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
};

export default ShoeSection;
