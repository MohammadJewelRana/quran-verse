import { Input } from "@heroui/react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full gap-4">

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold">
        Quran Reader
      </h2>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <Input
          placeholder="Search ayah..."
          className="pl-10"
          classNames={{
            inputWrapper: "bg-[#0F172A]",
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg bg-[#0F172A]">
          <MdDarkMode size={18} />
        </button>

        <button className="p-2 rounded-lg bg-[#0F172A]">
          <FiSettings size={18} />
        </button>
      </div>
    </div>
  );
}