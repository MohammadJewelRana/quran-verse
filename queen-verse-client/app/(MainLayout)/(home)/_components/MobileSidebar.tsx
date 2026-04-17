import { Drawer } from "@heroui/react";

export default function MobileSidebar({ open, setOpen }: any) {
  return (
    <Drawer isOpen={open} onClose={() => setOpen(false)} placement="left">
      <div className="w-64 h-full bg-[#020617] text-white">

        <div className="p-4 text-green-400 font-bold text-xl">
          القُرْآن
        </div>

        <div className="px-3 space-y-2">
          <div className="bg-green-400 text-black px-4 py-2 rounded-lg">
            Read
          </div>
          <div className="px-4 py-2 text-gray-400">Favorites</div>
          <div className="px-4 py-2 text-gray-400">Bookmarks</div>
        </div>

      </div>
    </Drawer>
  );
}