import type { Project } from "@/data/projects";

const statusConfig: Record<
  Project["status"],
  { label: string; dotColor: string; textColor: string }
> = {
  "in-progress": {
    label: "In Progress",
    dotColor: "bg-warn",
    textColor: "text-warn",
  },
  planned: {
    label: "Planned",
    dotColor: "bg-muted",
    textColor: "text-muted",
  },
  complete: {
    label: "Complete",
    dotColor: "bg-accent",
    textColor: "text-accent",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <div className="card flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono-label text-xs text-muted">{project.category}</p>
        <span className={`font-mono-label flex items-center gap-1.5 text-xs ${status.textColor}`}>
          <span className={`status-dot ${status.dotColor}`} />
          {status.label}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span key={tool} className="tag">
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 font-mono-label text-xs">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            View Repo →
          </a>
        ) : (
          <span className="text-muted/60">Repo coming soon</span>
        )}
        {project.writeupUrl && (
          <a
            href={project.writeupUrl}
            className="text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Write-up →
          </a>
        )}
      </div>
    </div>
  );
}
