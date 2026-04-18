"use client";

import clsx from "clsx";
import {
  FiHeart,
  FiBookmark,
  FiInfo,
  FiHome,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

const Item = ({ label, icon, active = false }: any) => {
  return (
    <button
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition border",
        active
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]"
          : "text-white/65 border-transparent hover:bg-white/5 hover:text-white hover:border-white/10"
      )}
    >
      <span className="text-base shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
};

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col p-4 bg-gradient-to-b from-[#08111F] via-[#091320] to-[#020617]">
      <div className="shrink-0 mb-5 pt-2 px-1">
        <h2 className="text-2xl font-bold text-emerald-400">QuranVerse</h2>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/35 mt-2">
          آية
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 pt-2">
        <Item label="Home" active icon={<FiHome />} />
        <Item label="Search" icon={<FiSearch />} />
        <Item label="Bookmarks" icon={<FiBookmark />} />
        <Item label="Favorites" icon={<FiHeart />} />
        <Item label="Settings" icon={<FiSettings />} />
        <Item label="About" icon={<FiInfo />} />
      </div>

      <div className="shrink-0 mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-3 py-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#020617]" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white truncate">User</p>
            <p className="text-xs text-white/40 truncate">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;