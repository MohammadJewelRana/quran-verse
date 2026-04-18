export default function Page() {
  const cards = [
    { num: 1, name: "Al-Fatiha", desc: "The Opening", verses: "7 Verses", place: "Mecca" },
    { num: 2, name: "Al-Baqarah", desc: "The Cow", verses: "286 Verses", place: "Medina" },
    { num: 3, name: "Aal-Imran", desc: "The Family of Imran", verses: "200 Verses", place: "Medina" },
    { num: 4, name: "An-Nisa", desc: "The Women", verses: "176 Verses", place: "Medina" },
    { num: 5, name: "Al-Ma'idah", desc: "The Table Spread", verses: "120 Verses", place: "Medina" },
    { num: 6, name: "Al-An'am", desc: "The Cattle", verses: "165 Verses", place: "Mecca" },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-[#0B1220] p-5 sm:p-6 lg:p-8">
        <p className="text-emerald-400 text-sm font-medium mb-2">Continue Reading</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome Back</h1>
        <p className="text-white/60 mt-2 max-w-xl">
          Continue your spiritual journey with the Qur'an.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-medium">
            Continue Reading
          </button>
          <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80">
            Bookmark
          </button>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">Surahs</h2>
        <button className="text-emerald-400 text-sm">View All</button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.num}
            className="rounded-2xl border border-white/10 bg-[#121B2D] p-5 hover:border-emerald-500/30 transition"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl font-bold">{card.num}</span>
              <span className="text-white/40">♡</span>
            </div>

            <h3 className="mt-4 text-xl font-semibold">{card.name}</h3>
            <p className="text-white/50 text-sm mt-1">{card.desc}</p>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>{card.verses}</span>
              <span>{card.place}</span>
            </div>

            <button className="mt-5 w-full h-11 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/15 transition">
              Read
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}