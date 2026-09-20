# Sujon Sheikh | Portfolio

Personal portfolio of **Sujon Sheikh**, a Full-Stack JavaScript developer.
Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

- **Live site:** _add your deployed URL here_
- **Pages:** About, Work Experience, Skills, Projects (+ detail pages), Blog (coming soon), Contact

<!-- Add a screenshot: ![Portfolio screenshot](./public/screenshot.png) -->

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · Tabler Icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server (Turbopack) |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | Run ESLint                       |
| `npm run typecheck` | Run the TypeScript compiler      |

## Editing content

All content lives in `data/`. No component changes needed:

- `data/projectsDB.ts`: projects (the `id` is the URL slug: `/projects/<id>`). Each project has a `role`, a `year` and a `featured` flag; only `featured: true` projects are shown by default on the Projects page (aim for 4-5)
- `data/experienceDB.ts`: work experience shown on the `/experience` page as a vertical stepper (newest first). `about`, `responsibilities`, `highlights` and `technologies` are optional and show up on the card automatically. Freelance work is the separate `freelanceWork` entry in the same file
- `data/skillsDB.ts`: skills (`rating` is 1 to 5, shown as stars)
- `data/socials.ts`: email, phone, WhatsApp and every social link (used across the whole site)

Put the Google Drive link of your resume PDF in `data/Socials.ts` (`resumeUrl`). The "View Resume" button opens it in a new tab, and stays hidden until the link is set. In Drive: right-click the PDF, Share, General access: "Anyone with the link" (Viewer), Copy link.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain.
It is used for the sitemap, Open Graph tags and the share-preview image.

## Deploy

Deploy on [Vercel](https://vercel.com/new) and add `NEXT_PUBLIC_SITE_URL` in the project settings.