"use client";

import { useGetAllSurahs } from "@/store/hooks/surahs.hook";
import ContinueSection from "./_components/ContinueSection";
import SurahCard from "./_components/SurahCard";

export default function Page() {
  const { surahs, isLoading } = useGetAllSurahs();
  console.log(surahs);

  return (
    <div className="space-y-8">
      {/* ✅ Top Section */}
      <ContinueSection />

      {/* ✅ Header */}
      <section className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">Surahs</h2>
        <button className="text-emerald-400 text-sm">View All</button>
      </section>

      {/* ✅ Loading */}
      {isLoading && <p className="text-white/50">Loading...</p>}

      {/* ✅ Surah Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {surahs?.map((surah: any) => (
          <SurahCard key={surah._id || surah.id} surah={surah} />
        ))}
      </section>
    </div>
  );
}
