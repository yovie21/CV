"use client";

import { useState, useEffect } from "react";

interface Commit {
  repo: string;
  message: string;
  date: string;
}

export default function GithubActivity() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/yovie21/events/public")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const pushEvents = data
            .filter((e: any) => e.type === "PushEvent")
            .slice(0, 3)
            .map((e: any) => ({
              repo: e.repo.name.replace("yovie21/", ""),
              message: e.payload.commits?.[0]?.message || "Update codebase",
              date: new Date(e.created_at).toLocaleDateString(),
            }));
          setCommits(pushEvents);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-gray-500 text-xs">$ fetching github commits...</div>;
  if (commits.length === 0) return null;

  return (
    <div className="mt-6">
      <div className="text-gray-500 text-xs sm:text-sm mb-2">$ git log --recent</div>
      <div className="bg-black/60 border border-green-500/20 rounded-lg p-4 font-mono text-xs">
        {commits.map((c, i) => (
          <div key={i} className="mb-2 last:mb-0">
            <span className="text-green-400 font-bold">[{c.repo}]</span>{" "}
            <span className="text-gray-300">{c.message}</span>
            <span className="text-gray-600 ml-2">({c.date})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
