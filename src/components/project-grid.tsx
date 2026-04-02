/* eslint-disable @next/next/no-img-element */
import { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {projects.map((project) => (
        <div key={project.id} className="group relative overflow-hidden cursor-pointer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-2xl font-black text-center px-6 mb-3">
              {project.title}
            </h3>
            <p className="text-xs text-center px-8 text-white/80">
              {project.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
