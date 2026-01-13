import { AnimatePresence } from "motion/react";
import Project from "./Project";
import { IProjects } from "@/types";
import projectsDB from "@/data/projectsDB";


const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

      <AnimatePresence>
        {projectsDB.map((project: IProjects) => (
          <Project key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
