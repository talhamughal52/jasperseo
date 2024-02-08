"use client";
import { useEffect, useRef } from "react";
export default function Box() {
  const parentRef = useRef(null);
  const child1Ref = useRef(null);
  const child2Ref = useRef(null);
  useEffect(() => {
    // const handleMouseMove = (event) => {
    //   const parentRect = parentRef.current.getBoundingClientRect();
    //   const x = event.clientX - parentRect.left;
    //   const y = event.clientY - parentRect.top;

    //   const child1Transform = `translate3d(${-x * 0.4}px, ${-y * 0.4}px, 0px)`;
    //   const child2Transform = `translate3d(${-x * 0.4}px, ${-y * 0.4}px, 0px)`;

    //   child1Ref.current.style.transform = child1Transform;
    //   child2Ref.current.style.transform = child2Transform;
    // };
    const handleMouseMove = (event) => {
      const parentRect = parentRef.current.getBoundingClientRect();
      const x = event.clientX - parentRect.left;
      const y = event.clientY - parentRect.top;

      const child1Transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0px)`;
      const child2Transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0px)`;

      child1Ref.current.style.transform = child1Transform;
      child2Ref.current.style.transform = child2Transform;
    };

    parentRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      parentRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={parentRef}
      className="wpr-parallax-multi-layer"
      scalar-speed="10"
      direction="no"
      style={{
        overflow: "hidden",
        transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
      }}
    >
      <div
        ref={child1Ref}
        data-depth="0.4"
        style-top="30%"
        style-left="40%"
        className="wpr-parallax-ml-children elementor-repeater-item-471af14"
        style={{
          transform: "translate3d(-26.9px, 11.8px, 0px)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          position: "relative",
          display: "block",
          left: "0px",
          top: "0px",
          transition: "transform 0.5s ease-out",
        }}
      >
        <img decoding="async" src="/rectangle-1.png" />
      </div>
      <div
        ref={child2Ref}
        data-depth="0.4"
        style-top="72%"
        style-left="20%"
        className="wpr-parallax-ml-children elementor-repeater-item-acf2ce0"
        style={{
          transform: "translate3d(-26.9px, 11.8px, 0px)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          position: "absolute",
          display: "block",
          left: "0px",
          top: "0px",
          transition: "transform 0.5s ease-out",
        }}
      >
        <img decoding="async" src="/Polygon-1.png" />
      </div>
    </div>
  );
}
