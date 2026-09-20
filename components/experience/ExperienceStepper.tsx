import experienceDB from "@/data/experienceDB";
import ExperienceCard from "./ExperienceCard";

// Vertical stepper: one numbered step per job, joined by a connector line.
// experienceDB is newest first, so the first step is highlighted.
const ExperienceStepper = () => {
    return (
        <ol>
            {experienceDB.map((job, index) => {
                const isFirst = index === 0;
                const isLast = index === experienceDB.length - 1;

                return (
                    <li key={job.id} className="flex gap-4 sm:gap-6">
                        {/* Step marker + connector line */}
                        <div className="flex flex-col items-center">
                            <span
                                aria-hidden="true"
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand font-bold ${isFirst ? "bg-brand text-slate-900" : "bg-surface text-brand"
                                    }`}
                            >
                                {index + 1}
                            </span>
                            {!isLast && (
                                <span aria-hidden="true" className="my-1 w-0.5 flex-1 bg-panel-light" />
                            )}
                        </div>

                        {/* Step content */}
                        <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-10"}`}>
                            <ExperienceCard job={job} />
                        </div>
                    </li>
                );
            })}
        </ol>
    );
};

export default ExperienceStepper;