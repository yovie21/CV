import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      {/* Terminal Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-t-xl p-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-xs font-mono text-slate-500 ml-2">bash - yovie@dev-machine:~</span>
      </div>

      {/* Terminal Body */}
      <div className="bg-slate-950 border-x border-b border-slate-800 rounded-b-xl p-8 font-mono text-left mb-12 shadow-2xl">
        <div className="text-slate-500 mb-2">$ whoami</div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          Yovie Muhammad
        </h1>
        <div className="text-slate-500 mb-2">$ cat status.json</div>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800/80 text-cyan-400 text-sm mb-6">
          <span className="text-slate-500 font-sans">{"{"}</span><br />
          &nbsp;&nbsp;<span className="text-purple-400">"role"</span>: <span className="text-emerald-400">"Software Engineer / Web Developer"</span>,<br />
          &nbsp;&nbsp;<span className="text-purple-400">"stack"</span>: [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Tailwind"</span>, <span className="text-emerald-400">"Node.js"</span>],<br />
          &nbsp;&nbsp;<span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"Open to Remote / Fulltime Opportunities"</span><br />
          <span className="text-slate-500 font-sans">{"}"}</span>
        </div>
        <div className="text-slate-500 mb-2">$ echo $BIO</div>
        <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-sans">
          Membangun aplikasi web modern dengan fokus pada performa, arsitektur bersih, dan pengalaman pengguna yang responsif.
        </p>

        <div className="flex flex-wrap gap-4 font-sans">
          <Link 
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all font-mono text-sm flex items-center gap-2"
          >
            <span>./view_projects.sh</span>
            <span>→</span>
          </Link>
          <Link 
            href="/contact"
            className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg transition-all font-mono text-sm"
          >
            ./contact_me.sh
          </Link>
        </div>
      </div>
    </div>
  )
}