export type ProjectStatus = "in-progress" | "planned" | "complete";

export type Project = {
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  tools: string[];
  // Fill these in once you have a repo / write-up for each project.
  githubUrl?: string;
  writeupUrl?: string;
};

// Each of these maps to a real, buildable project — add your repo link
// as you finish each one and flip its status to "complete".
export const projects: Project[] = [
  {
    title: 'Segmented "Mini-Bank" Network Lab',
    category: "Networking & Infrastructure",
    status: "in-progress",
    summary:
      "A virtual network modeling a simplified financial institution — a DMZ, a core-banking segment, and a card-processing segment — with a pfSense firewall enforcing real inter-segment rules, mirroring PCI-DSS-style network zoning.",
    tools: ["pfSense", "GNS3 / VirtualBox", "VLANs", "Wireshark"],
  },
  {
    title: "SIEM-Based Fraud & Anomaly Detection",
    category: "Blue Team / SOC",
    status: "in-progress",
    summary:
      "A Wazuh SIEM deployment ingesting simulated transaction and network logs, with custom detection rules for patterns like impossible-travel logins, failed-auth spikes, and off-hours access — a bridge between networking and fintech fraud detection.",
    tools: ["Wazuh", "Python (log generation)", "Log analysis"],
  },
  {
    title: "Custom Packet Sniffer & Traffic Analyzer",
    category: "Networking",
    status: "in-progress",
    summary:
      "A self-built packet capture and analysis tool that inspects traffic at the protocol level — not just a Wireshark screenshot — with filtering and basic flow visualization.",
    tools: ["Python", "Scapy", "Matplotlib"],
  },
  {
    title: "Network Discovery & Vulnerability Scanner",
    category: "Security Assessment",
    status: "planned",
    summary:
      "An Nmap-scripting-engine-based scanner for host discovery, port and service enumeration, correlated against known CVEs to generate a prioritized remediation report.",
    tools: ["Nmap", "Python", "NVD API"],
  },
];
