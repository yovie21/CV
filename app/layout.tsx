import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yovie Muhammad | Software Engineer",
  description: "Portfolio Yovie Muhammad — Next.js, TypeScript, Node.js",
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
    <html lang="id">
      <body className="min-h-screen text-slate-100 flex flex-col">
        <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-cyan-400 hover:text-cyan-300">
              yovie21@dev<span className="text-slate-500">:~$</span>
            </Link>
            <div className="flex gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-xs text-slate-400 hover:text-cyan-400 px-3 py-2 rounded-md hover:bg-slate-900"
                >
                  ./{item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="py-8 text-center text-slate-500 border-t border-slate-900 font-mono text-xs">
          <p>© {new Date().getFullYear()} yovie21 · built with Next.js + Tailwind</p>
        </footer>
      </body>
    </html>
  );
}
