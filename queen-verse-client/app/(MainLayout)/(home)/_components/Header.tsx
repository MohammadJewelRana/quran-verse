"use client";

import { Input } from "@heroui/react";
import { FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { MdOutlineVolumeUp } from "react-icons/md";
import { useState } from "react";
import SettingsDrawer from "./SettingsDrawer";

export default function Header({ onMenuClick }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-white/10 bg-[#0E1628]/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onMenuClick}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10"
            >
              <FiMenu size={20} />
            </button>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold truncate">
                Quran Reader
              </h2>
              <p className="text-xs sm:text-sm text-white/50 truncate">
                Sacred reading
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <MdOutlineVolumeUp size={18} />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition"
            >
              <FiSettings size={18} />
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="relative max-w-2xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <Input
              placeholder="Search surahs..."
              className="pl-11"
              classNames={{
                inputWrapper:
                  "bg-white/5 border border-white/10 hover:border-emerald-500/40 focus-within:!border-emerald-500/60 rounded-xl h-12 shadow-none",
                input: "text-white placeholder:text-white/40",
              }}
            />
          </div>
        </div>
      </header>

      <SettingsDrawer open={open} setOpen={setOpen} />
    </>
  );
}
