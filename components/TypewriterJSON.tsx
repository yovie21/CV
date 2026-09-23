"use client";

import { useState, useEffect } from "react";

interface Line {
  key: string;
  value: string;
  type: "string" | "array" | "object";
}

const lines: Line[] = [
  { key: "role", value: "Software Engineer", type: "string" },
  { key: "location", value: "Sukoharjo, Jawa Tengah", type: "string" },
  { key: "stack", value: "Next.js, PHP, Laravel, React.js, Flutter", type: "array" },
  { key: "status", value: "Open to Work — IT / Developer", type: "string" },
  { key: "experience", value: "5+ years retail → tech", type: "string" },
  { key: "education", value: "S1 Teknik Informatika", type: "string" },
];

export default function TypewriterJSON() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentLine, setCurrentLine] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[visibleLines];
    const fullText = `  "${line.key}": ${formatValue(line)}`;

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30 + Math.random() * 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
        setCurrentLine("");
        setCurrentIndex(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentIndex]);

  function formatValue(line: Line): string {
    if (line.type === "array") {
      const items = line.value.split(", ");
      return `[${items.map((i) => `"${i}"`).join(", ")}]`;
    }
    return `"${line.value}"`;
  }

  return (
    <div className="bg-black/60 p-3 sm:p-4 rounded-lg border border-green-500/20 text-green-400 text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 font-mono leading-relaxed">
      <span className="text-gray-500">{"{"}</span>
      <br />
      {lines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="opacity-100">
          <span className="text-purple-400">&nbsp;&nbsp;"{line.key}"</span>:{" "}
          {line.type === "array" ? (
            <span>
              [
              {line.value.split(", ").map((item, j) => (
                <span key={j}>
                  <span className="text-green-400">"{item}"</span>
                  {j < line.value.split(", ").length - 1 && (
                    <span className="text-gray-400">, </span>
                  )}
                </span>
              ))}
              ]
            </span>
          ) : (
            <span className="text-green-400">"{line.value}"</span>
          )}
          {i < lines.length - 1 && <span className="text-gray-400">,</span>}
        </div>
      ))}
      {visibleLines < lines.length && (
        <div>
          <span className="text-purple-400">{currentLine}</span>
          <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle"></span>
        </div>
      )}
      <span className="text-gray-500">{"}"}</span>
      {done && (
        <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle"></span>
      )}
    </div>
  );
}
