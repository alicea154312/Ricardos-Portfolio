import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="section-eyebrow mb-4">03 / Projects</p>
      
      {projects.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="font-mono-label text-sm text-muted">
            {"// projects in progress \u2014 check back soon"}
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}