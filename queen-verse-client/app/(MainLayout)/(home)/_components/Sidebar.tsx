import clsx from "clsx";

const surahs = Array.from({ length: 114 }, (_, i) => ({
  number: i + 1,
  name: `Surah ${i + 1}`,
  verses: Math.floor(Math.random() * 200),
}));

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-full">

      {/* Logo */}
      <div className="p-4 text-green-400 font-bold text-xl">
        القُرْآن
      </div>

      {/* Menu */}
      <div className="px-3 space-y-2">
        <Item label="Read" active />
        <Item label="Favorites" />
        <Item label="Bookmarks" />
        <Item label="Settings" />
      </div>

      {/* Surah List */}
      <div className="flex-1 overflow-y-auto mt-4 px-2 space-y-2">
        {surahs.map((s) => (
          <div
            key={s.number}
            className="flex justify-between items-center p-3 rounded-lg hover:bg-[#0F172A] cursor-pointer"
          >
            <div>
              <p className="text-sm font-medium">{s.name}</p>
              <p className="text-xs text-gray-400">
                {s.verses} verses
              </p>
            </div>

            <span className="text-xs bg-[#0F172A] px-2 py-1 rounded">
              {s.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ label, active = false }: any) {
  return (
    <div
      className={clsx(
        "px-4 py-2 rounded-lg cursor-pointer text-sm",
        active
          ? "bg-green-400 text-black"
          : "text-gray-400 hover:bg-[#0F172A]"
      )}
    >
      {label}
    </div>
  );
}