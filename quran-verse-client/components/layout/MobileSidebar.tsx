"use client";

import { Drawer, DrawerContent, DrawerBody } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBookOpen,
  FiHeart,
  FiBookmark,
  FiInfo,
  FiHome,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileSidebar = ({ open, setOpen }: Props) => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: <FiHome /> },
    { label: "Surahs", href: "/surah", icon: <FiBookOpen /> },

    { label: "Favorites", href: "/favorites", icon: <FiHeart /> },
    { label: "Bookmarks", href: "/bookmarks", icon: <FiBookmark /> },
    { label: "Settings", href: "/settings", icon: <FiSettings /> },
    { label: "About", href: "/about", icon: <FiInfo /> },
  ];

  return (
    <Drawer
      isOpen={open}
      onOpenChange={setOpen}
      placement="left"
      backdrop="blur"
      className="z-[99999]"
    >
      <DrawerContent className="w-72 max-w-[85vw] border-r border-white/10 bg-[#09111F] text-white">
        {(onClose) => (
          <DrawerBody className="p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-emerald-400">القُرْآن</h2>
              <p className="mt-1 text-xs text-white/50">Sacred Reading</p>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                      active
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSidebar;
