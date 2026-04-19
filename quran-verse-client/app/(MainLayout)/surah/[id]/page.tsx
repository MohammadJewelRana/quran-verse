"use client";

import { useState } from "react";
import AyahList from "@/components/ayah/AyahList";
import SurahHero from "@/components/ayah/SurahHero";

import { useGetSingleSurah } from "@/store/hooks/surahs.hook";
import { useParams } from "next/navigation";
import Pagination from "@/components/ayah/Pagination";
import SearchBar from "@/components/layout/SearchBar";
import { FiSearch } from "react-icons/fi";
import { Input } from "@heroui/input";

export default function SurahPage() {
  const params = useParams();
  const id = params?.id as string;

  const [page, setPage] = useState(1);
  const limit = 10;

  const { surah, isLoading, isFetching, isError } = useGetSingleSurah(
    id,
    page,
    limit,
  );

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
    <div className="  text-white">
      <SearchBar />

      <div className="  px-4 py-6 sm:px-6">
        <div className="mb-6">
          <SurahHero surah={surah} />
        </div>

        <AyahList verses={surah.verses} />

        <Pagination
          currentPage={page}
          totalPages={surah.meta?.totalPages || 1}
          onPageChange={setPage}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}
