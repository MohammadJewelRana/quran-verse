"use client";

import { Input } from "@heroui/react";
import { FiSearch, FiSettings, FiBell, FiMenu } from "react-icons/fi";
import { useState } from "react";
import SettingsDrawer from "./SettingsDrawer";
import Image from "next/image";
import img from "@/assets/logo/logo.jpg";

const Header = ({ onMenuClick }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 overflow-hidden">
        {/* 🔥 TOP BAR */}
        <div className="bg-gradient-to-r from-[#06111F] via-[#0F766E] to-[#020617] px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">
              {/* 📱 Mobile: Logo + Name */}
              <div className="flex items-center gap-2 md:hidden">
                <Image
                  src={img}
                  alt="QuranVerse Logo"
                  width={26}
                  height={26}
                  className="rounded-md object-cover"
                  priority
                />
                <span className="text-sm font-semibold text-emerald-300 truncate">
                  QuranVerse
                </span>
              </div>

              {/* 💻 Desktop: Arabic */}
              <h2
                className="hidden md:block text-lg sm:text-xl font-semibold text-emerald-300 truncate"
                dir="rtl"
              >
                بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* 🔔 Bell */}

              <button className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition">
                <FiBell size={16} />
              </button>

              {/* ⚙️ Settings */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <FiSettings size={16} />
              </button>

              {/* 📱 Hamburger (mobile only) */}
              <button
                onClick={onMenuClick}
                className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition"
              >
                <FiMenu size={16} />
              </button>
            </div>
          </div>
        </div>

 



      </header>

      {/* ⚙️ SETTINGS DRAWER */}
      <SettingsDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
