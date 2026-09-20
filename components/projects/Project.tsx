"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IconEye } from "@tabler/icons-react";
import type { IProjects } from "@/types";

type IProjectProps = Pick<IProjects, "id" | "img" | "title" | "live">;

const Project = ({ project }: { project: IProjectProps }) => {
  const { id, img, title, live } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="relative grid"
    >
      <div className="relative">
        <Image
          src={img}
          alt={`Screenshot of ${title}`}
          width={500}
          height={500}
          sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="w-full h-48 bg-black opacity-80 rounded-2xl object-cover"
        />

        {/* Whole card opens the project details page */}
        <Link
          href={`/projects/${id}`}
          aria-label={`View details of ${title}`}
          className="absolute inset-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-brand"
        />

        {/* Small bar opens the live site */}
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live site of ${title}`}
          className="absolute bottom-2 hover:scale-105 duration-500 w-[70%] sm:w-[90%] left-1/2 -translate-x-1/2 rounded-xl border-2 shadow border-amber-200/10 bg-surface/50 h-14 sm:h-12 flex items-center justify-between px-2 backdrop-blur-md"
        >
          <span className="text-center text-neutral-200 font-medium truncate font-mono">
            {title}
          </span>

          <span className="bg-neutral-500/30 hover:bg-brand/30 duration-300 px-1.5 py-0.5 rounded-lg border border-neutral-500/50">
            <IconEye
              aria-hidden="true"
              className="text-neutral-300 opacity-80 w-8 h-8 sm:w-7 sm:h-7"
            />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;