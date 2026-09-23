"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Generate pseudo-random visitor count
    const base = 1000;
    const random = Math.floor(Math.random() * 8000) + base;
    setCount(random);
    
    const timeout = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-black/80 border border-green-500/30 rounded-lg px-3 py-2 font-mono text-[9px] sm:text-[10px] text-green-400 backdrop-blur-sm shadow-lg shadow-green-950/20">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
        <span>visitor #{count}</span>
      </div>
    </div>
  );
}
