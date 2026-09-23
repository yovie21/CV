import Link from "next/link"
import HackerBio from "@/components/HackerBio"
import GlitchName from "@/components/GlitchName"
import TypewriterJSON from "@/components/TypewriterJSON"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-12 sm:py-20">
      {/* Terminal Header */}
      <div className="bg-black/60 border border-green-500/30 rounded-t-xl p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        <span className="text-[9px] sm:text-xs font-mono text-gray-500 ml-1.5 sm:ml-2">bash - yovie@dev-machine:~</span>
      </div>

      {/* Terminal Body */}
      <div className="bg-black/80 border-x border-b border-green-500/30 rounded-b-xl p-4 sm:p-6 sm:p-8 font-mono text-left mb-8 sm:mb-12 shadow-lg shadow-green-950/20">
        <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ whoami</div>
        <GlitchName />
        <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ cat status.json</div>
        <TypewriterJSON />
        <div className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">$ echo $BIO</div>
        <HackerBio />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8">
          <Link 
            href="/projects"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all font-mono text-xs sm:text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>./view_projects.sh</span>
            <span>→</span>
          </Link>
          <Link 
            href="/contact"
            className="bg-black hover:bg-gray-900 text-green-400 border border-green-500/40 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all font-mono text-xs sm:text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            ./contact_me.sh
          </Link>
        </div>
      </div>
    </div>
  )
}