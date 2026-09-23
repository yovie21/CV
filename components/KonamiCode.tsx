"use client";

import { useState, useEffect } from "react";

export default function KonamiCode() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const sequence = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let position = 0;

    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;
      const expected = sequence[position];

      if (key.toLowerCase() === expected.toLowerCase()) {
        position++;
        if (position === sequence.length) {
          setUnlocked(true);
          setTimeout(() => setUnlocked(false), 5000);
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!unlocked) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center pointer-events-none">
      <div className="bg-black/90 border-2 border-green-500 rounded-xl p-6 sm:p-8 text-center font-mono">
        <div className="text-3xl sm:text-5xl mb-3">🎮</div>
        <div className="text-green-400 text-lg sm:text-2xl font-bold mb-2">KONAMI CODE UNLOCKED!</div>
        <div className="text-gray-400 text-xs sm:text-sm">You found the secret! 🎉</div>
        <div className="text-gray-500 text-[10px] mt-2">+9000 hacker points</div>
      </div>
    </div>
  );
}
