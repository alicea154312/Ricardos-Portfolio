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
      "Wireshark",
      "Nmap",
      "Cisco Packet Tracer",
    ],
  },

  {
    label: "Programming",
    items: ["C++", "SQL", "Linux (In Progress)"],
  },
  {
    label: "Certifications",
    items: [
      "Undergraduate Certificate in Networks and Fiber Optics (UCNFO) — Completed",
      "Cybersecurity (Offered by PUPR) — In Progress",
    ],
  },
];