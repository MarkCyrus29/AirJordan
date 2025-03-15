import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ShoeSection from "./shoe-section";
import Navbar from "./navbar";
import Lenis from "@studio-freight/lenis";
import red from "../assets/red.png";
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import yellow from "../assets/yellow.png";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true);

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
          end: "2000 bottom",
          scrub: 1,
          markers: true,
          pin: true,
          snap: 1 / 3,
        },
      }
    );
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
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

  return (
    <section className="scroll-section-outer h-dvh overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-dvh w-[400dvw] flex flex-row relative"
        >
          <ShoeSection image={red} />
          <ShoeSection image={blue} />
          <ShoeSection image={green} />
          <ShoeSection image={yellow} />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
