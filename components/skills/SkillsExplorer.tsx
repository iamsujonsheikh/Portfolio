"use client";

import { useState } from "react";
import skillsDB from "@/data/skillsDB";
import type { SkillCategory } from "@/types";
import SkillsFilter from "./SkillsFilter";
import SkillsList from "./SkillsList";

// Only the selected category is stored; the visible list is derived from it.
const SkillsExplorer = () => {
  const [category, setCategory] = useState<SkillCategory>("all");

  const visibleSkills =
    category === "all"
      ? skillsDB
      : skillsDB.filter((skill) => skill.category === category);

  return (
    <>
      <SkillsFilter selectedCategory={category} onSelect={setCategory} />
      <SkillsList skills={visibleSkills} />
    </>
  );
};

export default SkillsExplorer;