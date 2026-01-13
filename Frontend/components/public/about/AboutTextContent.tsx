"use client"
import { IconArrowRightTail, IconFiles } from '@tabler/icons-react';
import { useRouter } from "next/navigation";


const AboutTextContent = () => {
  const router = useRouter();
  const handleClick = (value: string) => {
    router.push(value);
  };

  return (
    <div className="w-full sm:max-w-[60%] space-y-3">
      <h1 className="text-4xl font-bold text-slate-200">Sujon Sheikh</h1>
      <p className="text-[23px] sm:text-2xl text-slate-300">Full-Stack Javascript Developer</p>
      <p className="sm:text-lg text-neutral-300 pt-4 text-justify">
        Hey there!👋I’m a developer with 3.5 years of experience in web development. I spent nearly
        1.5 years as a Frontend Developer at
        <a
          href="https://buddydevs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5cc48a] px-1"
        >
          BuddyDevs
        </a>,
        building clean and engaging user interfaces, and the last year working with the MERN stack
        across both frontend and backend.

        I also worked as a Full Stack Developer at
        <a
          href="https://ziarah.ai/en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5cc48a] px-1"
        >
          Ziarah.ai
        </a>, a Dubai-based travel booking agency, on a 6-month contractual role (June–November
        2025), primarily maintaining the frontend and occasionally handling backend tasks.

        Check out my
        <button
          onClick={() => handleClick("/blogs")}
          className="text-[#5cc48a] px-1 cursor-pointer"
        >
          blog
        </button>
        and
        <button
          onClick={() => handleClick("/projects")}
          className="text-[#5cc48a] px-1 cursor-pointer"
        >
          projects
        </button>
        to see more of my work.
      </p>

      <div className="space-x-4 my-5">
        <button
          onClick={() => handleClick("/projects")}
          className="bg-[#5cc48a] active:bg-[#1b864b] duration-200 rounded px-2 sm:px-4 py-2 text-slate-100 inline-flex justify-between items-center space-x-2 font-medium cursor-pointer"
        >
          <IconArrowRightTail className="w-5 h-5 hover:rotate-90 duration-300" />
          <span>View Portfolio</span>
        </button>

        <a
          target="_blank"
          className="bg-[#32455b] active:bg-[#0f2a47] duration-200 rounded px-2 sm:px-4 py-2 text-slate-100 inline-flex justify-between items-center space-x-2 font-medium cursor-pointer"
        >
          <IconFiles className="w-5 h-5 hover:rotate-90 duration-300" />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};

export default AboutTextContent;
