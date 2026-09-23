"use client";

import { useState, useEffect } from "react";

interface HackerTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function HackerText({ text, className = "", tag = "span" }: HackerTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        return;
      }
      const target = text.substring(0, i + 1);
      const scrambleLen = Math.min(2, text.length - i);
      let scrambled = target;
      for (let j = 0; j < scrambleLen; j++) {
        const randChar = chars[Math.floor(Math.random() * chars.length)];
        scrambled = scrambled.substring(0, scrambled.length - 1) + randChar;
      }
      setDisplayed(scrambled);
      setTimeout(() => setDisplayed(target), 40);
      i++;
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  const Tag = tag;

  return (
    <Tag className={`${className}`}>
      {displayed}
      {!done && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>}
    </Tag>
  );
}
