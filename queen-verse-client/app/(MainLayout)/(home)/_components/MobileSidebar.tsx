"use client";

import { Drawer } from "@heroui/react";
import { FiBookOpen, FiHeart, FiBookmark, FiInfo } from "react-icons/fi";

export default function MobileSidebar({ open, setOpen }: any) {
  const items = [
    { label: "Read", icon: <FiBookOpen /> },
    { label: "Favorites", icon: <FiHeart /> },
    { label: "Bookmarks", icon: <FiBookmark /> },
    { label: "About", icon: <FiInfo /> },
  ];

  return (
    <Drawer
      isOpen={open}
      onClose={() => setOpen(false)}
      placement="left"
      size="xs"
      backdrop="blur"
      className="z-[9999]"
    >
      <div className="h-full w-72 bg-[#09111F] text-white p-4 flex flex-col border-r border-white/10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">القُرْآن</h2>
          <p className="text-xs text-white/50 mt-1">Sacred Reading</p>
        </div>

        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </Drawer>
  );
}