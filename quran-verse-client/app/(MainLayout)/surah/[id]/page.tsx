"use client";

import AyahList from "@/components/ayah/AyahList";
import SurahHero from "@/components/ayah/SurahHero";
import { useGetSingleSurah } from "@/store/hooks/surahs.hook";
import { useParams } from "next/navigation";

export default function SurahPage() {
  const params = useParams();
  const id = params?.id as string;

  const { surah, isLoading, isError } = useGetSingleSurah(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  if (isError || !surah) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-red-400">
        Failed to load surah
      </div>
    );
  }

  return (
<div className="min-h-screen text-white">
  <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">

    {/* Hero */}
    <div className="mb-6">
      <SurahHero surah={surah} />
    </div>

    {/* Ayahs */}
    <AyahList verses={surah.verses} />

  </div>
</div>
  );
}