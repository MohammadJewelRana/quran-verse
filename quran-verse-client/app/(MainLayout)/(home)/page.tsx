"use client";

import { useState } from "react";
import { Pagination } from "@heroui/react";
import { useGetAllSurahs } from "@/store/hooks/surahs.hook";
import ContinueSection from "./_components/ContinueSection";
import SurahCard from "../../../components/surahs/SurahCard";
import EmptyCard from "@/components/surahs/EmptyCard";
import SurahCardSkeleton from "@/components/surahs/SurahsCardSkeleton";
import Link from "next/link";
 

const page = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { surahs, meta, isLoading, isError } = useGetAllSurahs(page, limit);

  const totalPages = meta?.totalPages ?? 1;
  const totalSurahs = meta?.total ?? 114;
  const hasData = (surahs?.length ?? 0) > 0;

  return (
    <div className="space-y-8">
      <ContinueSection />

      {/* <SearchBar/> */}
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Surahs
          </h2>
          <span className="text-xs text-white/40 sm:text-sm">
            {totalSurahs} total surahs
          </span>
        </div>

        <Link
          href="/surah"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
        >
          View All Surahs
        </Link>
      </section>

      {isLoading ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: limit }).map((_, index) => (
            <SurahCardSkeleton key={index} />
          ))}
        </section>
      ) : isError ? (
        <EmptyCard message="Something went wrong. Please try again." />
      ) : !hasData ? (
        <EmptyCard message="No surahs found." />
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {surahs.map((surah: any) => (
              <SurahCard key={surah._id || surah.id} surah={surah} />
            ))}
          </section>

          {totalPages > 1 && (
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex justify-end">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <Pagination
                    total={totalPages}
                    page={page}
                    onChange={setPage}
                    showControls
                    showShadow={false}
                    size="md"
                    isCompact
                    classNames={{
                      wrapper: "gap-1",
                      item: "bg-transparent text-white/70 data-[hover=true]:bg-emerald-500/10 data-[hover=true]:text-emerald-300 data-[active=true]:bg-emerald-500 data-[active=true]:text-black transition-colors duration-200",
                      cursor:
                        "bg-emerald-500 text-black font-semibold shadow-none",
                      next: "text-white/70 data-[hover=true]:bg-emerald-500/10 data-[hover=true]:text-emerald-300",
                      prev: "text-white/70 data-[hover=true]:bg-emerald-500/10 data-[hover=true]:text-emerald-300",
                      chevronNext: "text-current",
                      forwardIcon: "text-current",
                    }}
                  />
                </div>
              </div>

              <p className="text-xs text-white/40 text-right">
                Page {meta?.page ?? 1} of {totalPages} • {totalSurahs} surahs
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default page;
