// lib/storage.ts
export type Surah = {
  id: number;
  name: string;
  transliteration: string;
  total_verses: number;
  type: string;
};

const BOOKMARKS_KEY = "quran-bookmarks";
const FAVORITES_KEY = "quran-favorites";

function isBrowser() {
  return typeof window !== "undefined";
}

function readList(key: string): Surah[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeList(key: string, list: Surah[]) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(list));
}

export function getBookmarks() {
  return readList(BOOKMARKS_KEY);
}

export function getFavorites() {
  return readList(FAVORITES_KEY);
}

export function isBookmarked(id: number) {
  return getBookmarks().some((item) => item.id === id);
}

export function isFavorited(id: number) {
  return getFavorites().some((item) => item.id === id);
}

export function toggleBookmark(surah: Surah) {
  const list = getBookmarks();
  const exists = list.some((item) => item.id === surah.id);

  const next = exists
    ? list.filter((item) => item.id !== surah.id)
    : [...list, surah];

  writeList(BOOKMARKS_KEY, next);
  return next;
}

export function toggleFavorite(surah: Surah) {
  const list = getFavorites();
  const exists = list.some((item) => item.id === surah.id);

  const next = exists
    ? list.filter((item) => item.id !== surah.id)
    : [...list, surah];

  writeList(FAVORITES_KEY, next);
  return next;
}

export function removeBookmark(id: number) {
  const next = getBookmarks().filter((item) => item.id !== id);
  writeList(BOOKMARKS_KEY, next);
  return next;
}

export function removeFavorite(id: number) {
  const next = getFavorites().filter((item) => item.id !== id);
  writeList(FAVORITES_KEY, next);
  return next;
}