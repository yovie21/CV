"use client";

import { useEffect } from "react";

export default function CRTDistortion() {
  useEffect(() => {
    const overlay = document.createElement('div');
    overlay.className = 'crt-distortion';
    document.body.appendChild(overlay);
    return () => document.body.removeChild(overlay);
  }, []);

  return null;
}
