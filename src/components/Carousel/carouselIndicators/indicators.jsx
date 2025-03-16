import React from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

const Indicators = ({ color, id, i }) => {
  const windowHeight = window.innerHeight * 3;
  const handleScroll = (id) => {
    const sectionScrollPositions = {
      "#redShoe": 0,
      "#blueShoe": windowHeight * 0.33,
      "#greenShoe": windowHeight * 0.66,
      "#yellowShoe": windowHeight,
    };

    const targetY = sectionScrollPositions[id];
    if (targetY !== undefined) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: targetY, ease: "power2.out" },
      });
      console.log(targetY);
    }
  };

  return (
    <button onClick={() => handleScroll(id)} className={"btn" + i}>
      <svg
        width="64" /* Increased size */
        height="64" /* Increased size */
        viewBox="0 0 64 64" /* Increased viewbox */
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_8_5)">
          <circle cx="29" cy="25" r="25" fill={color} />
          <circle cx="29" cy="25" r="24.5" stroke="black" />
        </g>
        <defs>
          <filter
            id="filter0_di_8_5"
            x="0"
            y="0"
            width="64"
            height="64"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_5"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_5"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_8_5"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default Indicators;
