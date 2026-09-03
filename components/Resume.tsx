import { profile } from "@/data/profile";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="section-eyebrow mb-4">04 / Resume</p>
      <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Full resume (PDF)
          </h3>
          <p className="mt-1 text-sm text-muted">
            Education, coursework, and project details in one document.
          </p>
        </div>
        <a
          href={profile.resumeFile}
          download
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Download Resume
        </a>
      </div>
      <p className="mt-3 font-mono-label text-xs text-muted">
        {"// add your PDF at public/resume.pdf to make this button work"}
      </p>
    </section>
  );
}
