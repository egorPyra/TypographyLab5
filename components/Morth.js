import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MorphingAnimation = ({ path1, path2, delay = 0, duration = 1 }) => {
  const morphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true,  delay }); // Infinite loop with yoyo effect and delay

    tl.to(morphRef.current, {
      duration: duration,
      attr: {
        d: path2 // Path data of the second SVG
      },
      ease: "power1.inOut"
    });

    return () => tl.kill(); // Cleanup when component unmounts
  }, [path1, path2, delay, duration]);

  return (
    <svg width="200" height="180" viewBox="0 0 200 280">
      <path ref={morphRef} d={path1} fill="none" stroke="white" strokeWidth="5"/>
    </svg>
  );
};

export default MorphingAnimation;
