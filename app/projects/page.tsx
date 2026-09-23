import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Kas-Tracker-Project-Uas",
      description: "Aplikasi pelacakan keuangan dan pencatatan kas untuk keperluan tugas akhir (UAS).",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      stats: "Academic Project",
      github: "https://github.com/yovie21/Kas-Tracker-Project-Uas"
    },
    {
      title: "CV",
      description: "Portfolio website pribadi dengan tema terminal interaktif.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      stats: "Portfolio",
      github: "https://github.com/yovie21/CV"
    },
    {
      title: "kasir-bazar",
      description: "Sistem kasir (Point of Sale) sederhana yang dirancang khusus untuk operasional bazar.",
      tech: ["JavaScript", "HTML", "CSS"],
      stats: "Point of Sale",
      github: "https://github.com/yovie21/kasir-bazar"
    },
    {
      title: "Aplikasi-Personal-Expense",
      description: "Aplikasi pencatatan pengeluaran pribadi untuk manajemen anggaran dan keuangan harian.",
      tech: ["React", "JavaScript", "CSS"],
      stats: "Finance Tracker",
      github: "https://github.com/yovie21/Aplikasi-Personal-Expense"
    },
    {
      title: "Ruang-Saku",
      description: "Aplikasi manajemen keuangan pribadi dengan fitur tabungan dan catatan pengeluaran.",
      tech: ["Flutter", "Dart", "Firebase"],
      stats: "Mobile Finance",
      github: "https://github.com/yovie21/Ruang-Saku",
      live: "https://ruang-saku-peach.vercel.app"
    },
    {
      title: "aplikasisales",
      description: "Aplikasi pencatatan penjualan dan manajemen stok barang untuk UMKM.",
      tech: ["React Native", "Expo", "TypeScript"],
      stats: "Sales Management",
      github: "https://github.com/yovie21/aplikasisales"
    },
    {
      title: "api-laravel",
      description: "REST API backend untuk aplikasi mobile dengan Laravel Sanctum authentication.",
      tech: ["Laravel", "PHP", "MySQL"],
      stats: "Backend API",
      github: "https://github.com/yovie21/api-laravel"
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20 mb-4">
          $ ls -la ./top-repositories
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Repositories</span>
        </h1>
        <p className="text-slate-400 mt-2 font-mono text-sm">Daftar repository pilihan dari GitHub @yovie21.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-800/50">
                  {project.stats}
                </span>
                <span className="text-xs font-mono text-slate-500">pinned</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white py-2.5 px-4 rounded-lg font-mono text-xs font-medium transition-all duration-200 border border-slate-700 hover:border-cyan-500"
                >
                  <span>View Source Code →</span>
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-2.5 px-4 rounded-lg font-mono text-xs font-medium transition-all duration-200 border border-cyan-500"
                  >
                    <span>View Live Demo →</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}