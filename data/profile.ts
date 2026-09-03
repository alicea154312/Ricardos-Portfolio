// ─────────────────────────────────────────────────────────────
// EDIT ME FIRST. This file drives the whole site — your name,
// bio, links, and target roles all live here. Nothing else in
// the codebase needs to change to personalize the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ricardo",

  // Optional: a fuller/professional version of your name for the hero
  // headline (e.g. "Ricardo Ayala"). Leave blank to just use `name` above.
  fullName: "Ricardo Anrdé Alicea Otero",

  role: "Computer Engineering Student",
  focus: "Cybersecurity & Network Security",
  currently: " Polytechnic University of Puerto Rico",

  tagline:
    "Building and defending networks — from packet-level tools to segmented infrastructure modeled on real financial systems.",

  bio: `I'm a Computer Engineering student focused on cybersecurity and
networking, aiming to bring hands-on network defense skills to fintech and
banking environments. I'm currently building a portfolio of projects around
network segmentation, intrusion detection, and log-based threat detection —
with a specific interest in the security and network traffic challenges
that payment processors and banks deal with every day.`,

  location: "Puerto Rico",

  // Companies/roles you're targeting — shown as a short list, easy to update.
  targets: [
    "Evertec",
    "Banco Popular de Puerto Rico",
    "Oriental Bank",
    "Other fintech / banking security teams",
  ],

  email: "ricardoaao30@gmail.com",
  // TODO: replace with your real handles
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",

  // Put your resume PDF at /public/resume.pdf and this button will work.
  // Until then it's safe to leave as-is — the Resume section explains this.
  resumeFile: "/resume.pdf",
} as const;
