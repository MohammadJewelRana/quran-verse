"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileSidebar from "./(home)/_components/MobileSidebar";
import Sidebar from "./(home)/_components/Sidebar";
import Header from "./(home)/_components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">

      {/* ✅ Sidebar (NO GAP FIX) */}
      <aside className="hidden md:block w-64 shrink-0 border-r border-[var(--color-border)] bg-[#020617]">
        <Sidebar />
      </aside>

      {/* ✅ Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} />

      {/* ✅ Main Area */}
      <div className="flex flex-col flex-1 w-full">

        {/* ✅ Header */}
        <Header onMenuClick={() => setOpen(true)} />

        {/* ✅ Page Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
          {children}
        </main>

      </div>
    </div>
  );
}