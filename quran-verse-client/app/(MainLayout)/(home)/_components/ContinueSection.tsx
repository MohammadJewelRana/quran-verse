export default function ContinueSection() {
  return (
    <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-[#0B1220] p-5 sm:p-6 lg:p-8">
      <p className="text-emerald-400 text-sm font-medium mb-2">
        Continue Reading
      </p>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Welcome Back
      </h1>

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
  );
}