import { Surah } from "./surahs.model";

const getAllSurahs = async () => {
  return await Surah.find({}, { id: 1, name: 1, transliteration: 1 });
};

const getSingleSurah = async (id: number) => {
  return await Surah.findOne({ id });
};

const searchAyah = async (query: string) => {
  return await Surah.find({
    "verses.translation": { $regex: query, $options: "i" },
  });
};

export const SurahService = {
  getAllSurahs,
  getSingleSurah,
  searchAyah,
};