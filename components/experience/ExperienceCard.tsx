import type { IExperience } from "@/types";

const ExperienceCard = ({ job }: { job: IExperience }) => {
    return (
        <div className="bg-panel rounded-lg shadow p-5 space-y-4">
            <div className="space-y-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                    <p className="text-sm text-slate-400">{job.period}</p>
                </div>

                <p className="text-slate-300">
                    {job.url ? (
                        <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand underline-offset-4 hover:underline"
                        >
                            {job.company}
                        </a>
                    ) : (
                        <span className="text-brand">{job.company}</span>
                    )}
                    {job.type && <span className="text-slate-400"> · {job.type}</span>}
                </p>
            </div>

            {job.about && <p className="text-sm italic text-slate-400">{job.about}</p>}

            <p className="text-slate-300">{job.summary}</p>

            {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                        What I did
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300 marker:text-brand">
                        {job.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {job.highlights && job.highlights.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                        Results
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300 marker:text-brand">
                        {job.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {job.technologies && job.technologies.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-1">
                    {job.technologies.map((tech) => (
                        <li
                            key={tech}
                            className="rounded bg-panel-light px-2 py-1 text-xs text-slate-200"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceCard;