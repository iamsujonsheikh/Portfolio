"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Project from "./Project";
import projectsDB from "@/data/projectsDB";

const featuredProjects = projectsDB.filter((project) => project.featured);
const otherProjects = projectsDB.filter((project) => !project.featured);

// Only the best (featured) projects are shown by default; the rest are one click away.
const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  // If nothing is marked as featured, fall back to showing every project.
  const canToggle = featuredProjects.length > 0 && otherProjects.length > 0;
  const visibleProjects =
    showAll || featuredProjects.length === 0
      ? [...featuredProjects, ...otherProjects]
      : featuredProjects;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {canToggle && (
        <button
          type="button"
          onClick={() => setShowAll((open) => !open)}
          aria-expanded={showAll}
          className="mt-8 px-4 py-2 rounded shadow font-medium cursor-pointer duration-200 bg-panel-light text-slate-100 hover:bg-panel-light/80"
        >
          {showAll ? "Show featured only" : `Show all projects (${projectsDB.length})`}
        </button>
      )}
    </>
  );
};

export default ProjectList;