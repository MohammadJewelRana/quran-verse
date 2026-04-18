"use client";

import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import type { Surah } from "@/lib/storage";

type Props = {
  surah: Surah;
  onRemove: (id: number) => void;
};

const BookmarkFavoriteCard=({ surah, onRemove }: Props)=> {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0D1626] to-[#08111F] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-sm font-semibold text-emerald-400">
            {surah.id}
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{surah.name}</h3>
            <p className="text-xs text-white/50">{surah.transliteration}</p>
          </div>
        </div>

        <button
          onClick={() => onRemove(surah.id)}
          className="cursor-pointer text-white/40 transition hover:text-rose-400"
          aria-label="Remove item"
          title="Remove"
          type="button"
        >
          <FiTrash2 />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-white/55">
        <span>{surah.total_verses} verses</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 capitalize text-white/70">
          {surah.type}
        </span>
      </div>

      <Link href={`/surah/${surah.id}`} className="mt-4 block">
        <div className="w-full rounded-xl bg-white/5 py-2 text-center text-sm text-white transition hover:bg-white/10">
          Open Surah
        </div>
      </Link>
    </div>
  );
}

export default BookmarkFavoriteCard;