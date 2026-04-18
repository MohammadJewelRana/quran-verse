type Props = {
  surah: {
    id: number;
    name: string;
    transliteration: string;
    total_verses: number;
    type: string;
  };
};

export default function SurahCard({ surah }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0D1626] to-[#08111F] p-4 sm:p-4.5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-semibold">
            {surah.id}
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Surah
            </p>
            <p className="text-[11px] text-white/50">{surah.total_verses} verses</p>
          </div>
        </div>

        <button className="text-white/40 transition hover:text-emerald-400 text-base leading-none">
          ♡
        </button>
      </div>

      <div className="relative z-10 mt-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-right leading-tight">
          {surah.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-emerald-300/85">
          {surah.transliteration}
        </p>
      </div>

      <div className="relative z-10 mt-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mt-3 flex items-center justify-between gap-3 text-[11px] text-white/55">
        <span>{surah.total_verses} Verses</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 capitalize text-white/70">
          {surah.type}
        </span>
      </div>

      <button className="relative z-10 mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2 font-medium text-black transition hover:brightness-110 text-sm">
        Read Verses
      </button>
    </div>
  );
}