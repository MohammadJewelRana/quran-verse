"use client";

import { useRouter } from "next/navigation";
import { FaInfo } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useMemo } from "react";

type AyahType = {
  ayahId: number;
  text: string;
  translation: string;
  preview: string;
};

type SurahResultType = {
  surahId: number;
  surahName: string;
  verses: AyahType[];
};

type HighlightedAyahType = {
  surahId?: number;
  ayahId?: number;
};

export default function SearchResults({
  results,
  highlightedAyah = {},
}: {
  results: SurahResultType[];
  highlightedAyah?: HighlightedAyahType;
}) {
  const { surahId: targetSurahId, ayahId: targetAyahId } = highlightedAyah;
  const router = useRouter();

  // 🔥 Move selected ayah to top
  const sortedResults = useMemo(() => {
    if (!targetSurahId || !targetAyahId) return results;

    return results.map((surah) => {
      if (surah.surahId !== targetSurahId) return surah;

      const sortedVerses = [...surah.verses].sort((a, b) => {
        if (a.ayahId === targetAyahId) return -1;
        if (b.ayahId === targetAyahId) return 1;
        return 0;
      });

      return {
        ...surah,
        verses: sortedVerses,
      };
    });
  }, [results, targetSurahId, targetAyahId]);

  // 🔥 Auto scroll to highlighted ayah
  useEffect(() => {
    if (targetSurahId && targetAyahId) {
      const el = document.getElementById(
        `${targetSurahId}-${targetAyahId}`
      );
      el?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [targetSurahId, targetAyahId]);

  return (
    <div className="space-y-5">
      {sortedResults.map((surahResult) =>
        surahResult.verses.map((ayah) => {
          const isHighlighted =
            targetSurahId === surahResult.surahId &&
            targetAyahId === ayah.ayahId;

          return (
            <div
              id={`${surahResult.surahId}-${ayah.ayahId}`} // 🔥 important
              key={`${surahResult.surahId}-${ayah.ayahId}`}
              className={`group p-5 rounded-xl border transition-all duration-300 cursor-pointer
              ${
                isHighlighted
                  ? "border-emerald-400 bg-emerald-900/20 shadow-md shadow-emerald-900/20"
                  : "border-white/5 bg-[#0B1220] hover:border-emerald-500/30 hover:bg-[#0f172a]"
              }`}
              onClick={() =>
                router.push(`/surah/${surahResult.surahId}`)
              }
            >
              {/* 🔹 Header */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-emerald-400 text-xs font-medium tracking-wide">
                  {surahResult.surahName} • {surahResult.surahId}:{ayah.ayahId}
                </div>

                {/* View Full Surah */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/surahs/${surahResult.surahId}`);
                  }}
                  className="flex items-center gap-1 text-xs text-white/50 hover:text-emerald-300 transition"
                >
                  Full Surah <FiArrowRight size={14} />
                </button>
              </div>

              {/* 🔹 Arabic */}
              <div
                className="text-white text-lg leading-relaxed mb-2 font-medium"
                dir="rtl"
              >
                {ayah.text}
              </div>

              {/* 🔹 Translation */}
              <div className="text-white/80 text-sm leading-relaxed">
                {ayah.translation}
              </div>

              {/* 🔹 Footer */}
              <div className="flex items-center justify-between mt-3 text-xs text-white/40">
                <span className="flex items-center gap-1">
                  <FaInfo size={12} />
                  Click to view details
                </span>

                <span className="opacity-0 group-hover:opacity-100 transition">
                  View →
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}