"use client";

import { useState } from "react";
import AyahList from "@/components/ayah/AyahList";
import SurahHero from "@/components/ayah/SurahHero";
 

import { useGetSingleSurah } from "@/store/hooks/surahs.hook";
import { useParams } from "next/navigation";
import Pagination from "@/components/ayah/Pagination";
import SearchBar from "@/components/layout/SearchBar";
import SurahHeroSkeleton from "@/components/ayah/SurahHeroSkeleton";
import { AyahListSkeleton } from "@/components/ayah/AyahListSkeleton";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  const [page, setPage] = useState(1);
  const limit = 10;

  const { surah, isLoading, isFetching, isError } =
    useGetSingleSurah(id, page, limit);

  return (
    <div className="text-white">
      <SearchBar />

      <div className="px-4 py-6 sm:px-6 space-y-6">

        {/* 🔥 HERO */}
        {isLoading ? (
          <SurahHeroSkeleton />
        ) : isError || !surah ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center shadow-md">
            <p className="text-red-400 font-semibold text-lg">
              Failed to load Surah
            </p>
            <p className="text-white/60 text-sm mt-1">
              Please try again later or check your connection.
            </p>
          </div>
        ) : (
          <SurahHero surah={surah} />
        )}

        {/* 🔥 AYAH LIST */}
        {isLoading ? (
          <AyahListSkeleton />
        ) : isError || !surah ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center shadow-md">
            <p className="text-red-400 font-semibold text-lg">
              Failed to load verses
            </p>
            <p className="text-white/60 text-sm mt-1">
              Please refresh the page or try again later.
            </p>
          </div>
        ) : (
          <AyahList verses={surah.verses} />
        )}

        {/* 🔥 PAGINATION */}
        {!isLoading && !isError && surah && (
          <Pagination
            currentPage={page}
            totalPages={surah.meta?.totalPages || 1}
            onPageChange={setPage}
            isFetching={isFetching}
          />
        )}
      </div>
    </div>
  );
}