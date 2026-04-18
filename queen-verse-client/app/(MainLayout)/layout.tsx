"use client";

import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import MobileSidebar from "../../components/layout/MobileSidebar";
import Header from "../../components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#0B1220] text-white flex">
      <aside className="hidden md:block w-56 lg:w-64 xl:w-72 shrink-0 border-r border-white/10 bg-[#09111F]">
        <Sidebar />
      </aside>

      <MobileSidebar open={open} setOpen={setOpen} />

      <div className="flex-1 min-w-0 min-h-0 flex flex-col">
        <Header onMenuClick={() => setOpen(true)} />

        <main className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5">
          {children}
        </main>
      </div>
    </div>
  );
}