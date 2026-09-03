export type SkillGroup = {
  label: string;
  items: string[];
};

// Edit freely as you pick up new tools/certs. Grouped so the Skills
// section can render each category as its own labeled block.
export const skillGroups: SkillGroup[] = [
  {
    label: "Networking",
    items: [
      "TCP/IP",
      "Subnetting & VLANs",
      "Firewalls (pfSense)",
      "Wireshark",
      "Nmap",
    ],
  },
  {
    label: "Security & Monitoring",
    items: [
      "SIEM (Wazuh)",
      "IDS/IPS (Snort / Suricata)",
      "Vulnerability Assessment",
      "YARA Rules",
    ],
  },
  {
    label: "Programming",
    items: ["Python", "Scapy", "Bash", "C / C++", "SQL"],
  },
  {
    label: "Certifications — in progress",
    items: ["CompTIA Network+", "CompTIA Security+"],
  },
];
