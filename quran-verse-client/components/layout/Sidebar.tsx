"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHeart,
  FiBookmark,
  FiInfo,
  FiHome,
  FiSearch,
  FiSettings,
  FiBookOpen,
} from "react-icons/fi";
import img from "@/assets/logo/logo.jpg";
import Image from "next/image";

const Item = ({ label, icon, href, active = false }: any) => {
  return (
    <Link
      href={href}
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition border",
        active
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]"
          : "text-white/65 border-transparent hover:bg-white/5 hover:text-white hover:border-white/10",
      )}
    >
      <span className="text-base shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col p-4 bg-gradient-to-b from-[#08111F] via-[#091320] to-[#020617]">
    
 <div className="shrink-0 mb-5 pt-2 px-1 flex items-center gap-3">
  
  {/* Logo Image */}
  <Image
    src={img}
    alt="QuranVerse Logo"
    width={36}
    height={36}
    className="rounded-lg object-cover"
    priority
  />

  {/* Text */}
  <div>
    <h2 className="text-lg font-bold text-emerald-400 leading-tight">
      QuranVerse
    </h2>
    <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
      آية
    </p>
  </div>

</div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 pt-2">
        <Item
          label="Home"
          href="/"
          active={pathname === "/"}
          icon={<FiHome />}
        />

        <Item
          label="Surahs"
          href="/surah"
          active={pathname === "/surah"}
          icon={<FiBookOpen />}
        />

        <Item
          label="Search"
          href="/search"
          active={pathname === "/search"}
          icon={<FiBookOpen />}
        />
        <Item
          label="Bookmarks"
          href="/bookmarks"
          active={pathname === "/bookmarks"}
          icon={<FiBookmark />}
        />
        <Item
          label="Favorites"
          href="/favorites"
          active={pathname === "/favorites"}
          icon={<FiHeart />}
        />
        <Item
          label="Settings"
          href="/settings"
          active={pathname === "/settings"}
          icon={<FiSettings />}
        />
        <Item
          label="About"
          href="/about"
          active={pathname === "/about"}
          icon={<FiInfo />}
        />
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
