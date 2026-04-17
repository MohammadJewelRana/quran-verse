import clsx from "clsx";
import {
  FiBookOpen,
  FiHeart,
  FiBookmark,
  FiInfo,
} from "react-icons/fi";

function Item({ label, icon, active = false }: any) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-sm transition",
        active
          ? "bg-[#22C55E]/20 text-[#22C55E]"
          : "text-gray-400 hover:bg-[#0F172A]"
      )}
    >
      {icon}
      {label}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">

      {/* LOGO */}
      <div className="p-4 text-[#22C55E] font-bold text-xl">
        القُرْآن
      </div>

      {/* MENU */}
      <div className="px-3 space-y-2">
        <Item label="Read" active icon={<FiBookOpen />} />
        <Item label="Favorites" icon={<FiHeart />} />
        <Item label="Bookmarks" icon={<FiBookmark />} />
        <Item label="About" icon={<FiInfo />} />
      </div>

      {/* SURAH LIST */}
      <div className="flex-1 overflow-y-auto mt-4 px-2 space-y-2">
        {Array.from({ length: 114 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 rounded-xl hover:bg-[#0F172A] cursor-pointer transition"
          >
            <div>
              <p className="text-sm font-medium">
                Al-Fatihah
              </p>
              <p className="text-xs text-gray-500">
                7 verses
              </p>
            </div>

            <span className="text-xs bg-[#0F172A] px-2 py-1 rounded">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}