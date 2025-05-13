// components/LoopStyleScroll.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollTriggerpage.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerpage = () => {
  const containerRef = useRef();

useEffect(() => {
  const sections = gsap.utils.toArray(".section");

  const animation = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: containerRef.current,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + containerRef.current.offsetWidth,
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    animation.kill();
  };
}, []);


  return (
    <div className="scroll-container" ref={containerRef}>
      <section className="section one">Welcome</section>
      <section className="section two">AI Dashboard</section>
      <section className="section three">Cybersecurity</section>
      <section className="section four">Cloud Updates</section>
    </div>
  );
};

export default ScrollTriggerpage;
