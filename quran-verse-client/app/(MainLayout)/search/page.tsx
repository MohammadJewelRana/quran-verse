"use client";

import { useSearchParams } from "next/navigation";
import { useSearchAyah } from "@/store/hooks/surahs.hook";
import SearchBar from "@/components/layout/SearchBar";
import SearchResults from "@/components/search/SearchResults";

const page=()=> {
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";
  const surahId = searchParams.get("surahId");
  const ayahId = searchParams.get("ayahId");

  const { results, isLoading, isError } = useSearchAyah(q);

  const totalCount = results.reduce((acc: number, s: typeof results[number]) => acc + s.verses.length, 0);

  return (
    <div className="text-white">
      <SearchBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-emerald-300 text-lg font-semibold">
            Search results for "{q}"
          </h2>

          {!isLoading && !isError && (
            <p className="text-white/50 text-sm mt-1">
              {totalCount} results found
            </p>
          )}
        </div>

        {/* Content */}
        <div className="bg-[#06111F] rounded-xl border border-emerald-900/20">
          {/* Loading */}
          {isLoading && (
            <div className="p-6 text-center text-emerald-300">
              Searching verses...
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="p-6 text-center text-red-400">
              Failed to load results
            </div>
          )}

          {/* No result */}
          {!isLoading && results.length === 0 && (
            <div className="p-6 text-center text-white/50">No verses found</div>
          )}

          {/* Results */}
          {!isLoading && results.length > 0 && (
            <SearchResults
              results={results}
              highlightedAyah={{
                surahId: surahId ? Number(surahId) : undefined,
                ayahId: ayahId ? Number(ayahId) : undefined,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}


export default  page;