import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CRTDistortion from "@/components/CRTDistortion";

export const metadata: Metadata = {
  title: "Yovie Muhammad | Software Engineer",
  description: "Portfolio Yovie Muhammad — Next.js, TypeScript, Laravel, Flutter",
};

const nav = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen text-gray-300 flex flex-col font-mono relative">
        <div className="crt-overlay" />
        <CRTDistortion />
        <nav className="sticky top-0 z-50 border-b border-green-500/20 bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
            <Link href="/" className="font-mono text-xs sm:text-sm text-green-400 hover:text-green-300">
              yovie21@dev<span className="text-gray-600">:~$</span>
            </Link>
            <div className="flex flex-wrap gap-0.5 sm:gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[10px] sm:text-xs text-gray-500 hover:text-green-400 px-2 py-1.5 rounded hover:bg-green-500/10 transition-all"
                >
                  ./{item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1 w-full relative z-10">{children}</main>
        <footer className="py-4 sm:py-6 text-center text-gray-600 border-t border-green-500/10 font-mono text-[10px] sm:text-xs relative z-10">
          <p>© {new Date().getFullYear()} yovie21 • built with Next.js + Tailwind</p>
        </footer>
      </body>
    </html>
  );
}
