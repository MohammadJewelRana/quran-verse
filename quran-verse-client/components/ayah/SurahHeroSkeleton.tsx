const SurahHeroSkeleton = () => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 sm:p-8
      bg-gradient-to-br from-emerald-600/90 via-teal-600/90 to-emerald-700/90
      shadow-[0_20px_60px_rgba(16,185,129,0.25)]"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative z-10 flex flex-col gap-6 animate-pulse">

        {/* top row */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 bg-white/20 rounded" />
          <div className="h-3 w-16 bg-white/20 rounded" />
        </div>

        {/* main */}
        <div className="flex items-end justify-between gap-4">

          <div>
            <div className="h-5 w-40 bg-white/20 rounded mb-2" />
            <div className="h-3 w-28 bg-white/20 rounded" />
          </div>

          <div className="h-10 w-32 bg-white/20 rounded" />
        </div>

      </div>
    </div>
  );
};

export default SurahHeroSkeleton;