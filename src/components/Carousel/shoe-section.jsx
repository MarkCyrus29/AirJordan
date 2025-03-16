import React from "react";

const ShoeSection = ({ image, id }) => {
  return (
    <div id={id} className="h-dvh w-dvw flex justify-center items-center">
      <img
        src={
          image ||
          "https://th.bing.com/th/id/OIP.H88aKb7tUCF3XycKwqHjFgHaEK?rs=1&pid=ImgDetMain"
        }
        className="-mt-40 -ml-4"
        style={{ transform: "scaleX(-1)" }}
      />
    </div>
  );
};

export default ShoeSection;
