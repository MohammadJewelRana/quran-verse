"use client";

import { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
 
import { getBookmarks, removeBookmark, type Surah } from "@/lib/storage";
import { BookmarkCard } from "@/components/bookmarks/BookmarkCard";
import toast from "react-hot-toast";

export default function Page() {
  const [bookmarks, setBookmarks] = useState<Surah[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBookmarks(getBookmarks());
    setReady(true);

    const onStorage = () => {
      setBookmarks(getBookmarks());
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleRemove = (id: number) => {
    const next = bookmarks.filter((item) => item.id !== id);
    setBookmarks(next);
    removeBookmark(id);
    toast.success("Removed from bookmarks");
  };

  return (
    <div className="  text-white">
      <div className="md:px-4 md:py-8">
        <div className="mb-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1626] via-[#09111F] to-[#050A14] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center gap-2 text-emerald-400">
            <FiBookmark />
            <span className="text-xs font-medium uppercase tracking-[0.24em]">
              Bookmarks
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
            Your saved surahs
          </h1>
          <p className="mt-2 text-sm text-white/55">
            All bookmarked surahs appear here for quick access anytime.
          </p>
        </div>

        {!ready ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-36 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        ) : bookmarks.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg font-semibold text-white">No bookmarks yet</p>
            <p className="mt-2 text-sm text-white/50">
              Save a surah from the home screen to see it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {bookmarks.map((surah) => (
              <BookmarkCard key={surah.id} surah={surah} onRemove={handleRemove} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}