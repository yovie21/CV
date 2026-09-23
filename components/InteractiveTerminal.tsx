"use client";

import { useState, useEffect, useRef } from "react";

interface Command {
  cmd: string;
  output: string | (() => string);
  type?: "text" | "matrix" | "clear";
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "", output: "Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [visitorCount] = useState(() => Math.floor(Math.random() * 9000) + 1000);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | (() => void)> = {
    help: () => {
      setHistory((prev) => [...prev, { 
        cmd: "help", 
        output: `Available commands:
  help        - show this menu
  about       - about yovie
  skills      - list skills
  projects    - view projects
  contact     - contact info
  whoami      - identity check
  sudo        - try it ;)
  matrix      - enter the matrix
  coffee      - take a break
  hack        - initiate hack sequence
  visitor     - check visitor count
  clear       - clear terminal` 
      }]);
    },
    about: () => setHistory((prev) => [...prev, { 
      cmd: "about", 
      output: "Yovie Muhammad Rizki — Software Engineer from Sukoharjo, Jawa Tengah. Full-stack developer with focus on Next.js, Laravel, React.js, and Flutter. Check /about for full profile." 
    }]),
    skills: () => setHistory((prev) => [...prev, { 
      cmd: "skills", 
      output: `Backend:   PHP, Laravel, MySQL
Frontend:  Next.js, React.js, JavaScript, HTML, CSS
Mobile:    Flutter, Dart
AI Agents: 9Router, Hermes Agent
Soft:      Teamwork` 
    }]),
    projects: () => setHistory((prev) => [...prev, { 
      cmd: "projects", 
      output: "7 repos on GitHub @yovie21. Visit /projects for details." 
    }]),
    contact: () => setHistory((prev) => [...prev, { 
      cmd: "contact", 
      output: `Email:     yovie6513@gmail.com
WhatsApp:  082297920784
GitHub:    github.com/yovie21
Visit /contact for full contact form.` 
    }]),
    whoami: () => setHistory((prev) => [...prev, { 
      cmd: "whoami", 
      output: "yovie21 — visitor with root access to this portfolio." 
    }]),
    sudo: () => setHistory((prev) => [...prev, { 
      cmd: "sudo", 
      output: "Nice try! You're not root here. 😏" 
    }]),
    matrix: () => {
      setShowMatrix(true);
      setHistory((prev) => [...prev, { cmd: "matrix", output: "Wake up, Neo... The Matrix has you. (loading 3s)" }]);
      setTimeout(() => setShowMatrix(false), 3000);
    },
    coffee: () => setHistory((prev) => [...prev, { 
      cmd: "coffee", 
      output: `☕ Brewing...
  
   (  )   (   )  )
    ) (    )  (  )
    (__(___)__(___)
  
  Coffee break activated. Take it easy! 🚀` 
    }]),
    hack: () => setHistory((prev) => [...prev, { 
      cmd: "hack", 
      output: `[████████████████████████] 100%
ACCESS GRANTED — Welcome, hacker. 🖥️
Just kidding, this is a portfolio. 😄` 
    }]),
    visitor: () => setHistory((prev) => [...prev, { 
      cmd: "visitor", 
      output: `> visitor #${visitorCount} logged in
> session active
> IP: 127.0.0.1 (just kidding 😜)` 
    }]),
    clear: () => setHistory([]),
    cls: () => setHistory([]),
    ls: () => setHistory((prev) => [...prev, { 
      cmd: "ls", 
      output: "home/  about/  projects/  contact/  README.md  .secret" 
    }]),
    cat: () => setHistory((prev) => [...prev, { 
      cmd: "cat", 
      output: "Usage: cat <file>. Try 'cat README.md' or 'cat .secret'" 
    }]),
    "cat README.md": () => setHistory((prev) => [...prev, { 
      cmd: "cat README.md", 
      output: "# Yovie Muhammad Rizki\nSoftware Engineer\n\nThis is an interactive portfolio. Type 'help' for commands." 
    }]),
    "cat .secret": () => setHistory((prev) => [...prev, { 
      cmd: "cat .secret", 
      output: "You found a secret! 🎉 The Konami Code is hidden somewhere on this page..." 
    }]),
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "") {
      setHistory((prev) => [...prev, { cmd: "", output: "" }]);
      return;
    }
    const handler = commands[trimmed];
    if (handler) {
      if (typeof handler === "function") {
        handler();
      }
    } else {
      setHistory((prev) => [...prev, { 
        cmd: trimmed, 
        output: `Command not found: ${trimmed}. Type 'help' for available commands.` 
      }]);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <>
      {showMatrix && <MatrixRain />}
      <div className="mt-6 mb-4">
        <div className="text-gray-500 text-[10px] sm:text-xs mb-2">
          $ ./interactive_terminal.sh — type 'help' to start
        </div>
        <div 
          ref={terminalRef}
          className="bg-black/80 border border-green-500/30 rounded-lg p-3 sm:p-4 h-48 sm:h-56 overflow-y-auto font-mono text-[10px] sm:text-xs"
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.cmd && (
                <div className="text-green-400">
                  <span className="text-gray-500">yovie@dev:~$ </span>
                  {entry.cmd}
                </div>
              )}
              {entry.output && (
                <div className="text-gray-400 whitespace-pre-wrap ml-2">{entry.output}</div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-1">
            <span className="text-gray-500">yovie@dev:~$ </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommand(input);
                  setInput("");
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-green-400 text-[10px] sm:text-xs"
              placeholder="type a command..."
              autoFocus
            />
            <span className="text-green-400 animate-pulse">█</span>
          </div>
        </div>
      </div>
    </>
  );
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const interval = setInterval(() => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
