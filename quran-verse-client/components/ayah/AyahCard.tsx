"use client";

import { useSettings } from "@/store/hooks/useSettings";

export default function AyahCard({ number, arabic, translation }: any) {
  const { arabicSize, translationSize, font } = useSettings();

  return (
    <div className="group flex gap-4 rounded-xl border border-white/10 
    bg-[#0B1322] px-4 py-3 transition hover:border-emerald-500/30">

      {/* number */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center 
      rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
        {number}
      </div>

      {/* content */}
      <div className="flex-1">

        {/* Arabic */}
        <p
          className={`text-right leading-[2] text-white ${font}`}
          style={{ fontSize: arabicSize }}
        >
          {arabic}
        </p>

        {/* Translation */}
        <p
          className="mt-1 text-white/60 leading-relaxed"
          style={{ fontSize: translationSize }}
        >
          {translation}
        </p>

      </div>

    </div>
  );
}