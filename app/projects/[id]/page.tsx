import { getProjectData } from "../../../lib/projects";
import MathBackground from "../../../components/MathBackground";
import Link from "next/link";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  // Extract the ID from the URL and fetch the markdown data
  const { id } = await params;
  const project = await getProjectData(id);

  return (
    <main className="min-h-screen py-24 px-6 md:px-24 text-white relative overflow-hidden font-sans">
      <MathBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-sm font-mono text-gray-400 hover:text-lime-400 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          RETURN TO INDEX
        </Link>

        {/* Header Section */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
          {project.description}
        </p>
        
        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-12">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-mono transition-colors border border-white/10">
              <Code className="w-4 h-4 mr-2" /> Source Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center px-5 py-3 rounded-lg bg-lime-400/10 text-lime-400 hover:bg-lime-400/20 text-sm font-mono transition-colors border border-lime-400/20">
              <ExternalLink className="w-4 h-4 mr-2" /> Live Project
            </a>
          )}
        </div>

        {/* Markdown Content Injection */}
        {/* We use Tailwind utility classes to style the raw HTML generated from your Markdown */}
        <div 
          className="text-gray-300 leading-relaxed space-y-6 
                     [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 
                     [&>p]:mb-6 
                     [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 
                     [&>strong]:text-lime-400"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }} 
        />
      </div>
    </main>
  );
}