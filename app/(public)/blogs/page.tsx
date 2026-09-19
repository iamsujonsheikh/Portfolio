import { BookOpen } from 'lucide-react';

const BlogsPage = () => {

  return (
    <div className="flex items-center mt-32 justify-center p-4">
      {/* Main Content */}
      <div className="text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#5cc48a] blur-2xl opacity-30 rounded-full animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-full shadow-lg">
              <BookOpen className="w-16 h-16 text-[#5cc48a]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* HEADING */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-6xl font-bold text-slate-300 font-mono">
            Coming Soon
          </h1>
          <p className="text-lg text-slate-500 max-w-md mx-auto font-mono">
            We're crafting amazing stories and insights just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;