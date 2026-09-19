export interface ITestimonials {
    name: string;
    title: string;
    text: string;
    image: string;
    link: string;
};

export interface IProjects {
    id: string
    title: string;
    img: string;
    live: string;
    code: string;
    technologies: string[];
    description: string[]
};

export type SkillCategory = 'all' | 'programming' | 'web' | 'tools';

export interface ISkills {
    id: number;
    title: string;
    img: string;
    category: SkillCategory
    level: string;
};