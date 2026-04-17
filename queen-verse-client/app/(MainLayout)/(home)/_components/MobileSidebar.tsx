"use client";

import { Drawer } from "@heroui/react";

export default function MobileSidebar({ open, setOpen }: any) {
  return (
    <Drawer
      isOpen={open}
      onClose={() => setOpen(false)}
      placement="left"
      className="z-50"
    >
      <div className="w-64 h-full bg-[#020617] text-white p-4">

        <h2 className="text-green-400 font-bold text-xl mb-4">
          القُرْآن
        </h2>

        <div className="space-y-2">
          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
            Read
          </div>
          <div className="px-4 py-2 text-gray-400">Favorites</div>
          <div className="px-4 py-2 text-gray-400">Bookmarks</div>
        </div>

      </div>
    </Drawer>
  );
}