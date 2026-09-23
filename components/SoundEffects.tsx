"use client";

import { useEffect, useRef } from "react";

export default function SoundEffects() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We can't easily include audio files in a static site without a public URL.
    // Instead, use a lightweight tone generator for a "click" sound.
    const playClick = () => {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    };

    const handleKey = () => playClick();
    window.addEventListener("keydown", handleKey);
    window.addEventListener("click", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("click", handleKey);
    };
  }, []);

  return null;
}
