import { AnimatePresence } from "motion/react";
import Skill from "./Skill";
import type { ISkills } from "@/types";

interface SkillsListProps {
  skills: ISkills[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
      <AnimatePresence>
        {skills.map((skill) => (
          <Skill key={skill.id} selectSkill={skill} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillsList;