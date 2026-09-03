# Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS —
dark, professional, with a network/security-themed accent. Built for Vercel
deployment.

## 1. Personalize it

Everything content-related lives in three files under `data/` — you don't
need to touch any component code:

- **`data/profile.ts`** — your name, bio, target companies, email, GitHub,
  LinkedIn, and resume link. Start here.
- **`data/skills.ts`** — your skill groups and tags.
- **`data/projects.ts`** — your project cards. Flip `status` to `"complete"`
  and add `githubUrl` / `writeupUrl` as you finish each one.

Also:

- Drop your resume PDF at `public/resume.pdf` (the Download Resume button
  already points there).
- `app/icon.svg` is the browser-tab favicon — swap it if you want something
  else.

## 2. Run it locally

Requires [Node.js](https://nodejs.org) 18.18+ (20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Deploy it on Vercel

1. Push this project to a GitHub repository (create one on GitHub, then):
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
   (This project already has a local git repo with an initial commit.)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New… → Project**, select your repo, and click **Import**.
   Vercel auto-detects Next.js — you don't need to change any build settings.
4. Click **Deploy**. In under a minute you'll get a live URL
   (`your-project.vercel.app`).
5. Every push to `main` auto-redeploys. You can also add a custom domain
   later from the project's **Settings → Domains** tab.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- No external font/CDN dependencies — uses the system font stack, so builds
  never depend on reaching an outside service.
