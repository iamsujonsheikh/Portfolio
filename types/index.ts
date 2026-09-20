export interface IProjects {
    id: string
    title: string;
    img: string;
    live: string;
    code: string;
    /** What you did on this project, e.g. "Full-Stack Developer" */
    role: string;
    /** Year the project was built */
    year: number;
    /** Only featured projects are shown by default on the Projects page */
    featured: boolean;
    technologies: string[];
    description: string[]
};

export type SkillCategory = 'all' | 'programming' | 'web' | 'tools';

export type SkillRating = 1 | 2 | 3 | 4 | 5;

export interface ISkills {
    id: number;
    title: string;
    img: string;
    category: SkillCategory
    rating: SkillRating;
};

export interface IExperience {
    id: string;
    company: string;
    /** Company website (optional) */
    url?: string;
    role: string;
    /** e.g. "Contract" or "Full-time" (optional) */
    type?: string;
    /** Dates or duration, shown exactly as written */
    period: string;
    /** What the company does (one line, optional) */
    about?: string;
    /** One or two sentences about your role */
    summary: string;
    /** What you worked on, e.g. "Built the checkout flow". Shown as "What I did" */
    responsibilities?: string[];
    /** Concrete results, e.g. "Cut page load time by 40%". Only add real ones. Shown as "Results" */
    highlights?: string[];
    technologies?: string[];
};