import type { Metadata } from "next";
import ProjectsTextContent from "@/components/projects/ProjectsTextContent";
import ProjectList from "@/components/projects/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web apps built by Sujon Sheikh with Next.js, React, Node.js and MongoDB: LMS, booking and e-commerce projects.",
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectsTextContent />
      <ProjectList />
    </>
  );
};

export default ProjectsPage;