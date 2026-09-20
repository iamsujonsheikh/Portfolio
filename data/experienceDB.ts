import { IExperience } from "@/types";

// Newest first. Only company, role, period and summary are required.
// Everything else (about, responsibilities, highlights, technologies) shows up
// on the card automatically as soon as you add it. Only write things that are true
// and that you can talk about in an interview.
const experienceDB: IExperience[] = [
    {
        id: "ziarah",
        company: "Ziarah.ai",
        url: "https://ziarah.ai/en",
        role: "Full Stack Developer",
        type: "Contract",
        period: "June 2025 – November 2025 · 6 months",
        // about: "One line about what the company does.",
        summary: "Contract role at a Dubai-based travel booking agency.",
        responsibilities: [
            "Primarily maintained the frontend.",
            "Occasionally handled backend tasks.",
        ],
        // highlights: ["Built X, which improved Y by Z"],
        // technologies: ["React", "Node.js"],
    },
    {
        id: "buddydevs",
        company: "BuddyDevs",
        url: "https://buddydevs.com/",
        role: "Frontend Developer",
        period: "February 2023 – February 2025 · 2 years",
        // about: "One line about what the company does.",
        summary: "Worked as a Frontend Developer for 2 years.",
        responsibilities: ["Built clean and engaging user interfaces."],
        // highlights: ["Built X, which improved Y by Z"],
        // technologies: ["React", "JavaScript"],
    },
];

// Freelance work is shown in its own section (it overlaps with other roles,
// so it is not part of the numbered stepper above).
export const freelanceWork: IExperience = {
    id: "freelance",
    company: "Third-party clients",
    role: "Freelance Web Developer",
    // Replace with real dates if you like, e.g. "2022 – Present"
    period: "Multiple projects",
    summary: "Completed many freelance projects for third-party clients.",
    // responsibilities: ["Built e-commerce and business websites for clients"],
    // highlights: ["Delivered 20+ client projects"],
    // technologies: ["Next.js", "Node.js", "MongoDB"],
};

export default experienceDB;