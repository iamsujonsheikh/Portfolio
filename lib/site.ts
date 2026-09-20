// Public site URL, used for sitemap, canonical URLs and Open Graph tags.
// Priority:
//   1. NEXT_PUBLIC_SITE_URL       (set this to your custom domain)
//   2. VERCEL_PROJECT_PRODUCTION_URL (Vercel sets this automatically, no setup needed)
//   3. http://localhost:3000      (local development)
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const siteConfig = {
    name: "Sujon Sheikh",
    title: "Sujon Sheikh | Full-Stack JavaScript Developer",
    description:
        "Portfolio of Sujon Sheikh, a Full-Stack JavaScript developer (React, Next.js, Node.js, MongoDB) from Bangladesh.",
    url: siteUrl,
    jobTitle: "Full-Stack JavaScript Developer",
};