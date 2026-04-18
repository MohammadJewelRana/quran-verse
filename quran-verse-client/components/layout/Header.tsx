"use client";

import { Input } from "@heroui/react";
import { FiSearch, FiSettings, FiBell, FiMenu } from "react-icons/fi";
import { useState } from "react";
import SettingsDrawer from "./SettingsDrawer";

const Header = ({ onMenuClick }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 overflow-hidden">
        <div className="bg-gradient-to-r from-[#06111F] via-[#0F766E] to-[#020617] px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onMenuClick}
                className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition"
              >
                <FiMenu size={16} />
              </button>

              <h2 className="block md:hidden text-base font-semibold text-emerald-300 truncate">
                QuranVerse
              </h2>

              <h2
                className="hidden md:block text-lg sm:text-xl font-semibold text-emerald-300 truncate"
                dir="rtl"
              >
                بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </h2>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition">
                <FiBell size={16} />
              </button>

              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <FiSettings size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#06111F] via-[#0F172A] to-[#020617] border-b border-white/10 px-4 md:px-6 py-2.5">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400/70 pointer-events-none text-sm" />
              <Input
                placeholder="Search ayah..."
                className="pl-9"
                classNames={{
                  inputWrapper:
                    "bg-[#0B1220] border border-emerald-500/15 hover:border-emerald-500/35 focus-within:!border-emerald-500/55 rounded-lg h-10 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]",
                  input: "text-white text-sm placeholder:text-white/35",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <SettingsDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
