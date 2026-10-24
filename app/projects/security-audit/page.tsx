import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Security Audit & Hardening — Ricardo",
  description:
    "How I audited and hardened my own portfolio: HTTP security headers and a Content-Security-Policy.",
};

const rows = [
  {
    header: "Content-Security-Policy",
    before: "Missing",
    after: "Enforced (default-src 'self', object-src 'none', frame-ancestors 'none')",
  },
  { header: "X-Frame-Options", before: "Missing", after: "DENY" },
  { header: "X-Content-Type-Options", before: "Missing", after: "nosniff" },
  {
    header: "Referrer-Policy",
    before: "Missing",
    after: "strict-origin-when-cross-origin",
  },
  {
    header: "Permissions-Policy",
    before: "Missing",
    after: "Camera, microphone, geolocation, payment disabled",
  },
  {
    header: "Cross-Origin-Opener-Policy",
    before: "Missing",
    after: "same-origin",
  },
  { header: "X-Powered-By", before: "Next.js", after: "Removed" },
];

export default function SecurityAuditPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/#projects" className="font-mono-label text-xs text-accent">
        ← Back to projects
      </Link>

      <p className="section-eyebrow mt-8 mb-4">Web Security</p>
      <h1 className="text-3xl font-semibold mb-4">
        Security Audit &amp; Hardening of This Portfolio
      </h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {["Next.js", "Vercel", "HTTP Security Headers", "CSP"].map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <p className="mb-6">
        I audited my own portfolio the way an attacker would see it, then fixed
        what I found. A passive review of the live site showed solid HTTPS (HSTS
        with preload) but no Content-Security-Policy, no clickjacking
        protection, and missing basic hardening headers. I added them in{" "}
        <code>next.config.ts</code>, rolled the CSP out in report-only mode
        first so it could not break the site, checked that the page loads no
        external resources the policy would block, and then switched to
        enforcing mode.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4">Before and after</h2>
      <div className="card overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="font-mono-label text-xs text-accent">
              <th className="p-4">Header</th>
              <th className="p-4">Before</th>
              <th className="p-4">After</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.header} className="border-t border-white/10">
                <td className="p-4 font-mono-label text-xs">{r.header}</td>
                <td className="p-4 text-muted">{r.before}</td>
                <td className="p-4">{r.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-4">Evidence</h2>
      <p className="mb-4 text-muted">
        Response headers from <code>curl -I</code>, before the change and after
        it.
      </p>
      <figure className="mb-6">
        <Image
          src="/audit-before.png"
          alt="Terminal output of curl -I before hardening: no security headers, X-Powered-By present"
          width={1600}
          height={900}
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-2 text-xs text-muted">
          Before: commit fed1117, no security headers.
        </figcaption>
      </figure>
      <figure className="mb-6">
        <Image
          src="/audit-after.png"
          alt="Terminal output of curl -I after hardening: Content-Security-Policy and other security headers present"
          width={1600}
          height={900}
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-2 text-xs text-muted">
          After: CSP enforced plus the hardening headers.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold mt-10 mb-4">What I learned</h2>
      <ul className="list-disc space-y-2 pl-5 mb-6">
        <li>
          A CSP in report-only mode lets you test a policy without breaking the
          site; I switched to enforcing only after checking what the page loads.
        </li>
        <li>
          <code>&apos;unsafe-eval&apos;</code> is needed only by Next.js dev
          tooling, so it is enabled in development and left out of production.
        </li>
        <li>
          My first draft had a wildcard <code>img-src *</code>; I caught it in
          review and tightened it to <code>&apos;self&apos; data: blob:</code>.
        </li>
        <li>
          Verify the deployed result, not just the local one: my first check of
          production still showed the old headers because the change had not
          been pushed yet.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">Next steps</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Replace <code>&apos;unsafe-inline&apos;</code> with nonces (requires
          dynamic rendering).
        </li>
        <li>
          Add a <code>security.txt</code> and review DNS records (SPF, DKIM,
          DMARC) once I have a custom domain.
        </li>
      </ul>
    </main>
  );
}