"use client";

import { useState, useEffect } from "react";

const themes = {
  green: {
    '--background': '#000000',
    '--foreground': '#33ff33',
    '--terminal-green': '#00ff00',
    '--terminal-bright-green': '#00ff00',
    '--scanline': 'rgba(255,255,255,0.03)',
    '--crt-distortion': '#0f0',
  },
  amber: {
    '--background': '#0a0a00',
    '--foreground': '#ffcc00',
    '--terminal-green': '#ffcc00',
    '--terminal-bright-green': '#ffcc00',
    '--scanline': 'rgba(255,255,0,0.03)',
    '--crt-distortion': '#ff0',
  },
  blue: {
    '--background': '#001020',
    '--foreground': '#00aaff',
    '--terminal-green': '#00aaff',
    '--terminal-bright-green': '#00aaff',
    '--scanline': 'rgba(0,255,255,0.03)',
    '--crt-distortion': '#0ff',
  },
} as const;

type ThemeKey = keyof typeof themes;

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<ThemeKey>('green');

  useEffect(() => {
    const root = document.documentElement;
    const vars = themes[current];
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }
  }, [current]);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-2">
      {(Object.keys(themes) as ThemeKey[]).map((t) => (
        <button
          key={t}
          onClick={() => setCurrent(t)}
          className={`px-2 py-1 text-xs rounded border ${t === current ? 'bg-green-500 text-black' : 'bg-black/80 border-green-500/30 text-green-400'}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
