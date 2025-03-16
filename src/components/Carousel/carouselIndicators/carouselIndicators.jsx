import React from "react";
import Indicators from "./indicators";

const CarouselIndicators = () => {
  return (
    <div className="fixed w-full bottom-14  z-50">
      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="mb-3 ml-1 text-3xl">
            <p>Select Color</p>
          </div>
          <nav className="w-5/6">
            <Indicators color={"#95131F"} id="#redShoe" i="0" />
            <Indicators color={"#2F3653"} id="#blueShoe" i="1" />
            <Indicators color={"#058A49"} id="#greenShoe" i="2" />
            <Indicators color={"#D08C01"} id="#yellowShoe" i="3" />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CarouselIndicators;
