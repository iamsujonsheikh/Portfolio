import { ReactNode } from "react";

// SKILL FORM DATA
export interface SkillFormData {
    title: string;
    image: string;
    category: string;
    level: number;
};

// PROJECT FORM DATA
export interface ProjectFormData {
    title: string;
    img: string;
    live: string;
    code: string;
    technologies: string[];
    description: string[];
};

// SKILL TYPE
export interface Skill {
    name: string;
    image: string;
};

// ALL SKILL TYPE
export interface ISkills {
    title: string;
    semiTitle: string;
    icon: ReactNode;
    skills: Skill[];
    isFullWidth?: boolean;
};