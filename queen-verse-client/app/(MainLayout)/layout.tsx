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
    <div className="flex h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)] overflow-hidden">
      
      {/* ✅ Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-[var(--color-border)]">
        <Sidebar />
      </aside>

      {/* ✅ Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} />

      {/* ✅ Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-gradient-to-r from-[#0F172A] to-[#020617]">
          
          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-[var(--color-bg-card)]"
          >
            <FiMenu size={20} />
          </button>

          <Header />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {children}
        </div>

      </div>
    </div>
  );
}