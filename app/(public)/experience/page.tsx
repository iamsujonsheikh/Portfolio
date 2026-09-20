import type { Metadata } from "next";
import Link from "next/link";
import ExperienceTextContent from "@/components/experience/ExperienceTextContent";
import ExperienceSummary from "@/components/experience/ExperienceSummary";
import ExperienceStepper from "@/components/experience/ExperienceStepper";
import SectionHeading from "@/components/experience/SectionHeading";
import { freelanceWork } from "@/data/experienceDB";
import ExperienceCard from "@/components/experience/ExperienceCard";

export const metadata: Metadata = {
    title: "Work Experience",
    description:
        "Work experience of Sujon Sheikh, a Full-Stack JavaScript developer: roles at BuddyDevs and Ziarah.ai, plus freelance projects for third-party clients.",
};

const ExperiencePage = () => {
    return (
        <>
            <ExperienceTextContent />
            <ExperienceSummary />

            <section className="mt-12 space-y-6">
                <SectionHeading>Where I have worked</SectionHeading>
                <ExperienceStepper />
            </section>

            <section className="mt-12 space-y-6">
                <SectionHeading>Freelance work</SectionHeading>
                <ExperienceCard job={freelanceWork} />
            </section>

            <section className="mt-12 space-y-4 rounded-lg bg-panel p-6 text-center">
                <h2 className="text-2xl font-semibold text-slate-100">
                    Have a project in mind?
                </h2>
                <p className="text-slate-400">Let&apos;s talk about it.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/contact"
                        className="rounded bg-brand px-4 py-2 font-medium text-slate-900 duration-200 hover:bg-brand/90"
                    >
                        Get in touch
                    </Link>
                    <Link
                        href="/projects"
                        className="rounded bg-panel-light px-4 py-2 font-medium text-slate-100 duration-200 hover:bg-panel-light/80"
                    >
                        View my projects
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ExperiencePage;