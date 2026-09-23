"use client";

import { useState, useEffect } from "react";

export default function LoadingBar() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let path = window.location.pathname;
    
    const handleNavStart = () => {
      setVisible(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 90) return 90;
          return p + 10;
        });
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setVisible(false), 200);
      }, 800);
    };

    // Trigger on page load
    handleNavStart();

    return () => {};
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[150] pointer-events-none">
      <div className="h-0.5 bg-gray-900">
        <div
          className="h-full bg-green-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
