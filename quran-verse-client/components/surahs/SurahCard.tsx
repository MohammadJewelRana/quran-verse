"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHeart, FiBookmark } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  isBookmarked,
  isFavorited,
  toggleBookmark,
  toggleFavorite,
  type Surah,
} from "@/lib/storage";

type Props = {
  surah: Surah;
};

const SurahCard = ({ surah }: Props) => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(surah.id));
    setFavorited(isFavorited(surah.id));
  }, [surah.id]);

  const handleBookmark = () => {
    const next = toggleBookmark(surah);
    const exists = next.some((item) => item.id === surah.id);
    setBookmarked(exists);
    toast.success(exists ? "Added to bookmarks" : "Removed from bookmarks");
  };

  const handleFavorite = () => {
    const next = toggleFavorite(surah);
    const exists = next.some((item) => item.id === surah.id);
    setFavorited(exists);
    toast.success(exists ? "Added to favorites" : "Removed from favorites");
  };

  const handleContinueReading = () => {
    localStorage.setItem(
      "continue-reading",
      JSON.stringify({
        surahId: surah.id,
        surahName: surah.name,
        transliteration: surah.transliteration,
        ayahNumber: 1,
      }),
    );

    router.push(`/surah/${surah.id}`);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0D1626] to-[#08111F] p-4 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-sm font-semibold text-emerald-400">
            {surah.id}
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Surah
            </p>
            <p className="text-[11px] text-white/50">
              {surah.total_verses} verses
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleFavorite}
            title={favorited ? "Remove from favorites" : "Add to favorites"}
            className={`cursor-pointer text-base leading-none transition ${
              favorited ? "text-rose-400" : "text-white/40 hover:text-rose-400"
            }`}
            aria-label="Toggle favorite"
            type="button"
          >
            <FiHeart className={favorited ? "fill-current" : ""} />
          </button>

          <button
            onClick={handleBookmark}
            title={bookmarked ? "Remove bookmark" : "Add bookmark"}
            className={`cursor-pointer text-base leading-none transition ${
              bookmarked
                ? "text-emerald-400"
                : "text-white/40 hover:text-emerald-400"
            }`}
            aria-label="Toggle bookmark"
            type="button"
          >
            <FiBookmark className={bookmarked ? "fill-current" : ""} />
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <h3 className="text-right text-xl font-semibold leading-tight text-white sm:text-2xl">
          {surah.name}
        </h3>
        <p className="mt-1 text-xs text-emerald-300/85 sm:text-sm">
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

      <button
        onClick={handleContinueReading}
        className="relative z-10 mt-4 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2 text-center text-sm font-medium text-black transition hover:brightness-110 cursor-pointer"
        type="button"
      >
        Read Verses
      </button>
    </div>
  );
};

export default SurahCard;
