"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ContinueReading = {
  surahId: number;
  ayahNumber?: number;
  surahName: string;
  transliteration?: string;
};

const ContinueSection = () => {
  const [lastRead, setLastRead] = useState<ContinueReading | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("continue-reading");
      if (raw) setLastRead(JSON.parse(raw));
    } catch {
      setLastRead(null);
    }
  }, []);

  return (
    <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-[#0B1220] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] lg:p-6">
      <p className="text-sm font-medium text-emerald-400">Continue Reading</p>

      <h1 className="mt-2 text-lg font-bold text-white md:text-xl lg:text-2xl">
        Welcome Back
      </h1>

      <p className="mt-1 text-sm text-white/60">Continue your last session.</p>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        {lastRead ? (
          <div>
            <p className="text-sm font-medium text-white">
              Surah {lastRead.surahName}
            </p>
            <p className="mt-1 text-xs text-white/50">
              {lastRead.transliteration}
              {lastRead.ayahNumber ? ` • Ayah ${lastRead.ayahNumber}` : ""}
            </p>
          </div>
        ) : (
          <p className="text-sm text-white/50">No reading history yet.</p>
        )}
      </div>

      <div className="mt-4">
        <Link
          href={lastRead ? `/surah/${lastRead.surahId}` : "/"}
          className="inline-flex rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-black transition hover:brightness-110"
        >
          {lastRead ? "Start Reading" : "Start Reading"}
        </Link>
      </div>
    </section>
  );
};

export default ContinueSection;
