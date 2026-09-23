"use client";

import { useState, useEffect } from "react";

const bioText = "Software Engineer dengan background unik: 5+ tahun pengalaman di retail (PT. Assalaam Niaga Utama, PT. Delamibrands Kharisma Busana) sebelum beralih ke dunia teknologi. Lulusan Teknik Informatika S1 (Universitas Duta Bangsa, 2026). Menguasai full-stack development: Next.js, React.js, Laravel, Flutter, dan database MySQL. Terbiasa menyelesaikan masalah end-to-end—dari desain database, pengembangan API, hingga deployment. Cepat belajar, detail-oriented, dan siap berkontribusi dalam tim engineering.";

export default function HackerBio() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const interval = setInterval(() => {
      if (i >= bioText.length) {
        clearInterval(interval);
        setDone(true);
        return;
      }
      // Scramble effect: show random chars before settling
      const target = bioText.substring(0, i + 1);
      const scrambleLen = Math.min(3, bioText.length - i);
      let scrambled = target;
      for (let j = 0; j < scrambleLen; j++) {
        const randChar = chars[Math.floor(Math.random() * chars.length)];
        scrambled = scrambled.substring(0, scrambled.length - 1) + randChar;
      }
      setDisplayed(scrambled);
      
      // After a short delay, settle the character
      setTimeout(() => {
        setDisplayed(target);
      }, 50);
      
      i++;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-green-400 text-sm md:text-base mb-8 leading-relaxed font-mono">
      {displayed}
      <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${done ? "animate-pulse" : ""}`}></span>
    </p>
  );
}
