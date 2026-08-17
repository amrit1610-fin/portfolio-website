"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs tracking-widest">
        
        {/* Left: Logo & Context */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="px-3 py-1.5 bg-lime-400 text-black font-extrabold rounded text-sm tracking-tighter shadow-[0_0_15px_rgba(163,230,53,0.4)]">
            q/
          </div>
          <span className="text-gray-400 hidden sm:inline">PRIVATE RESEARCH / 01</span>
        </div>

        {/* Right: Navigation Links & Live Status */}
        <nav className="flex items-center gap-6 md:gap-8 text-gray-400">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-lime-400 transition-colors bg-transparent border-none cursor-pointer font-mono text-xs">INDEX</button>
          <button onClick={() => scrollToSection('work')} className="hover:text-lime-400 transition-colors bg-transparent border-none cursor-pointer font-mono text-xs">WORK</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-lime-400 transition-colors bg-transparent border-none cursor-pointer font-mono text-xs">CONTACT</button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-white/10 text-lime-400">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_#a3e635]"></span>
            <span className="font-bold">LIVE</span>
          </div>
        </nav>

      </div>
    </header>
  );
}