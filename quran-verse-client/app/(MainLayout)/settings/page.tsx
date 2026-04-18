"use client";

import {
  FiType,
  FiEye,
  FiMoon,
  FiRotateCcw,
  FiSettings,
  FiSliders,
  FiBookOpen,
} from "react-icons/fi";
import { useSettings } from "@/context/settings-context";

const SettingCard = ({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/45">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

const page = () => {
  const {
    font,
    arabicSize,
    translationSize,
    setFont,
    setArabicSize,
    setTranslationSize,
    resetSettings,
  } = useSettings();

  return (
    <div className="    text-white">
      <div className="  px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-emerald-400">
              <FiSettings className="text-lg" />
              <span className="text-sm font-medium uppercase tracking-[0.22em]">
                Reader Settings
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Customize your Quran reading experience
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              Adjust Arabic typography, translation visibility, and visual style
              so every page feels comfortable and personal.
            </p>
          </div>

          <button
            onClick={resetSettings}
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-emerald-500/30 hover:text-white sm:inline-flex"
          >
            Reset All
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-6">
            <SettingCard
              icon={<FiType />}
              title="Arabic font"
              description="Choose the Arabic script style that feels most readable and elegant."
            >
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFont("amiri")}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${
                    font === "amiri"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                      : "border-white/10 bg-[#111B2D] text-white/70 hover:text-white"
                  }`}
                >
                  Amiri
                </button>
                <button
                  onClick={() => setFont("noto")}
                  className={`rounded-xl border px-4 py-3 text-sm transition ${
                    font === "noto"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                      : "border-white/10 bg-[#111B2D] text-white/70 hover:text-white"
                  }`}
                >
                  Noto Naskh
                </button>
              </div>
            </SettingCard>

            <SettingCard
              icon={<FiSliders />}
              title="Arabic font size"
              description="Increase or reduce the Arabic text size for comfortable reading."
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-white/55">
                  <span>Size</span>
                  <span>{arabicSize}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="44"
                  step="1"
                  value={arabicSize}
                  onChange={(e) => setArabicSize(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </SettingCard>

            <SettingCard
              icon={<FiBookOpen />}
              title="Translation size"
              description="Control the English translation size for better balance with Arabic text."
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-white/55">
                  <span>Size</span>
                  <span>{translationSize}px</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="24"
                  step="1"
                  value={translationSize}
                  onChange={(e) => setTranslationSize(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </SettingCard>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1322] to-[#09111F] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FiEye />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Live preview
                  </h2>
                  <p className="text-sm text-white/45">
                    See how your reading view looks.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p
                  className={`text-right leading-[2] text-white ${
                    font === "amiri"
                      ? "font-[var(--font-arabic-amiri)]"
                      : "font-[var(--font-arabic-noto)]"
                  }`}
                  style={{ fontSize: arabicSize }}
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p
                  style={{ fontSize: translationSize }}
                  className="text-white/55"
                >
                  In the name of Allah, the Most Gracious, the Most Merciful.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FiMoon />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    More settings later
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/45">
                    This space is ready for future options like theme mode,
                    translation toggle, verse spacing, and reading layout
                    controls.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={resetSettings}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition hover:border-emerald-500/30 hover:text-white sm:hidden"
            >
              <FiRotateCcw />
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
