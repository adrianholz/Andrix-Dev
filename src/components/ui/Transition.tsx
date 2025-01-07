"use client";

import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./Transition.css";

export default function Transition() {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const pElement = pRef.current;

    if (!pElement) return;

    const observer = new MutationObserver(() => {
      setText(pElement.innerText);
    });

    observer.observe(pElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="transition" aria-hidden="true">
      <div className="transition-title">
        <p ref={pRef}></p>
        <TypewriterComponent
          onInit={(typewriter) => {
            if (text) {
              typewriter.changeDelay(60).typeString(text).start();
            }
          }}
          key={text}
        />
      </div>
    </div>
  );
}
