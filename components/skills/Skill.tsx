import { motion } from "motion/react";
import Image from "next/image";
import type { ISkills } from "@/types";

type SelectSkillProps = Pick<ISkills, "title" | "img" | "rating">;

const Skill = ({ selectSkill }: { selectSkill: SelectSkillProps }) => {
  const { rating } = selectSkill;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="group bg-slate-800 rounded shadow py-2 px-4 flex-col justify-center items-center space-y-1"
    >
      <p className="text-slate-400 text-center font-mono truncate">
        {selectSkill.title}
      </p>

      <div className="flex justify-center items-center">
        <Image
          width={50}
          height={50}
          src={selectSkill.img}
          alt=""
          className="duration-500 group-hover:scale-125 w-12.5 h-12.5"
        />
      </div>

      <p
        role="img"
        aria-label={`Proficiency: ${rating} out of 5`}
        className="text-center text-sm"
      >
        {"⭐".repeat(rating)}
      </p>
    </motion.div>
  );
};

export default Skill;