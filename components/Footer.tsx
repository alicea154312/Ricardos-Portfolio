import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono-label text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono-label text-xs text-muted">
          built with Next.js · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
