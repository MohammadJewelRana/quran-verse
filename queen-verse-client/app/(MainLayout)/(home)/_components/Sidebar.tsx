"use client";

import clsx from "clsx";
import {
  FiBookOpen,
  FiHeart,
  FiBookmark,
  FiInfo,
  FiHome,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

function Item({ label, icon, active = false }: any) {
  return (
    <button
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition",
        active
          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
          : "text-white/60 hover:bg-white/5 hover:text-white"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="shrink-0 mb-6">
        <h2 className="text-2xl font-bold text-emerald-400">Qur'an</h2>
        <p className="text-xs text-white/40 mt-1">Sacred Reading</p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2">
        <Item label="Home" active icon={<FiHome />} />
        <Item label="Search" icon={<FiSearch />} />
        <Item label="Bookmarks" icon={<FiBookmark />} />
        <Item label="Favorites" icon={<FiHeart />} />
        <Item label="Settings" icon={<FiSettings />} />
        <Item label="About" icon={<FiInfo />} />
 
      </div>

      <div className="shrink-0 mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500" />
        <div>
          <p className="text-sm font-medium">User</p>
          <p className="text-xs text-white/40">Profile</p>
        </div>
      </div>
    </div>
  );
}