import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCardsForm from "../ScrollCardsForm/ScrollCardsForm";

gsap.registerPlugin(ScrollTrigger);

const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const ScrollCards2 = () => {
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
          start: "left 80%",
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
    <div className="d-flex justify-content-between w-100">
      {/* Left: Form */}
      {/* <div
        ref={formRef}
        className="form-container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" rows={4} style={inputStyle} />
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
      </div> */}
      <ScrollCardsForm />

      {/* Right: GIF */}
      <div
        ref={gifRef}
        className="gif-container"
        style={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <video data-v-4d321420="" loop="loop" playsinline="" muted="muted" poster="" autoplay="autoplay" width={'50%'}>
        <source data-v-4d321420="" src="https://s3.us-east-1.amazonaws.com/animaapp.com/Visual+1+(2).mp4" type="video/mp4"></source>

        </video>
      </div>
    </div>
  );
};

export default ScrollCards2;
