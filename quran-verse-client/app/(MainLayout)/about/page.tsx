"use client";

import {
  FiBookOpen,
  FiHeart,
  FiLayers,
  FiSettings,
  FiZap,
  FiCompass,
} from "react-icons/fi";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:border-emerald-500/30">
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
        {icon}
      </div>
      <h3 className="mt-4 text-base sm:text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/50">
        {description}
      </p>
    </div>
  );
};

export default function Page() {
  return (
    <div className="  text-white">
    <div className="  md:px-4 md:py-8 ">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1626] via-[#09111F] to-[#050A14] p-5 sm:p-7 lg:p-10 shadow-[0_16px_60px_rgba(0,0,0,0.28)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center gap-2 text-emerald-400">
              <FiCompass className="text-lg" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.22em] sm:tracking-[0.24em]">
                About QuranVerse
              </span>
            </div>

            <h1 className="max-w-3xl text-xl md:text-2xl lg:text-4xl font-bold leading-tight tracking-tight text-white">
              A calm, beautiful, and focused Quran reading experience.
            </h1>

            <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/55">
              QuranVerse is designed to make reading, exploring, and personalizing
              the Quran feel smooth and meaningful. The layout stays clean, the
              typography stays readable, and the settings are built to adapt to
              your preference.
            </p>
          </div>
        </div>

        <div className="mt-7 sm:mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            icon={<FiBookOpen />}
            title="Readable Arabic text"
            description="Choose a font and size that feels comfortable for long reading sessions."
          />
          <FeatureCard
            icon={<FiSettings />}
            title="Flexible settings"
            description="Adjust the reading experience with saved preferences that persist across sessions."
          />
          <FeatureCard
            icon={<FiHeart />}
            title="Built for focus"
            description="A minimal interface helps you stay on the verse, not the interface."
          />
          <FeatureCard
            icon={<FiLayers />}
            title="Structured browsing"
            description="Surahs and verses are organized cleanly so navigation stays easy."
          />
          <FeatureCard
            icon={<FiZap />}
            title="Fast interaction"
            description="Lightweight UI patterns keep the app responsive and comfortable to use."
          />
          <FeatureCard
            icon={<FiCompass />}
            title="Future-ready"
            description="The page structure is ready for future sections like roadmap, stats, or team."
          />
        </div>

        <div className="mt-7 sm:mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Our approach
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/50">
              The goal is not just to display verses. The goal is to create a
              reading environment that feels calm, modern, and useful. Every
              setting should apply instantly where it matters, while keeping the
              design elegant and consistent.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              What’s next
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/50">
              More personalized reading controls, theme options, and saved user
              preferences can be added later without changing the layout system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}