import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ShoeSection from "./shoe-section";
import Lenis from "@studio-freight/lenis";
import red from "../../assets/images/red.png";
import blue from "../../assets/images/blue.png";
import green from "../../assets/images/green.png";
import yellow from "../../assets/images/yellow.png";
import CarouselIndicators from "./carouselIndicators/carouselIndicators";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: window.innerHeight * 3 + "bottom",
          scrub: 1,
          pin: true,
          snap: {
            snapTo: [0, 0.33, 0.66, 1], // Defined snap points
            duration: 0.5, // Smoother snapping
            ease: "power2.out",
            inertia: false,
          },
        },
      }
    );
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      // console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      pin.kill();
    };
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight * 4;
    const shoeIds = ["#redShoe", "#blueShoe", "#greenShoe", "#yellowShoe"];
    shoeIds.forEach((id, index) => {
      ScrollTrigger.create({
        trigger: id,
        start: windowHeight * (index / 4) + " center",
        end: windowHeight * ((index + 1) / 4) + " center",
        scrub: true,
        toggleClass: { targets: ".btn" + index, className: "visible" },
      });
    });
    shoeIds.forEach((id, index) => {
      ScrollTrigger.create({
        trigger: id,
        start: windowHeight * (index / 4) + " center",
        end: windowHeight * ((index + 1) / 4) + " center",
        scrub: true,
        toggleClass: { targets: id, className: "visible" },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="scroll-section-outer h-dvh">
      <div ref={triggerRef}>
        <CarouselIndicators />
        <div
          id="scrollingSection"
          ref={sectionRef}
          className="scroll-section-inner h-dvh w-[400dvw] flex flex-row relative"
        >
          <ShoeSection image={red} id="redShoe" />
          <ShoeSection image={blue} id="blueShoe" />
          <ShoeSection image={green} id="greenShoe" />
          <ShoeSection image={yellow} id="yellowShoe" />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
