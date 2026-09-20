import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center min-h-dvh bg-surface">
            <div className="space-y-4 px-4">
                <h1 className="text-5xl text-red-400 font-bold text-center font-mono">
                    Page not found!
                </h1>
                <p className="text-slate-400 font-mono text-center">
                    Oops! You seem to be in the wrong place.
                </p>

                <div className="flex justify-center items-center mt-10">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;