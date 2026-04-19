"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@heroui/input";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "@/store/hooks/useDebounce";
import { useSearchAyah } from "@/store/hooks/surahs.hook";
import { useRouter } from "next/navigation";

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

const SearchBar = ({ surahId }: { surahId?: number } = {}) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 300);

  const { results, isLoading, isError } = useSearchAyah(
    debouncedSearch,
    surahId
  );

  const hasUserInput = searchTerm.trim().length > 0;

  const visibleResults = useMemo(() => {
    if (!results.length) return [];
    return results.slice(0, 10);
  }, [results]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (surahId: number, ayahId: number) => {
    setIsOpen(false);
    router.push(
      `/search?q=${encodeURIComponent(searchTerm)}&surahId=${surahId}&ayahId=${ayahId}`
    );
  };

  return (
    <>
      {/* 🔥 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔍 Search */}
      <div className="px-4 py-3 relative z-50">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400/70 text-base" />

            <Input
              value={searchTerm}
              onChange={handleChange}
              onFocus={() => setIsOpen(true)}
              placeholder="Search ayah..."
              className="pl-11"
              classNames={{
                inputWrapper:
                  "bg-[#0B1220] border border-emerald-500/20 hover:border-emerald-500/40 focus-within:!border-emerald-500/60 rounded-xl h-12 shadow-lg",
                input: "text-white text-sm placeholder:text-white/40",
              }}
            />

            {/* 🔥 DROPDOWN */}
            {isOpen && hasUserInput && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-[#0B1220] border border-emerald-500/20 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50 animate-fadeIn">
                
                {/* 🔥 SEARCHING STATE (IMPORTANT FIX) */}
                {isLoading && (
                  <div className="p-4 text-center text-emerald-300 text-sm">
                    Searching...
                  </div>
                )}

                {/* ❌ ERROR */}
                {isError && !isLoading && (
                  <div className="p-4 text-center text-red-400 text-sm">
                    Search failed
                  </div>
                )}

                {/* ❗ NO RESULT (ONLY AFTER LOADING DONE) */}
                {!isLoading &&
                  !isError &&
                  debouncedSearch &&
                  results.length === 0 && (
                    <div className="p-4 text-center text-white/50 text-sm">
                      No results found
                    </div>
                  )}

                {/* ✅ RESULTS (PREMIUM DESIGN BACK) */}
                {!isLoading &&
                  visibleResults.map((surah: SurahResultType) =>
                    surah.verses.map((ayah) => (
                      <div
                        key={`${surah.surahId}-${ayah.ayahId}`}
                        onClick={() =>
                          handleSelect(surah.surahId, ayah.ayahId)
                        }
                        className="group px-4 py-3 cursor-pointer border-b border-white/5 hover:bg-emerald-900/10 transition"
                      >
                        {/* Header */}
                        <div className="text-emerald-400 text-xs font-medium mb-1">
                          {surah.surahName} ({surah.surahId}:{ayah.ayahId})
                        </div>

                        {/* Arabic */}
                        <div
                          className="text-white text-base leading-relaxed mb-1"
                          dir="rtl"
                        >
                          {ayah.text}
                        </div>

                        {/* Translation */}
                        <div className="text-white/70 text-sm line-clamp-2">
                          {ayah.preview}
                        </div>

                        {/* Hover */}
                        <div className="text-xs text-white/40 mt-1 opacity-0 group-hover:opacity-100 transition">
                          Click to view →
                        </div>
                      </div>
                    ))
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;