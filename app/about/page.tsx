import Link from "next/link"
import PasswordWall from "@/components/PasswordWall"

export default function AboutPage() {
  const skills = {
    "Backend": ["PHP", "Laravel", "MySQL"],
    "Frontend": ["Next.js", "React.js", "JavaScript", "HTML", "CSS"],
    "Mobile": ["Flutter", "Dart"],
    "AI Agents": ["9Router", "Hermes Agent"],
    "Soft Skills": ["Teamwork"],
  }

  return (
    <PasswordWall>
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-12 sm:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full border border-green-500/20 mb-3 sm:mb-4">
          $ cat profile.yaml
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-mono">
          <span className="text-green-400">yovie@dev</span><span className="text-gray-400">:~$ whoami</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column - Bio */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="bg-black/60 border border-green-500/20 rounded-xl p-5 sm:p-6 shadow-lg shadow-green-950/10">
            <div className="text-gray-500 font-mono text-[10px] sm:text-xs mb-3 sm:mb-4">$ echo $BIO</div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Software Engineer dengan background unik: 5+ tahun pengalaman di retail 
              (PT. Assalaam Niaga Utama, PT. Delamibrands Kharisma Busana) sebelum beralih ke dunia teknologi. 
              Lulusan Teknik Informatika S1 (Universitas Duta Bangsa, 2026). 
              Menguasai full-stack development: Next.js, React.js, Laravel, Flutter, dan database MySQL. 
              Terbiasa menyelesaikan masalah end-to-end—dari desain database, pengembangan API, hingga deployment. 
              Cepat belajar, detail-oriented, dan siap berkontribusi dalam tim engineering.
            </p>
          </div>

          <div className="bg-black/60 border border-green-500/20 rounded-xl p-5 sm:p-6 shadow-lg shadow-green-950/10">
            <div className="text-gray-500 font-mono text-[10px] sm:text-xs mb-3 sm:mb-4">$ cat experience.log</div>
            <div className="space-y-5 sm:space-y-6 border-l-2 border-green-500/20 pl-5 sm:pl-6">
              <div className="relative">
                <div className="absolute left-[-12px] sm:left-[-15px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 border-2 border-black"></div>
                <div className="text-[10px] sm:text-xs font-mono text-green-400 mb-1">Agu 2022 – Sekarang</div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">Kasir</h3>
                <p className="text-gray-400 text-xs">PT. Assalaam Niaga Utama — Sukoharjo</p>
                <p className="text-gray-500 text-[10px] mt-1">Melayani transaksi customer, mengelola stok harian, dan memastikan akurasi kas.</p>
              </div>
              <div className="relative">
                <div className="absolute left-[-12px] sm:left-[-15px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 border-2 border-black"></div>
                <div className="text-[10px] sm:text-xs font-mono text-green-400 mb-1">Agu 2019 – Sep 2022</div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">Sales Assistant</h3>
                <p className="text-gray-400 text-xs">PT. Delamibrands Kharisma Busana</p>
                <p className="text-gray-500 text-[10px] mt-1">Melayani customer, merapikan display produk, dan mencapai target penjualan.</p>
              </div>
            </div>
          </div>

          <div className="bg-black/60 border border-green-500/20 rounded-xl p-5 sm:p-6 shadow-lg shadow-green-950/10">
            <div className="text-gray-500 font-mono text-[10px] sm:text-xs mb-3 sm:mb-4">$ cat education.txt</div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-sm">Universitas Duta Bangsa Surakarta</h3>
                  <p className="text-gray-400 text-xs">Teknik Informatika — S1</p>
                </div>
                <span className="text-[10px] font-mono text-gray-500">2022 – 2026</span>
              </div>
              <div className="text-gray-500 text-[10px] space-y-1">
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
              <div className="border-t border-green-500/20 pt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-sm">SMK Adi Sumarmo Colomadu</h3>
                  <p className="text-gray-400 text-xs">Teknik Komputer dan Jaringan</p>
                </div>
                <span className="text-[10px] font-mono text-gray-500">2016 – 2019</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-5 sm:space-y-6">
          <div className="bg-black/60 border border-green-500/20 rounded-xl p-5 sm:p-6 shadow-lg shadow-green-950/10">
            <div className="text-gray-500 font-mono text-[10px] sm:text-xs mb-3 sm:mb-4">$ ls -la ./skills/</div>
            <div className="space-y-3 sm:space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <div className="text-[10px] sm:text-xs font-mono text-green-400 mb-1.5 sm:mb-2 flex items-center gap-2">
                    <span>.</span> {category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[10px] font-mono bg-gray-900 text-gray-300 px-1.5 sm:px-2 py-0.5 rounded border border-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/60 border border-green-500/20 rounded-xl p-4 sm:p-5 shadow-lg shadow-green-950/10">
            <div className="text-gray-500 font-mono text-[10px] sm:text-xs mb-3">$ cat github.stats</div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
                <div className="text-lg font-extrabold text-green-400 font-mono">15+</div>
                <div className="text-[10px] text-gray-500">Repos</div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
                <div className="text-lg font-extrabold text-green-400 font-mono">7+</div>
                <div className="text-[10px] text-gray-500">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PasswordWall>
  )
}