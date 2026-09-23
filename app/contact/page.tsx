import Link from "next/link"
import HackerText from "@/components/HackerText"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 font-mono">
      <div className="text-center mb-16">
        <div className="inline-block bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded border border-green-500/30 mb-4">
          $ ./contact_me.sh
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          <HackerText text="Hubungi Saya" tag="span" className="text-green-400" />
        </h1>
        <p className="text-gray-500 mt-2 text-xs">
          <HackerText text="Selalu terbuka untuk kolaborasi, freelance, atau ngobrol soal teknologi." tag="span" />
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-6 shadow-lg shadow-green-950/20">
          <div className="text-gray-500 text-xs mb-6">$ nano message.txt</div>
          <form className="space-y-4" action="https://formsubmit.co/yovie6513@gmail.com" method="POST">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yovie21.github.io/CV/contact/" />
            <div>
              <label htmlFor="name" className="block text-xs text-green-500 mb-1">{">"} Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-black border border-green-500/40 rounded px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 text-xs placeholder-gray-700"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-green-500 mb-1">{">"} Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-black border border-green-500/40 rounded px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 text-xs placeholder-gray-700"
                placeholder="yovie6513@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs text-green-500 mb-1">{">"} Subjek</label>
              <input
                type="text"
                id="subject"
                name="_subject"
                className="w-full bg-black border border-green-500/40 rounded px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 text-xs placeholder-gray-700"
                placeholder="Kolaborasi / Freelance"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-green-500 mb-1">{">"} Pesan</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-black border border-green-500/40 rounded px-3 py-2 text-green-400 focus:outline-none focus:border-green-400 text-xs placeholder-gray-700 resize-none"
                placeholder="Tulis pesan..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>kirim_pesan</span>
              <span>→</span>
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className="space-y-6">
          <div className="bg-black/80 border border-green-500/30 rounded-lg p-6 shadow-lg shadow-green-950/20">
            <div className="text-gray-500 text-xs mb-4">$ ls -la ./contacts/</div>
            <div className="space-y-3">
              <a 
                href="mailto:yovie6513@gmail.com"
                className="flex items-center gap-3 bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 rounded transition-all group"
              >
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/30 group-hover:border-green-500">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] text-gray-500">email</div>
                  <div className="text-green-400 text-xs truncate">yovie6513@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/6282297920784"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 rounded transition-all group"
              >
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/30 group-hover:border-green-500">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] text-gray-500">whatsapp</div>
                  <div className="text-green-400 text-xs truncate">082297920784</div>
                </div>
              </a>

              <a 
                href="https://github.com/yovie21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 rounded transition-all group"
              >
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/30 group-hover:border-green-500">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] text-gray-500">github</div>
                  <div className="text-green-400 text-xs truncate">github.com/yovie21</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/yovie-muhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-950 hover:bg-gray-900 border border-gray-800 p-3 rounded transition-all group"
              >
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/30 group-hover:border-green-500">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] text-gray-500">linkedin</div>
                  <div className="text-green-400 text-xs truncate">linkedin.com/in/yovie-muhammad</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-black/80 border border-green-500/30 rounded-lg p-5 shadow-lg shadow-green-950/20">
            <div className="text-gray-500 text-xs mb-3">$ cat availability.json</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-950 p-3 rounded border border-gray-800">
                <div className="text-green-400 font-bold text-base">✓</div>
                <div className="text-[10px] text-gray-500">Open to Work</div>
              </div>
              <div className="bg-gray-950 p-3 rounded border border-gray-800">
                <div className="text-green-400 font-bold text-base">✓</div>
                <div className="text-[10px] text-gray-500">Remote Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
