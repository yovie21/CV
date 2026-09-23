"use client";

import { useState, useEffect } from "react";

const bootLines = [
  "> Initializing system... OK",
  "> Loading kernel modules... OK",
  "> Mounting filesystem /dev/sda1... OK",
  "> Starting network services... OK",
  "> Loading yovie21 profile... OK",
  "> Establishing SSH connection... OK",
  "> Decrypting portfolio data... OK",
  "> Launching terminal interface...",
  "> Welcome, visitor.",
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, bootLines[currentLine]]);
        setCurrentLine(currentLine + 1);
        setProgress(Math.round(((currentLine + 1) / bootLines.length) * 100));
      }, 200 + Math.random() * 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onDone();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, onDone]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 font-mono">
      <div className="w-full max-w-2xl">
        <div className="text-green-400 text-xs sm:text-sm space-y-1 mb-6">
          {lines.map((line, i) => (
            <div key={i} className="opacity-100 animate-in fade-in duration-300">
              {line}
            </div>
          ))}
          {currentLine < bootLines.length && (
            <div className="text-green-400">
              <span className="animate-pulse">█</span>
            </div>
          )}
        </div>
        <div className="w-full bg-gray-900 rounded h-2 overflow-hidden border border-green-500/30">
          <div
            className="bg-green-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-gray-500 text-[10px] sm:text-xs mt-2 text-right">
          {progress}%
        </div>
      </div>
    </div>
  );
}
