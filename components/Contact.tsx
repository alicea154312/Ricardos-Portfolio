import { profile } from "@/data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github", href: profile.github },
  { label: "LinkedIn", value: "linkedin", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="section-eyebrow mb-4">05 / Contact</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-foreground max-w-xl">
        Open to internship conversations — reach out any time.
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="card px-5 py-3 text-sm font-medium text-foreground hover:border-border-hover transition-colors"
          >
            <span className="font-mono-label text-xs text-muted mr-2">
              {link.label}
            </span>
            {link.value}
          </a>
        ))}
      </div>
    </section>
  );
}
