import { getSortedProjectsData } from "../lib/projects";
import MathBackground from "../components/MathBackground";
import SpotlightCard from "../components/SpotlightCard";
import AnimatedSection from "../components/AnimatedSection";
import DynamicChart from "../components/DynamicChart";
import Navbar from "../components/Navbar";
import { Mail, Briefcase, Code, Terminal, Database, ExternalLink, Network, ArrowUpRight } from "lucide-react";

export default function Home() {
  const projects = getSortedProjectsData();

  const techStack = [
    { category: "Languages", icon: <Terminal className="w-5 h-5 mb-4 text-lime-400" />, items: ["Python", "C++", "TypeScript", "SQL"] },
    { category: "Quantitative", icon: <Database className="w-5 h-5 mb-4 text-lime-400" />, items: ["NumPy", "Pandas", "Statsmodels", "Scikit-learn", "Streamlit"] },
    { category: "Infrastructure", icon: <Network className="w-5 h-5 mb-4 text-lime-400" />, items: ["Docker", "AWS", "Linux", "Git"] }
  ];

  const certifications = [
    { title: "Pre MBA Statistics", issuer: "IIM Ahmedabad", year: "2024", link: "https://coursera.org/share/e29ce41f89f25eba3ac74b8a9c0d535b" },
    { title: "Machine Learning Specialization", issuer: "Stanford Online", year: "2025", link: "https://coursera.org/share/b2c61b1772c1bd5a123a0ca0f0957b03" },
    { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", year: "2025", link: "https://www.coursera.org/account/accomplishments/verify/NT9V0B6SDMKO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" }
  ];

  return (
    <main className="min-h-screen font-sans relative overflow-hidden bg-[#050505]">
      
      {/* Navbar Component */}
      <Navbar />

      {/* Background Layer with Lighter Dark Mask for Text Blending */}
      <div className="fixed inset-0 z-0">
        <MathBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24 text-white">
        
        {/* HERO SECTION: Split into 2 columns with Terminal */}
        <AnimatedSection className="mb-48 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Massive Typography */}
          <div className="lg:col-span-7">
            <p className="text-lime-400 font-mono mb-6 text-sm tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
              MARKET'S QUANTITATIVE BEHAVIOURS
            </p>
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
              I study the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600 drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                shape of risk.
              </span>
            </h1>
            <p className="text-xl md:text-xl text-gray-400 max-w-xl leading-relaxed font-light drop-shadow-md">
              A private notebook of models, market microstructure, and the small engineering decisions that make a signal survive contact with reality.
            </p>
          </div>

          {/* Right Column: The Terminal Block */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 font-mono text-sm text-gray-400 shadow-2xl relative overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 text-xs tracking-widest uppercase">
                <span>Runtime / Terminal</span>
                <span className="text-lime-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span> Connected
                </span>
              </div>
              
              {/* Terminal Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-lime-400">$ boot --profile user</span>
                  <p className="mt-2 text-white">Name: <span className="text-gray-300">[Amritanshu Kumar Singh]</span></p>
                </div>
                
                <div>
                  <span className="text-lime-400">$ fetch --module education</span>
                  <p className="mt-2 text-white">Degree: <span className="text-gray-300">[Int. M.Tech (Data Science)]</span></p>
                  <p className="text-white mt-1">University: <span className="text-gray-300">[VIT Bhopal University]</span></p>
                </div>
                
                <div>
                  <span className="text-lime-400">$ cat description.txt</span>
                  <p className="mt-2 text-gray-400 leading-relaxed">
                    &quot;Quantitative analyst focused on asset & option pricing, credit-risk valuation, and machine learning models for market prediction.&quot;
                  </p>
                </div>
                
                {/* Blinking Cursor */}
                <div className="flex items-center gap-2 text-lime-400 pt-2">
                  <span>session ready</span>
                  <span className="w-2.5 h-4 bg-lime-400 animate-pulse"></span>
                </div>
              </div>
              
            </div>
          </div>
        </AnimatedSection>

        {/* Dynamic Project Section (with id="work" for Navbar linking) */}
        <AnimatedSection id="work" className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-lime-400 font-mono text-sm tracking-widest mb-4">02 // SELECTED WORK</p>
              <h2 className="text-5xl font-bold tracking-tight">Research you can <br/> run your hands over.</h2>
            </div>
            <p className="text-gray-500 max-w-sm mt-6 md:mt-0">Active studies from the notebook. Swipe, use the controls, or open a note.</p>
          </div>
          
          <DynamicChart /> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => (
              <SpotlightCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Stack & Certifications */}
        <AnimatedSection className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-lime-400 font-mono text-sm tracking-widest mb-4">03 // STACK & CREDENTIALS</p>
              <h2 className="text-5xl font-bold tracking-tight">Engineered for <br/> absolute edge.</h2>
            </div>
            <p className="text-gray-500 max-w-sm mt-6 md:mt-0">A curated stack of languages, libraries, and infrastructure optimized for rigorous quantitative research and low-latency execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-lime-400/30 transition-colors shadow-xl">
                {stack.icon}
                <h3 className="text-xl font-bold text-white mb-6">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-sm font-mono text-gray-300 bg-white/5 border border-white/10 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-lime-400/50 hover:shadow-[0_0_20px_rgba(163,230,53,0.1)] transition-all cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors flex items-center gap-2">
                    {cert.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-400 mt-1">{cert.issuer}</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-lime-400 text-sm bg-lime-400/10 px-4 py-2 rounded-full group-hover:bg-lime-400/20">
                  {cert.year}
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Massive Contact Footer (with id="contact" for Navbar linking) */}
        <AnimatedSection id="contact" className="border-t border-white/10 pt-32 pb-12">
          <p className="text-lime-400 font-mono text-sm tracking-widest mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-lime-400"></span> OPEN CHANNEL / FINAL SLIDE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                Ask a sharper <br/> <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]">question.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">For research collaborations, systems work, or a debate about whether the models still works.</p>
              
              <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-8 py-4 bg-lime-400 text-black font-bold font-mono tracking-wide hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all duration-300">
                amritanshuofficial718@gmail.com <ExternalLink className="w-5 h-5 ml-3" />
              </a>
            </div>

            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-fit">
              <div className="flex justify-between font-mono text-xs text-gray-500 mb-8 pb-4 border-b border-white/10 uppercase tracking-widest">
                <span>Channels.json</span>
                <span className="text-lime-400 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-ping"></span> Listening</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <a href="https://github.com/amrit1610-fin" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-4 text-gray-300 group-hover:text-white"><Code className="w-5 h-5" /> GitHub</div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-lime-400 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/amritanshu-kumar-singh/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-4 text-gray-300 group-hover:text-white"><Briefcase className="w-5 h-5" /> LinkedIn</div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-lime-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
      </div>
    </main>
  );
}