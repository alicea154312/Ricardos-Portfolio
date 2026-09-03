import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="section-eyebrow mb-4">03 / Projects</p>
      <p className="max-w-2xl text-sm text-muted mb-8">
        A working set of projects built around network defense in a
        financial-services context. Repos and write-ups go live as each one
        is finished — check back, or see the status tag on each card.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
