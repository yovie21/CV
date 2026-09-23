import Link from "next/link"

export default function AboutPage() {
  const skills = {
    "Backend": ["PHP", "Laravel", "MySQL"],
    "Frontend": ["React.js", "JavaScript", "HTML", "CSS"],
    "Mobile": ["Flutter", "Dart"],
    "AI Agents": ["9Router", "Hermes Agent"],
    "Soft Skills": ["Customer Service", "Teamwork"],
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
              Software Engineer dengan background unik: 5+ tahun pengalaman di customer service dan retail 
              (PT. Assalaam Niaga Utama, PT. Delamibrands Kharisma Busana) sebelum beralih ke dunia teknologi. 
              Lulusan Teknik Informatika S1 (Universitas Duta Bangsa, 2026). 
              Menguasai full-stack development: Next.js, React.js, Laravel, Flutter, dan database MySQL. 
              Terbiasa menyelesaikan masalah end-to-end—dari desain database, pengembangan API, hingga deployment. 
              Cepat belajar, detail-oriented, dan siap berkontribusi dalam tim engineering.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
            <div className="text-slate-500 font-mono text-xs mb-4">$ cat experience.log</div>
            <div className="space-y-6 border-l-2 border-slate-700/50 pl-6">
              <div className="relative">
                <div className="absolute left-[-15px] top-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">Agu 2022 – Sekarang</div>
                <h3 className="text-lg font-bold text-white mb-1">Kasir</h3>
                <p className="text-slate-400 text-sm">PT. Assalaam Niaga Utama — Sukoharjo</p>
                <p className="text-slate-500 text-xs mt-1">Melayani transaksi customer, mengelola stok harian, dan memastikan akurasi kas.</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-15px] top-0 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900"></div>
                <div className="text-xs font-mono text-cyan-400 mb-1">Agu 2019 – Sep 2022</div>
                <h3 className="text-lg font-bold text-white mb-1">Sales Assistant</h3>
                <p className="text-slate-400 text-sm">PT. Delamibrands Kharisma Busana</p>
                <p className="text-slate-500 text-xs mt-1">Melayani customer, merapikan display produk, dan mencapai target penjualan.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
            <div className="text-slate-500 font-mono text-xs mb-4">$ cat education.txt</div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold">Universitas Duta Bangsa Surakarta</h3>
                  <p className="text-slate-400 text-sm">Teknik Informatika — S1</p>
                </div>
                <span className="text-xs font-mono text-slate-500">2022 – 2026</span>
              </div>
              <div className="text-slate-500 text-xs space-y-1">
                <p>Proyek tugas akhir:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>Sistem POS (Laravel)</li>
                  <li>Aplikasi clustering data</li>
                  <li>Undangan digital</li>
                  <li>Rekomendasi buku</li>
                  <li>Website event</li>
                  <li>Aplikasi apotek Android</li>
                  <li>Game edukasi</li>
                </ul>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold">SMK Adi Sumarmo Colomadu</h3>
                  <p className="text-slate-400 text-sm">Teknik Komputer dan Jaringan</p>
                </div>
                <span className="text-xs font-mono text-slate-500">2016 – 2019</span>
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
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">7+</div>
                <div className="text-xs text-slate-500 font-sans">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
