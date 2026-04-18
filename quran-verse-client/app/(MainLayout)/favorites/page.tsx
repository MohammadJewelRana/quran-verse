"use client";

import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

import { getFavorites, removeFavorite, type Surah } from "@/lib/storage";
 
import toast from "react-hot-toast";
import BookmarkFavoriteCard from "@/components/bookmark-favorite/BookmarkFavoriteCard";

const  page=() =>{
  const [favorites, setFavorites] = useState<Surah[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setFavorites(getFavorites());
    setReady(true);

    const onStorage = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleRemove = (id: number) => {
    const next = favorites.filter((item) => item.id !== id);
    setFavorites(next);
    removeFavorite(id);
    toast.success("Removed from favorites");
  };

  return (
    <div className="min-h-screen text-white">
      <div className="md:px-4 md:py-8">
        <div className="mb-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1626] via-[#09111F] to-[#050A14] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center gap-2 text-rose-400">
            <FiHeart />
            <span className="text-xs font-medium uppercase tracking-[0.24em]">
              Favorites
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
            Your favorite surahs
          </h1>
          <p className="mt-2 text-sm text-white/55">
            Quick access to the surahs you love most.
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
        ) : favorites.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg font-semibold text-white">No favorites yet</p>
            <p className="mt-2 text-sm text-white/50">
              Tap the heart icon on any surah to add it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {favorites.map((surah) => (
              <BookmarkFavoriteCard
                key={surah.id}
                surah={surah}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default page;