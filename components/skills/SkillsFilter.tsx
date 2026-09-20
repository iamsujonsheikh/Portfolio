import type { SkillCategory } from "@/types";

const categories: { value: SkillCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "programming", label: "Programming" },
  { value: "web", label: "Web" },
  { value: "tools", label: "Tools" },
];

interface SkillsFilterProps {
  selectedCategory: SkillCategory;
  onSelect: (category: SkillCategory) => void;
}

const SkillsFilter = ({ selectedCategory, onSelect }: SkillsFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 items-center my-10" role="group" aria-label="Filter skills by category">
      {categories.map(({ value, label }) => {
        const active = selectedCategory === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            aria-pressed={active}
            className={`px-4 py-2 rounded shadow font-medium cursor-pointer duration-200 ${active ? "bg-brand text-slate-900" : "bg-panel-light text-slate-100 hover:bg-panel-light/80"
              }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SkillsFilter;