// components/layout/SearchBar.tsx
import React, { useState, useMemo } from "react";
import { Input } from "@heroui/input";
import { FiSearch } from "react-icons/fi";
import { useDebounce } from "@/store/hooks/useDebounce";
import { useSearchAyah } from "@/store/hooks/surahs.hook";
 

const AyahSuggestionItem = ({
  ayah,
  surahName,
}: {
  ayah: { number: number; translation: string };
  surahName: string;
}) => (
  <div
    className="px-3 py-2 cursor-pointer hover:bg-emerald-900/20 text-sm leading-none"
    onClick={() => {
      // eventually link to ayah or search page
    }}
  >
    <div className="font-medium text-emerald-300">
      {surahName} - আয়াত: {ayah.number}
    </div>
    <div className="text-white/80 line-clamp-1">{ayah.translation}</div>
  </div>
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const { results, isLoading } = useSearchAyah(debouncedSearch);

  const filteredResults = useMemo(() => {
    if (!debouncedSearch.trim()) return [];
    return results.slice(0, 15); // only show 15 suggestions max
  }, [results, debouncedSearch]);

  const hasSuggestions = filteredResults.length > 0 || isLoading;

  return (
    <div>
      <div className="bg-gradient-to-r from-[#06111F] via-[#0F172A] to-[#02061736] px-4 md:px-6 py-2.5">
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400/70 pointer-events-none text-sm" />

            <Input
              placeholder="Search ayah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
              classNames={{
                inputWrapper:
                  "bg-[#0B1220] border border-emerald-500/15 hover:border-emerald-500/35 focus-within:!border-emerald-500/55 rounded-lg h-10 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]",
                input: "text-white text-sm placeholder:text-white/35",
              }}
            />

            {hasSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#06111F] border border-emerald-500/15 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {isLoading ? (
                  <div className="px-3 py-2 text-center text-emerald-300 text-sm">
                    Searching...
                  </div>
                ) : (
                  filteredResults.map((surahResult) =>
                    surahResult.verses.map((ayah: any) => (
                      <AyahSuggestionItem
                        key={`${surahResult.surahId}-${ayah.number}`}
                        ayah={ayah}
                        surahName={surahResult.surahName}
                      />
                    ))
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;