import type { MetadataRoute } from "next";
import projects from "@/data/projectsDB";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/experience", "/skills", "/projects", "/blogs", "/contact"];

    return [
        ...routes.map((route) => ({
            url: `${siteConfig.url}${route}`,
            lastModified: new Date(),
        })),
        ...projects.map((project) => ({
            url: `${siteConfig.url}/projects/${project.id}`,
            lastModified: new Date(),
        })),
    ];
}