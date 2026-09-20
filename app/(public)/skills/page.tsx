import type { Metadata } from "next";
import SkillsExplorer from "@/components/skills/SkillsExplorer";
import SkillsTextContent from "@/components/skills/AboutTextContent";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies and tools Sujon Sheikh works with: JavaScript, TypeScript, React, Next.js, Node.js, MongoDB and more.",
};

const SkillsPage = () => {
  return (
    <div>
      <SkillsTextContent />
      <SkillsExplorer />
    </div>
  );
};

export default SkillsPage;