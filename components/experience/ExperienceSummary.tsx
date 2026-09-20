const stats = [
    { value: "4.5", label: "Years of experience" },
    { value: "MERN", label: "Full-stack focus" },
    { value: "Freelance", label: "Third-party client projects" },
];

const ExperienceSummary = () => {
    return (
        <section className="space-y-6">
            <p className="max-w-3xl text-slate-300 sm:text-lg">
                I have 4.5 years of experience in web development. I spent 2 years as a
                Frontend Developer at BuddyDevs, building clean and engaging user
                interfaces, and the last year working with the MERN stack across both
                frontend and backend. I also worked as a Full Stack Developer at
                Ziarah.ai on a 6-month contract (June–November 2025), and I have
                completed many freelance projects for third-party clients.
            </p>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map(({ value, label }) => (
                    <li key={label} className="rounded-lg bg-panel p-4 text-center shadow">
                        <p className="text-3xl font-bold text-brand">{value}</p>
                        <p className="text-sm text-slate-400">{label}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ExperienceSummary;