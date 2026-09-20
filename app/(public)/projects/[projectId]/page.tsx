import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projectsDB";

type ProjectPageProps = { params: Promise<{ projectId: string }> };

// Build every project page at build time; unknown ids return a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description[0],
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { images: [project.img] },
  };
}

// PROJECT DETAILS PAGE
const ProjectDetails = async ({ params }: ProjectPageProps) => {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) notFound();

  const { title, img, live, code, role, year, technologies, description } = project;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link
        href="/projects"
        className="inline-block mb-4 text-slate-400 hover:text-brand duration-300"
      >
        ← All projects
      </Link>

      <Image
        src={img}
        alt={`Screenshot of ${title}`}
        width={1200}
        height={800}
        sizes="(min-width: 896px) 896px, 100vw"
        preload
        className="w-full h-auto rounded-lg border-2 shadow border-brand mb-5"
      />

      <div className="space-y-5">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-brand">{title}</h1>
          <p className="text-slate-400">
            {role} · {year}
          </p>
        </div>

        {/* DESCRIPTION */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <Image src="/assets/icons/description.png" alt="" width={32} height={32} />
            <h2 className="text-lg text-slate-200 font-semibold">Description</h2>
          </div>
          <ul>
            {description.map((des) => (
              <li key={des} className="list-none flex items-center gap-2 py-0.5">
                <Image src="/assets/icons/check.png" alt="" width={22} height={22} />
                <span className="text-slate-400">{des}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* TECHNOLOGIES */}
        <section>
          <div className="flex items-center mb-4 gap-2">
            <Image src="/assets/icons/technology.png" alt="" width={32} height={32} />
            <h2 className="text-lg text-white font-semibold">Technologies</h2>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="bg-slate-800/50 rounded-full px-3 py-1 ring-1 ring-slate-500 text-slate-400 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* LIVE & CODE LINKS */}
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={live}
            className="flex items-center bg-slate-500/20 ring-1 shadow px-3 py-1 rounded-full gap-2 hover:scale-105 transition-transform duration-300"
          >
            <Image src="/assets/icons/eye.png" alt="" width={30} height={30} />
            <span className="text-slate-300 font-semibold">Live</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={code}
            className="flex items-center bg-slate-500/20 ring-1 shadow px-3 py-1 rounded-full gap-2 hover:scale-105 transition-transform duration-300"
          >
            <Image src="/assets/icons/code.png" alt="" width={30} height={30} />
            <span className="text-slate-300 font-semibold">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;