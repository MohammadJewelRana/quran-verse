import { Input } from "@heroui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      {/* 🔍 SEARCH BAR */}
      <div className="bg-gradient-to-r from-[#06111F] via-[#0F172A] to-[#02061736] px-4 md:px-6 py-2.5  ">
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
    </div>
  );
};

export default SearchBar;
