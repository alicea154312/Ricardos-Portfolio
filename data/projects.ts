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
export const projects: Project[] = [
{
  title: "Waves-Inn - Enterprise Hotel Network Design",
  category: "Network & Infrastructure Design",
  status: "complete",
  summary: "Designed a hierarchical three-layer network for a five floor hotel spanning four outdoor locations.\n Implemented VLANS, NAT/PAT, and ACLs to segment and secure traffic, and configured VoIP and wireless connectivity across the full topology.",
  tools: ["Cisco Packet Tracer"],

},

];