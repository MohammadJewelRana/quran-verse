"use client";

import { Drawer, DrawerContent, DrawerBody } from "@heroui/react";
import { FiBookOpen, FiHeart, FiBookmark, FiInfo } from "react-icons/fi";

export default function MobileSidebar({ open, setOpen }: any) {
  return (
    <Drawer
      isOpen={open}
      onOpenChange={setOpen}
      placement="left"
      backdrop="blur"
      className="z-[99999]"
    >
      <DrawerContent className="bg-[#09111F] text-white border-r border-white/10 w-72 max-w-[85vw]">
        {(onClose) => (
          <DrawerBody className="p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-emerald-400">القُرْآن</h2>
              <p className="text-xs text-white/50 mt-1">Sacred Reading</p>
            </div>

            <div className="space-y-2">
              <button onClick={onClose} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                <FiBookOpen /> Read
              </button>
              <button onClick={onClose} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5">
                <FiHeart /> Favorites
              </button>
              <button onClick={onClose} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5">
                <FiBookmark /> Bookmarks
              </button>
              <button onClick={onClose} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5">
                <FiInfo /> About
              </button>
            </div>
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
}