import Link from "next/link"

export default function AboutPage() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    "Backend": ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "Prisma", "VS Code", "Linux"],
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20 mb-4">
          $ cat profile.yaml
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          <span className="text-cyan-400 font-mono">yovie@dev</span><span className="text-white">:~$ whoami</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Bio */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
            <div className="text-slate-500 font-mono text-xs mb-4">$ echo $BIO</div>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Software Engineer yang bersemangat membangun aplikasi web <span className="text-cyan-400">scalable</span>, <span className="text-cyan-400">maintainable</span>, dan <span className="text-cyan-400">user-centric</span>.
              Berpengalaman penuh siklus pengembangan—dari arsitektur database hingga deploy ke produksi.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
            <div className="text-slate-500 font-mono text-xs mb-4">$ cat experience.log</div>
            <div className="space-y-6 border-l-2 border-slate-700/50 pl-6">
              <div className="relative">
                <div className="absolute left-[-15px] top-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">2024 - Present</div>
                <h3 className="text-lg font-bold text-white mb-1">Junior Developer (Full-time)</h3>
                <p className="text-slate-400 text-sm">Mengembangkan sistem konsinyasi herbal (Next.js, Prisma, TiDB Cloud). Arsitektur full-stack: auth, RBAC, real-time sync, CSV export.</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-15px] top-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">2023 - 2024</div>
                <h3 className="text-lg font-bold text-white mb-1">Frontend Intern</h3>
                <p className="text-slate-400 text-sm">Komponen UI reusable, state management (React Context), optimasi bundle size, aksesibilitas (WCAG).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-6">
          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-6">
            <div className="text-slate-500 font-mono text-xs mb-4">$ ls -la ./skills/</div>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <div className="text-xs font-mono text-cyan-400 mb-2 flex items-center gap-2">
                    <span>.</span> {category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs font-mono bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-6">
            <div className="text-slate-500 font-mono text-xs mb-4">$ cat github.stats</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">15+</div>
                <div className="text-xs text-slate-500 font-sans">Repos</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">3+</div>
                <div className="text-xs text-slate-500 font-sans">Prod Apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}