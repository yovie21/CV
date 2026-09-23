"use client";

import Link from "next/link"
import HackerBio from "@/components/HackerBio"
import GlitchName from "@/components/GlitchName"
import TypewriterJSON from "@/components/TypewriterJSON"
import InteractiveTerminal from "@/components/InteractiveTerminal"
import VisitorCounter from "@/components/VisitorCounter"
import KonamiCode from "@/components/KonamiCode"
import { useState, useEffect } from "react"

export default function Home() {
  const [booted, setBooted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [lines, setLines] = useState<string[]>([])

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

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        setProgress(Math.round(((i + 1) / bootLines.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooted(true), 600);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!booted && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 font-mono">
          <div className="w-full max-w-2xl">
            <div className="text-green-400 text-xs sm:text-sm space-y-1 mb-6">
              {lines.map((line, idx) => (
                <div key={idx} className="opacity-100">{line}</div>
              ))}
              {lines.length < bootLines.length && (
                <div className="text-green-400 animate-pulse">█</div>
              )}
            </div>
            <div className="w-full bg-gray-900 rounded h-2 overflow-hidden border border-green-500/30">
              <div
                className="bg-green-500 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-gray-500 text-[10px] sm:text-xs mt-2 text-right">{progress}%</div>
          </div>
        </div>
      )}

      {booted && (
        <main className="min-h-screen flex items-center justify-center p-3 sm:p-4">
          <div className="w-full max-w-5xl">
            <div className="bg-black/80 border border-green-500/30 rounded-t-xl px-3 sm:px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-[9px] sm:text-xs font-mono text-gray-500 ml-1">bash - yovie@dev-machine:~</span>
            </div>

            <div className="bg-black/80 border-x border-b border-green-500/30 rounded-b-xl p-4 sm:p-6 md:p-8 font-mono text-left mb-8 sm:mb-12 shadow-lg shadow-green-950/20">
              <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ whoami</div>
              <GlitchName />

              <div className="mt-5 sm:mt-6">
                <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ cat status.json</div>
                <TypewriterJSON />
              </div>

              <div className="mt-5 sm:mt-6">
                <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ echo $BIO</div>
                <HackerBio />
              </div>

              <InteractiveTerminal />

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-500/10">
                <div className="text-gray-500 text-[10px] sm:text-xs mb-3">$ ls ./pages/</div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <Link href="./about/" className="group bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-400/40 rounded-lg p-3 sm:p-4 transition-all">
                    <div className="text-green-400 text-xs sm:text-sm group-hover:text-green-300">./about/</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs mt-1">Tentang Saya</div>
                  </Link>
                  <Link href="./projects/" className="group bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-400/40 rounded-lg p-3 sm:p-4 transition-all">
                    <div className="text-green-400 text-xs sm:text-sm group-hover:text-green-300">./projects/</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs mt-1">Proyek Saya</div>
                  </Link>
                  <Link href="./contact/" className="group bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-400/40 rounded-lg p-3 sm:p-4 transition-all">
                    <div className="text-green-400 text-xs sm:text-sm group-hover:text-green-300">./contact/</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs mt-1">Hubungi Saya</div>
                  </Link>
                  <a href="https://github.com/yovie21" target="_blank" rel="noopener noreferrer" className="group bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-400/40 rounded-lg p-3 sm:p-4 transition-all">
                    <div className="text-green-400 text-xs sm:text-sm group-hover:text-green-300">github.com/yovie21</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs mt-1">GitHub Profile</div>
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-500/10 text-center">
                <p className="text-gray-600 text-[10px] sm:text-xs">Built with Next.js + Tailwind CSS | Yovie Muhammad Rizki &copy; 2026</p>
              </div>
            </div>
          </div>
        </main>
      )}

      <VisitorCounter />
      <KonamiCode />
    </>
  )
}
