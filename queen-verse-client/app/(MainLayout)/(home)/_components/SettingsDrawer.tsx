"use client";

import { Drawer } from "@heroui/react";

export default function SettingsDrawer({ open, setOpen }: any) {
  return (
    <Drawer
      isOpen={open}
      onClose={() => setOpen(false)}
      placement="right"
      className="z-50"
    >
      <div className="w-72 h-full bg-[#020617] text-white p-5 space-y-5">

        <h2 className="text-lg font-semibold">Settings</h2>

        {/* Font */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Arabic Font</p>
          <select className="w-full p-2 bg-[#0F172A] rounded-lg">
            <option>Amiri</option>
            <option>Noto</option>
          </select>
        </div>

        {/* Arabic Size */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Arabic Size</p>
          <input type="range" className="w-full" />
        </div>

        {/* Translation */}
        <div>
          <p className="text-sm text-gray-400 mb-2">
            Translation Size
          </p>
          <input type="range" className="w-full" />
        </div>

      </div>
    </Drawer>
  );
}