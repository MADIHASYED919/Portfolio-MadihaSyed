

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./loading.css";

export default function Loading() {
  const lettersRef = useRef([]);
  const loadingRef = useRef(null);

  useEffect(() => {
    const letters = lettersRef.current;

    gsap.to(letters, {
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      onComplete: () => {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          onComplete: () => {
            loadingRef.current.style.display = "none";
          },
        });
      },
    });
  }, []);

  const name = ["M","A","D","I","H","A"," "," ","S","Y" ,"E","D"];

  return (
    <div id="loading" ref={loadingRef} >
      <div className="loading-text "  >
        {name.map((letter, i) => (
          <span
            key={i}
            data-text={letter}
            ref={(el) => (lettersRef.current[i] = el)}
          >

        {letter}
          </span>
        ))}
      </div>
    </div>
  );
}