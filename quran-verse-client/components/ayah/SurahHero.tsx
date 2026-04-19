type Props = {
  surah: {
    id: number;
    name: string;
    transliteration: string;
    total_verses: number;
    type: string;
    translation?: string;
  };
};

const SurahHero=({ surah }: Props)=> {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 
    bg-gradient-to-br from-emerald-600/90 via-teal-600/90 to-emerald-700/90
    shadow-[0_20px_60px_rgba(16,185,129,0.25)]">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative z-10 flex flex-col gap-6">

        {/* top row */}
        <div className="flex items-center justify-between text-white/90 text-sm">
          <span className="uppercase tracking-wider">
            {surah.type}
          </span>
          <span>{surah.total_verses} verses</span>
        </div>

        {/* main */}
        <div className="flex items-end justify-between gap-4">

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              {surah.transliteration}
            </h2>
            <p className="text-white/80 text-sm">
              {surah.translation}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white text-right leading-tight">
            {surah.name}
          </h1>

        </div>

      </div>
    </div>
  );
}

export default SurahHero;