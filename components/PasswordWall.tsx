"use client";

import { useState } from "react";

export default function PasswordWall({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "yovie21" || password === "root" || password === "admin") {
      setUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md bg-black/90 border border-green-500/40 rounded-xl p-6 shadow-2xl shadow-green-950/40">
        <div className="text-gray-500 text-xs mb-4">$ sudo su — secure_access_required</div>
        <div className="text-green-400 text-sm font-bold mb-4">RESTRICTED ACCESS AREA</div>
        <p className="text-gray-400 text-xs mb-6">
          Masukkan password root/akses untuk masuk ke portofolio. (Hint: coba ketik <span className="text-green-400 font-bold">yovie21</span>)
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs text-green-500 mb-1">$ password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-green-500/40 rounded px-3 py-2 text-green-400 text-xs focus:outline-none focus:border-cyan-400"
              placeholder="••••••"
              autoFocus
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-xs animate-shake">
              [!] Access Denied: Incorrect password.
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded text-xs transition-all"
          >
            Authenticate →
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-green-500/20 text-center">
          <button
            onClick={() => setUnlocked(true)}
            className="text-gray-500 hover:text-green-400 text-[10px] underline"
          >
            [ Skip Authentication (Bypass) ]
          </button>
        </div>
      </div>
    </div>
  );
}
