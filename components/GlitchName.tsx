"use client";

import { useState, useEffect } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>?/\\|";

export default function GlitchName() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const fullText = "Yovie Muhammad Rizki";
    let i = 0;

    const interval = setInterval(() => {
      if (i >= fullText.length) {
        clearInterval(interval);
        setDisplayed(fullText);
        setDone(true);
        return;
      }

      const target = fullText.substring(0, i + 1);
      const scrambleLen = Math.min(4, fullText.length - i);
      let scrambled = target;
      for (let j = 0; j < scrambleLen; j++) {
        const randChar = chars[Math.floor(Math.random() * chars.length)];
        scrambled = scrambled.substring(0, scrambled.length - 1) + randChar;
      }
      setDisplayed(scrambled);
      setTimeout(() => setDisplayed(target), 30);
      i++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Random glitch after done
  useEffect(() => {
    if (!done) return;
    const fullText = "Yovie Muhammad Rizki";
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      let scrambled = "";
      for (let c of fullText) {
        if (Math.random() < 0.3 && c !== " ") {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        } else {
          scrambled += c;
        }
      }
      setDisplayed(scrambled);
      setTimeout(() => {
        setDisplayed(fullText);
        setGlitchActive(false);
      }, 80);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, [done]);

  return (
    <h1 className={`relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight inline-block ${glitchActive ? "animate-pulse" : ""}`}>
      <span className="relative z-10 text-white" style={{ textShadow: glitchActive ? "2px 0 #ff0000, -2px 0 #00ffff" : "none" }}>
        {displayed}
      </span>
      {!done && (
        <span className="inline-block w-2 h-6 sm:h-8 bg-green-400 ml-1 animate-pulse align-middle"></span>
      )}
      {done && (
        <span className="absolute inset-0 flex items-center justify-start opacity-0 pointer-events-none">
          <span className="text-cyan-400 blur-sm">{displayed}</span>
        </span>
      )}
    </h1>
  );
}
