"use client";

import { useState, useEffect } from "react";

const codeSnippets = [
  "const developer = { name: 'Yovie', role: 'Software Engineer' };",
  "function deployToProduction() { console.log('Deploying to Vercel & GitHub Pages...'); }",
  "import { useState, useEffect } from 'react'; // Next.js 16 app",
  "SELECT * FROM users WHERE status = 'Open to Work' AND location = 'Sukoharjo';",
  "async function fetchGitHubRepos() { const res = await fetch('https://api.github.com/users/yovie21'); }",
  "flutter run --release --target lib/main.dart",
  "git commit -m 'feat: add interactive terminal and matrix rain effects'",
  "tailwind.config.js → content: ['./app/**/*.{js,ts,jsx,tsx}']",
];

export default function HackerTyper() {
  const [text, setText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore special keys
      if (e.key.length > 1 && e.key !== "Enter") return;

      const currentSnippet = codeSnippets[snippetIndex];
      const nextCharsCount = Math.min(currentSnippet.length, charIndex + 4);

      if (nextCharsCount >= currentSnippet.length) {
        // Move to next snippet
        setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setCharIndex(0);
        setText((prev) => prev + "\n\n" + currentSnippet);
      } else {
        setCharIndex(nextCharsCount);
        setText((prev) => prev + currentSnippet.slice(charIndex, nextCharsCount));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [snippetIndex, charIndex]);

  return (
    <div className="mt-6">
      <div className="text-gray-500 text-[10px] sm:text-xs mb-2">
        $ ./hacker_typer.sh — ketik sembarang tombol di keyboard Anda!
      </div>
      <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 font-mono text-[11px] sm:text-xs text-green-400 h-36 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{text || "// Ketik apa saja di keyboard Anda untuk menulis kode secara instan..."}<span className="animate-pulse">█</span></pre>
      </div>
    </div>
  );
}
