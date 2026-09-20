import { IconArrowRightTail, IconFiles } from "@tabler/icons-react";
import Link from "next/link";
import { resumeUrl } from "@/data/Socials";

const resumeButtonClasses =
  "bg-panel-light duration-200 rounded px-2 sm:px-4 py-2 text-slate-100 inline-flex justify-between items-center space-x-2 font-medium";

const AboutTextContent = () => {
  return (
    <div className="w-full sm:max-w-[60%] space-y-3">
      <h1 className="text-4xl font-bold text-slate-200">Sujon Sheikh</h1>
      <p className="text-[23px] sm:text-2xl text-slate-300">
        Full-Stack JavaScript Developer
      </p>
      <p className="sm:text-lg text-neutral-300 pt-4">
        Hey there! 👋 I’m a developer with 4.5 years of experience in web development. I spent
        2 years as a Frontend Developer at
        <a
          href="https://buddydevs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand px-1 underline-offset-4 hover:underline"
        >
          BuddyDevs
        </a>
        , building clean and engaging user interfaces, and the last year working with the MERN stack
        across both frontend and backend. I also worked as a Full Stack Developer at
        <a
          href="https://ziarah.ai/en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand px-1 underline-offset-4 hover:underline"
        >
          Ziarah.ai
        </a>
        , a Dubai-based travel booking agency, on a 6-month contractual role (June–November
        2025), primarily maintaining the frontend and occasionally handling backend tasks. Check out my
        <Link
          href="/blogs"
          className="text-brand px-1 underline-offset-4 hover:underline"
        >
          blog
        </Link>
        and
        <Link
          href="/projects"
          className="text-brand px-1 underline-offset-4 hover:underline"
        >
          projects
        </Link>
        to see more of my work.
      </p>

      <div className="flex flex-wrap gap-4 my-5">
        <Link
          href="/projects"
          className="bg-brand hover:bg-brand/90 duration-200 rounded px-2 sm:px-4 py-2 text-slate-900 inline-flex justify-between items-center space-x-2 font-medium"
        >
          <IconArrowRightTail aria-hidden="true" className="w-5 h-5" />
          <span>View Portfolio</span>
        </Link>

        {/* Opens your resume PDF from Google Drive. Set the link in data/Socials.ts (resumeUrl).
            Until the link is set, the button is shown as disabled instead of being a dead link. */}
        {resumeUrl ? (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${resumeButtonClasses} hover:bg-panel-light/80`}
          >
            <IconFiles aria-hidden="true" className="w-5 h-5" />
            <span>View Resume</span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Resume coming soon"
            className={`${resumeButtonClasses} opacity-60 cursor-not-allowed`}
          >
            <IconFiles aria-hidden="true" className="w-5 h-5" />
            <span>View Resume</span>
            <span className="sr-only">(coming soon)</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutTextContent;