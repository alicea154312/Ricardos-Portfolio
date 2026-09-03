import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="section-eyebrow mb-4">01 / About</p>
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <p className="max-w-2xl whitespace-pre-line text-base sm:text-lg leading-relaxed text-muted">
          {profile.bio}
        </p>
        <div className="font-mono-label text-sm text-muted whitespace-nowrap">
          <p>
            <span className="text-foreground">location</span> · {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
