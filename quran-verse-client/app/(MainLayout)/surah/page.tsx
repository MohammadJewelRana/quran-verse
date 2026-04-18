"use client";

import { useState, useMemo } from "react";
import { Pagination } from "@heroui/react";

import { useGetAllSurahs } from "@/store/hooks/surahs.hook";
import SurahCard from "@/components/surahs/SurahCard";
import EmptyCard from "@/components/surahs/EmptyCard";
import SurahCardSkeleton from "@/components/surahs/SurahsCardSkeleton";

const LIMIT = 20;

export default function Page() {
  const [page, setPage] = useState(1);

  const { surahs, meta, isLoading, isError } = useGetAllSurahs(page, LIMIT);

  // ✅ memoized values
  const totalPages = meta?.totalPages ?? 1;
  const totalSurahs = meta?.total ?? 114;

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: LIMIT }).map((_, i) => (
            <SurahCardSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (isError) {
      return <EmptyCard message="Something went wrong. Please try again." />;
    }

    if (!surahs?.length) {
      return <EmptyCard message="No surahs found." />;
    }

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {surahs.map((surah: any) => (
            <SurahCard key={surah._id || surah.id} surah={surah} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex justify-end">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <Pagination
                  total={totalPages}
                  page={page}
                  onChange={setPage}
                  showControls
                  isCompact
                  classNames={{
                    wrapper: "gap-1",
                    item: "text-white/70 data-[hover=true]:bg-emerald-500/10 data-[active=true]:bg-emerald-500 data-[active=true]:text-black",
                    cursor: "bg-emerald-500 text-black",
                  }}
                />
              </div>
            </div>

            <p className="text-right text-xs text-white/40">
              Page {meta?.page ?? 1} of {totalPages} • {totalSurahs} surahs
            </p>
          </div>
        )}
      </>
    );
  }, [isLoading, isError, surahs, totalPages, page, meta, totalSurahs]);

  return (
    <div className="text-white">
      <div className="md:px-4 md:py-8 space-y-8">
        {/* HERO */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D1626] via-[#09111F] to-[#050A14] p-5 sm:p-6 lg:p-8">
          <p className="text-xs uppercase tracking-wider text-emerald-400">
            Surahs
          </p>

          <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Explore all surahs
          </h1>

          <p className="mt-2 text-sm text-white/60 max-w-xl">
            Browse and continue your reading in a clean and focused way.
          </p>
        </section>

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold">All Surahs</h2>
          <span className="text-xs text-white/40">{totalSurahs} total</span>
        </div>

        {/* CONTENT */}
        {content}
      </div>
    </div>
  );
}
