import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useLayoutEffect(() => {
    // Animate cards from the left
    gsap.utils.toArray('.card-left').forEach((card) => {
      gsap.from(card, {
        x: -300,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      });
    });

    // Animate cards from the right
    gsap.utils.toArray('.card-right').forEach((card) => {
      gsap.from(card, {
        x: 300,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="page-container">
      <div className="center-card">
        <h1>Welcome to GSAP</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          suscipit magna et nisl ultrices, a volutpat odio tempor.
        </p>
      </div>

      <div className="cards-section">
        <div className="card card-left">Card 1</div>
        <div className="card card-right">Card 2</div>
        <div className="card card-left">Card 3</div>
        <div className="card card-right">Card 4</div>
      </div>
    </div>
  );
};

export default Section;
