import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="section-eyebrow mb-4">
            {profile.role} · {profile.focus}
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            {profile.fullName || profile.name}
          </h1>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-border-hover transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10">
            <p className="font-mono-label text-xs text-muted mb-2">
              {"// currently targeting"}
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.targets.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <NetworkGraphic />
      </div>
    </section>
  );
}

function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="hidden sm:block w-full h-auto"
      aria-hidden="true"
    >
      <g stroke="#1f2732" strokeWidth="1">
        <line x1="60" y1="60" x2="160" y2="120" />
        <line x1="160" y1="120" x2="260" y2="70" />
        <line x1="160" y1="120" x2="100" y2="200" />
        <line x1="160" y1="120" x2="230" y2="200" />
        <line x1="100" y1="200" x2="230" y2="200" />
        <line x1="260" y1="70" x2="230" y2="200" />
      </g>
      <g stroke="#2dd4bf" strokeWidth="1.2" opacity="0.6">
        <line x1="160" y1="120" x2="260" y2="70" />
        <line x1="160" y1="120" x2="100" y2="200" />
      </g>
      <circle cx="160" cy="120" r="7" fill="#090c10" stroke="#2dd4bf" strokeWidth="2" />
      <circle cx="60" cy="60" r="5" fill="#090c10" stroke="#60a5fa" strokeWidth="1.6" />
      <circle cx="260" cy="70" r="5" fill="#090c10" stroke="#60a5fa" strokeWidth="1.6" />
      <circle cx="100" cy="200" r="5" fill="#090c10" stroke="#2dd4bf" strokeWidth="1.6" />
      <circle cx="230" cy="200" r="5" fill="#090c10" stroke="#60a5fa" strokeWidth="1.6" />
    </svg>
  );
}
