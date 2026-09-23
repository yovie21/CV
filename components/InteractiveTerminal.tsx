"use client";

import { useState, useEffect, useRef } from "react";

interface Command {
  cmd: string;
  output: string;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<Command[]>([
    { cmd: "", output: "Type 'help' to see available commands. Use Up/Down arrows for history." },
  ]);
  const [input, setInput] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [visitorCount] = useState(() => Math.floor(Math.random() * 9000) + 1000);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | (() => void)> = {
    help: () => {
      addOutput("help", `Available commands:
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
  clear       - clear terminal`);
    },
    about: () => addOutput("about", "Yovie Muhammad Rizki — Software Engineer from Sukoharjo, Jawa Tengah. Full-stack developer with focus on Next.js, Laravel, React.js, and Flutter."),
    skills: () => addOutput("skills", "Backend: PHP, Laravel, MySQL\nFrontend: Next.js, React.js, JavaScript, HTML, CSS\nMobile: Flutter, Dart\nAI Agents: 9Router, Hermes Agent"),
    projects: () => addOutput("projects", "7 repos on GitHub @yovie21. Visit /projects for details."),
    contact: () => addOutput("contact", "Email: yovie6513@gmail.com\nWhatsApp: 082297920784\nGitHub: github.com/yovie21"),
    whoami: () => addOutput("whoami", "yovie21 — visitor with root access to this portfolio."),
    sudo: () => addOutput("sudo", "Nice try! You're not root here. 😏"),
    matrix: () => {
      setShowMatrix(true);
      addOutput("matrix", "Wake up, Neo... The Matrix has you. (loading 3s)");
      setTimeout(() => setShowMatrix(false), 3000);
    },
    coffee: () => addOutput("coffee", "☕ Brewing...\n\n  (  )   (   )  )\n   ) (    )  (  )\n   (__(___)__(___)\n\nCoffee break activated. Take it easy! 🚀"),
    hack: () => addOutput("hack", "[████████████████████████] 100%\nACCESS GRANTED — Welcome, hacker. 🖥️"),
    visitor: () => addOutput("visitor", `> visitor #${visitorCount} logged in\n> session active`),
    clear: () => setHistory([]),
    cls: () => setHistory([]),
    ls: () => addOutput("ls", "home/  about/  projects/  contact/  README.md  .secret"),
  };

  const addOutput = (cmd: string, output: string) => {
    setHistory((prev) => [...prev, { cmd, output }]);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "") {
      setHistory((prev) => [...prev, { cmd: "", output: "" }]);
      return;
    }

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const handler = commands[trimmed];
    if (handler) {
      if (typeof handler === "function") handler();
    } else {
      addOutput(trimmed, `Command not found: ${trimmed}. Type 'help' for available commands.`);
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
          $ ./interactive_terminal.sh — type 'help' or use ↑↓ for history
        </div>
        <div 
          ref={terminalRef}
          className="bg-black/80 border border-green-500/30 rounded-lg p-3 sm:p-4 h-52 sm:h-60 overflow-y-auto font-mono text-[10px] sm:text-xs"
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
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  if (cmdHistory.length > 0) {
                    const nextIndex = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
                    setHistoryIndex(nextIndex);
                    setInput(cmdHistory[cmdHistory.length - 1 - nextIndex] || "");
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (historyIndex > 0) {
                    const nextIndex = historyIndex - 1;
                    setHistoryIndex(nextIndex);
                    setInput(cmdHistory[cmdHistory.length - 1 - nextIndex] || "");
                  } else if (historyIndex === 0) {
                    setHistoryIndex(-1);
                    setInput("");
                  }
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
