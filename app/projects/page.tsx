import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Kas-Tracker-Project-Uas",
      desc: "Sistem pelacakan keuangan untuk tugas akhir.",
      tech: ["PHP", "Laravel", "Blade", "Tailwind"],
      type: "Academic",
      github: "https://github.com/yovie21/Kas-Tracker-Project-Uas"
    },
    {
      title: "CV",
      desc: "Portfolio website pribadi bertema terminal.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      type: "Portfolio",
      github: "https://github.com/yovie21/CV"
    },
    {
      title: "kasir-bazar",
      desc: "Sistem kasir sederhana untuk operasional bazar.",
      tech: ["PHP", "Laravel", "Blade"],
      type: "POS",
      github: "https://github.com/yovie21/kasir-bazar"
    },
    {
      title: "Aplikasi-Personal-Expense",
      desc: "Pencatatan pengeluaran pribadi untuk manajemen keuangan.",
      tech: ["PHP", "Laravel", "Blade"],
      type: "Finance",
      github: "https://github.com/yovie21/Aplikasi-Personal-Expense"
    },
    {
      title: "Ruang-Saku",
      desc: "Manajemen keuangan pribadi dengan fitur tabungan.",
      tech: ["TypeScript", "React", "Tailwind"],
      type: "Mobile",
      github: "https://github.com/yovie21/Ruang-Saku",
      live: "https://ruang-saku-peach.vercel.app"
    },
    {
      title: "aplikasisales",
      desc: "Pencatatan penjualan dan manajemen stok UMKM.",
      tech: ["React Native", "Expo", "TypeScript"],
      type: "Sales",
      github: "https://github.com/yovie21/aplikasisales"
    },
    {
      title: "api-laravel",
      desc: "REST API backend untuk aplikasi mobile.",
      tech: ["PHP", "Laravel", "MySQL"],
      type: "Backend",
      github: "https://github.com/yovie21/api-laravel"
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-12 sm:py-20">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full border border-green-500/20 mb-3 sm:mb-4">
          $ ls -la ./top-repositories
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
          <span className="text-green-400">top</span><span className="text-gray-400">repos</span>
        </h1>
        <p className="text-gray-500 mt-2 text-[10px] sm:text-xs font-mono">Daftar repository dari @yovie21</p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-black/60 border border-green-500/20 rounded-lg p-4 sm:p-5 hover:border-green-500/50 transition-all duration-200 shadow-lg shadow-green-950/10"
          >
            <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white font-mono leading-tight">
                {project.title}
              </h3>
              <span className="text-[9px] sm:text-xs font-mono text-green-400 bg-green-950/50 px-2 py-1 rounded whitespace-nowrap flex-shrink-0">
                {project.type}
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-3 sm:mb-4 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-gray-900 text-gray-300 px-1.5 py-0.5 rounded border border-gray-800">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 hover:bg-green-600 text-gray-300 hover:text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded font-mono text-[10px] sm:text-xs transition-all border border-gray-800 hover:border-green-500"
              >
                <span>Source →</span>
              </a>
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-400 text-black py-1.5 sm:py-2 px-3 sm:px-4 rounded font-mono text-[10px] sm:text-xs transition-all border border-green-500"
                >
                  <span>Live →</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}