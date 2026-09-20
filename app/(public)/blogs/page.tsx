import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles by Sujon Sheikh on web development. Coming soon.",
};

const BlogsPage = () => {
  return (
    <div className="flex items-center mt-32 justify-center p-4">
      {/* Main Content */}
      <div className="text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-brand blur-2xl opacity-30 rounded-full animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-full shadow-lg">
              <BookOpen aria-hidden="true" className="w-16 h-16 text-brand" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* HEADING */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-6xl font-bold text-slate-300 font-mono">
            Coming Soon
          </h1>
          <p className="text-lg text-slate-400 max-w-md mx-auto font-mono">
            I'm writing my first articles on web development. Check back soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;