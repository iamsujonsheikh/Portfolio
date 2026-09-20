import Link from "next/link";
import projectsDB from "@/data/projectsDB";

const featuredProjects = projectsDB.filter((project) => project.featured);

const FeaturedWork = () => {
    if (featuredProjects.length === 0) return null;

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
                <li key={project.id}>
                    <Link
                        href={`/projects/${project.id}`}
                        className="group block h-full space-y-3 rounded-lg bg-panel p-5 shadow duration-200 hover:bg-panel-light/40"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100 duration-200 group-hover:text-brand">
                                {project.title}
                            </h3>
                            <p className="text-sm text-slate-400">
                                {project.role} · {project.year}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded bg-panel-light px-2 py-1 text-xs text-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <span className="inline-block text-sm text-brand">View details →</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FeaturedWork;