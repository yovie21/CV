import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-cyan-500/20 mb-4">
          $ ./contact_me.sh
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Saya</span>
        </h1>
        <p className="text-slate-400 mt-2 font-mono text-sm">Selalu terbuka untuk kolaborasi, freelance, atau ngobrol soal teknologi.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
          <div className="text-slate-500 font-mono text-xs mb-6">$ nano message.txt</div>
          <form className="space-y-6" action="https://formspree.io/f/your-form-id" method="POST">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2">{">"} Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder-slate-600 transition-colors"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2">{">"} Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder-slate-600 transition-colors"
                placeholder="email@contoh.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-500 mb-2">{">"} Subjek</label>
              <input
                type="text"
                id="subject"
                name="_subject"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder-slate-600 transition-colors"
                placeholder="Kolaborasi / Freelance / Tanya Jawab"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2">{">"} Pesan</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm placeholder-slate-600 transition-colors resize-none"
                placeholder="Tulis pesan Anda di sini..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition-all font-mono text-sm flex items-center justify-center gap-2"
            >
              <span>kirim_pesan</span>
              <span className="text-sm">→</span>
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className="space-y-6">
          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-8">
            <div className="text-slate-500 font-mono text-xs mb-6">$ ls -la ./contacts/</div>
            <div className="space-y-4">
              <a 
                href="mailto:yovie.muhammad@email.com"
                className="flex items-center gap-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 p-4 rounded-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-slate-500">email</div>
                  <div className="text-white font-mono text-sm group-hover:text-cyan-400 transition-colors">yovie.muhammad@email.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/yovie21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 p-4 rounded-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-slate-500">github</div>
                  <div className="text-white font-mono text-sm group-hover:text-cyan-400 transition-colors">github.com/yovie21</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/yovie-muhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 p-4 rounded-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-slate-500">linkedin</div>
                  <div className="text-white font-mono text-sm group-hover:text-cyan-400 transition-colors">linkedin.com/in/yovie-muhammad</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-6">
            <div className="text-slate-500 font-mono text-xs mb-4">$ cat availability.json</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="text-lg font-extrabold text-cyan-400 font-mono">✓</div>
                <div className="text-xs text-slate-500 font-sans">Open to Work</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="text-lg font-extrabold text-cyan-400 font-mono">✓</div>
                <div className="text-xs text-slate-500 font-sans">Remote Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}