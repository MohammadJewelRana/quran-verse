"use client";

import { Input } from "@heroui/react";
import { FiSearch, FiSettings, FiMenu } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import SettingsDrawer from "./SettingsDrawer";

export default function Header({ onMenuClick }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-[var(--color-border)] bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#020617]">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg bg-[#0F172A]"
          >
            <FiMenu size={20} />
          </button>

          <h2 className="text-lg md:text-xl font-semibold">
            Quran Reader
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">

          <button className="p-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B]">
            <MdDarkMode size={18} />
          </button>

          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B]"
          >
            <FiSettings size={18} />
          </button>
        </div>
      </div>

      {/* ✅ SEARCH BELOW HEADER */}
      <div className="px-4 md:px-6 py-3 border-b border-[var(--color-border)] bg-[#020617]">
        <div className="relative max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search ayah..."
            className="pl-10"
          />
        </div>
      </div>

      <SettingsDrawer open={open} setOpen={setOpen} />
    </>
  );
}