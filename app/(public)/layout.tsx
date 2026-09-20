import PublicSideBar from "@/components/layout/sideNavbar/PublicSideBar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Lets keyboard / screen-reader users jump past the navigation */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-slate-900"
            >
                Skip to content
            </a>

            {/* LARGER SCREEN - Fixed Position */}
            <aside className="hidden md:block md:fixed md:left-0 md:top-0 md:h-screen md:w-62.5 bg-panel overflow-y-auto">
                <PublicSideBar />
            </aside>

            {/* MAIN PAGE CONTENT */}
            <main
                id="main-content"
                className="w-full min-h-screen bg-surface px-4 sm:px-10 md:px-20 pt-10 pb-24 md:pb-5 md:ml-62.5"
            >
                {children}
            </main>

            {/* AT THE BOTTOM FOR MOBILE MENU */}
            <div className="fixed w-full bottom-2 left-0 right-0 px-2 md:hidden z-50">
                <div className="bg-panel/50 border w-full max-w-87.5 py-1 mx-auto border-neutral-700/50 backdrop-blur-md rounded-full">
                    <PublicSideBar />
                </div>
            </div>
        </div>
    );
};

export default PublicLayout;