import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCards2 from "./ScrollCards2/ScrollCards2";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    image: "/images/1.jpg",
    title: "Innovate with Impact",
    description: "Explore how innovation shapes the future through design, technology, and creativity.",
  },
  {
    image: "/images/2.jpg",
    title: "Empower with Data",
    description: "Unlock the true potential of your data to make intelligent decisions faster.",
  },
  {
    image: "/images/3.jpg",
    title: "Connect Seamlessly",
    description: "Bridge teams and ideas with fluid collaboration and intuitive interfaces.",
  },
  {
    image: "/images/4.jpg",
    title: "Secure and Scalable",
    description: "Deliver secure, scalable solutions to power business growth and agility.",
  },
];

const ScrollCards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const textRefs = useRef([]);
  const introRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      content.forEach((_, i) => {
        const image = cardRefs.current[i].querySelector("img");
        const text = textRefs.current[i];

        gsap.set(image, { opacity: 0, scale: 0.9, filter: "blur(5px)", zIndex: 0 });
        gsap.set(text, { opacity: 0, x: -50 });

        gsap.to(image, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          zIndex: content.length + i,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${i * 100} center`,
            end: `top+=${(i + 1) * 100} center`,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });

        gsap.to(text, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${i * 100} center`,
            end: `top+=${(i + 1) * 100} center`,
            scrub: true,
            pinSpacing: false,
          },
        });

        if (i > 0) {
          const prevImage = cardRefs.current[i - 1].querySelector("img");
          const prevText = textRefs.current[i - 1];

          gsap.to(prevImage, {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${i * 100} center`,
              end: `top+=${(i + 1) * 100} center`,
              scrub: true,
            },
          });

          gsap.to(prevText, {
            opacity: 0,
            x: -50,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${i * 100} center`,
              end: `top+=${(i + 1) * 100} center`,
              scrub: true,
            },
          });
        }
      });

      // 🔥 Scroll-triggered Section
      if (fourthSectionRef.current) {
        gsap.fromTo(
          fourthSectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: fourthSectionRef.current,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }

      // 🌀 Carousel Animation: Slow and scroll-based movement
      if (carouselRef.current) {
        gsap.to(carouselRef.current, {
          x: "-100%", // Move by 100% to the left
          duration: 3, // Slow the movement to 3 seconds per scroll
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true, // Scrub smoothens the movement
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div>
        {/* ✅ Intro Section */}
        <div
          ref={introRef}
          style={{
            height: "80vh",
            background: "#111",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10%",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#fff" }}>
            Welcome to the Future of Experience
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
            Scroll down to explore how innovation, data, connectivity, and security shape modern digital solutions.
          </p>
        </div>

        {/* ✅ Scroll Cards Section */}
        <div
          ref={containerRef}
          style={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 5%",
                boxSizing: "border-box",
              }}
            >
              <div
                ref={(el) => (textRefs.current[index] = el)}
                style={{
                  width: "40%",
                  color: "#fff",
                  zIndex: 10,
                  textAlign: "left",
                  paddingRight: "2rem",
                }}
              >
                <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.title}</h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#000" }}>{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={`Scroll Image ${index + 1}`}
                style={{
                  height: "50%",
                  objectFit: "contain",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Spacer after cards */}
        <div style={{ height: "30vh" }} />

        {/* ✅ ScrollCards2 Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "100px 10%",
            background: "#fff5ed",
            color: "#111",
            minHeight: "100vh",
            boxSizing: "border-box",
            gap: "3rem",
          }}
        >
          <ScrollCards2 />
        </div>

        {/* ✅ 4th Scroll-triggered Section */}
        <div
          ref={fourthSectionRef}
          style={{
            height: "50vh",
            background: "#111",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10%",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Discover Seamless Animations
          </h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
            This section uses GSAP's ScrollTrigger to animate content smoothly as you scroll. Perfect for storytelling and focus.
          </p>
        </div>

        {/* ✅ Carousel Section */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            height: "60vh", // Full viewport height
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "400%", // Ensuring four images fit into the carousel
              height: "100%",
              gap: "30px",
              padding: "0px 40px",
            }}
          >
            <img
              src="/images/1.jpg"
              alt="Carousel Image 1"
              style={{
                width: "25%",
                objectFit: "contain",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
            />
            <img
              src="/images/2.jpg"
              alt="Carousel Image 2"
              style={{
                width: "25%",
                objectFit: "contain",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
            />
            <img
              src="/images/3.jpg"
              alt="Carousel Image 3"
              style={{
                width: "25%",
                objectFit: "contain",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
            />
            <img
              src="/images/4.jpg"
              alt="Carousel Image 4"
              style={{
                width: "25%",
                objectFit: "contain",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Final Spacer */}
        {/* <div style={{ height: "100vh" }} /> */}
      </div>
    </>
  );
};

export default ScrollCards;
