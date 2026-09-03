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
      "Cisco Packet Traer"
    ],
  },
  
  {
    label: "Programming",
    items: ["C++", "SQL", "Java", "Linux (In Progress)"],
  },
  {
    label: "Certifications — in progress",
    items: ["Undergraduate Certificate in Networks and Fiber Optics (UCNFO)", "Cybersecurity (Offered by PUPR)"],
  },
];
