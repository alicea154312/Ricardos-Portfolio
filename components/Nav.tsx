import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono-label text-sm text-foreground hover:text-accent transition-colors"
        >
          {profile.name.toLowerCase()}
          <span className="text-accent">@</span>
          security
          <span className="text-muted">:~$</span>
        </a>
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-label text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
