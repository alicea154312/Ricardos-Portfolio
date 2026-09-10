export type ProjectStatus = "in-progress" | "planned" | "complete";

export type Project = {
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  tools: string[];
  githubUrl?: string;
  writeupUrl?: string;
};

// Add your finished projects here once you have them.
export const projects: Project[] = [];