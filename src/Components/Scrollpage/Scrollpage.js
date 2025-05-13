import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollPage.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  useLayoutEffect(() => {
    gsap.from('.left', {
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.left',
        start: 'left 80%',
        end: 'left 60%',
        scrub: true,
        markers: true, // 👈 shows debug lines
      },
    });

    gsap.from('.right', {
      x: 300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.right',
        start: 'right 80%',
        end: 'right 60%',
        scrub: true,
        markers: true, // 👈 shows debug lines
      },
    });
  }, []);

  return (
    <div className="page-container">
      <div className="spacer">Scroll down</div>

      <div className="left">
        <h2>Left Animation</h2>
        <p>This box slides in from the left on scroll.</p>
      </div>

      <div className="spacer" />

      <div className="right">
        <h2>Right Animation</h2>
        <p>This box slides in from the right on scroll.</p>
      </div>

      <div className="spacer" />
    </div>
  );
};

export default ScrollPage;
