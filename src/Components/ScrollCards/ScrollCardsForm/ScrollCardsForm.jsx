import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollCardsForm.css'

gsap.registerPlugin(ScrollTrigger);

const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "0.5rem",
  border: "2px solid #ccc",  // Default border
  fontSize: "1rem",
  transition: "all 0.3s ease",  // Smooth transition for focus effects
  outline: "none",
};

const ScrollCardsForm = () => {
  const formRef = useRef(null);
  const gifRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      gifRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gifRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Left: Form */}
      <div
        ref={formRef}
        className="form-container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width:'30vw'
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
            className="input-field"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
            className="input-field"
          />
          <button
            type="submit"
            style={{
              padding: "0.8rem 1.5rem",
              background: "rgb(231, 126, 56)",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default ScrollCardsForm;
