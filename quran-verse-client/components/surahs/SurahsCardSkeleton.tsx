const SurahCardSkeleton = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0D1626] to-[#08111F] p-4 sm:p-4 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-xl bg-white/10" />
          <div className="hidden sm:block space-y-2">
            <div className="h-2.5 w-12 rounded bg-white/10" />
            <div className="h-2 w-16 rounded bg-white/10" />
          </div>
        </div>
        <div className="h-5 w-5 rounded-full bg-white/10" />
      </div>

      <div className="relative z-10 mt-4 space-y-3">
        <div className="h-6 w-3/4 rounded bg-white/10" />
        <div className="h-4 w-1/2 rounded bg-emerald-500/15" />
      </div>

      <div className="relative z-10 mt-3 h-px bg-white/10" />

      <div className="relative z-10 mt-3 flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-white/10" />
        <div className="h-5 w-16 rounded-full bg-white/10" />
      </div>

      <div className="relative z-10 mt-4 h-9 w-full rounded-xl bg-white/10" />
    </div>
  );
}

export default SurahCardSkeleton;