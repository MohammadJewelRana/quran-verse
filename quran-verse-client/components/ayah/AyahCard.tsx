"use client";

import { useSettings } from "@/context/settings-context";

type Props = {
  number: number;
  arabic: string;
  translation: string;
};

export default function AyahCard({ number, arabic, translation }: Props) {
  const { arabicSize, translationSize, font } = useSettings();

  const fontClass = font === "amiri" ? "font-[var(--font-arabic-amiri)]" : "font-[var(--font-arabic-noto)]";

  return (
    <div className="group flex gap-3 rounded-xl border border-white/10 bg-[#0B1322] px-3 py-2.5 transition hover:border-emerald-500/30">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-400">
        {number}
      </div>

      <div className="flex-1">
        <p
          className={`text-right leading-[1.8] text-white ${fontClass}`}
          style={{ fontSize: arabicSize }}
        >
          {arabic}
        </p>

        <p
          className="mt-1 leading-relaxed text-white/55"
          style={{ fontSize: translationSize }}
        >
          {translation}
        </p>
      </div>
    </div>
  );
}