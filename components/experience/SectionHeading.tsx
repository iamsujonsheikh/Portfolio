import type { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className="text-slate-200 text-2xl border-l-4 border-brand px-2">
            {children}
        </h2>
    );
};

export default SectionHeading;