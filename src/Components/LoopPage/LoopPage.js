import React, { useEffect, useRef } from "react";
import "./LoopPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LoopPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
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
    };
  }, []);

  return (
    <div className="loop-container" ref={containerRef}>
      <section className="panel panel1">
        <h1>Welcome to AI</h1>
        <p>Modern AI reshaping industries.</p>
      </section>
      <section className="panel panel2">
        <h1>Cybersecurity</h1>
        <p>Data protection and new trends.</p>
      </section>
      <section className="panel panel3">
        <h1>Cloud Evolution</h1>
        <p>Future of cloud infrastructure.</p>
      </section>
      <section className="panel panel4">
        <h1>Explore More</h1>
        <p>Innovation beyond limits.</p>
      </section>
    </div>
  );
};

export default LoopPage;
