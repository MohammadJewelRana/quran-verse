const AyahCardSkeleton = () => {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-[#0B1322] px-3 py-3 animate-pulse">
      <div className="h-6 w-6 rounded-full bg-white/10" />

      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 bg-white/10 rounded" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-5/6 bg-white/10 rounded" />
      </div>
    </div>
  );
};

export default AyahCardSkeleton;
