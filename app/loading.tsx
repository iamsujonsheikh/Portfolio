const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-3 h-screen bg-surface">
      <p role="status" className="text-slate-400 text-3xl">Loading...</p>
      <span
        aria-hidden="true"
        className="h-12 w-12 animate-spin rounded-full border-4 border-slate-500 border-t-transparent"
      />
    </div>
  );
};

export default Loading;