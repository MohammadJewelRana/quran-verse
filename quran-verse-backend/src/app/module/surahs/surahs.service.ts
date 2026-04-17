import { Surah } from "./surahs.model";

//  Get All Surahs
const getAllSurahs = async () => {
  const result = await Surah.find(
    {},
    {
      _id: 0,
      id: 1,
      name: 1,
      transliteration: 1,
      total_verses: 1,
      type: 1,
    }
  ).sort({ id: 1 });

  return result;
};

//  Get Single Surah
const getSingleSurah = async (id: number) => {
  const result = await Surah.findOne({ id }, { _id: 0, __v: 0 }).lean();

  if (!result) {
    throw new Error("Surah not found");
  }

  return result;
};

//  Search Ayah
const searchAyah = async (query: string) => {
  if (!query) {
    throw new Error("Search query is required");
  }

  const surahs = await Surah.find({
    "verses.translation": { $regex: query, $options: "i" },
  }).lean();

  //  Filter only matched ayah
  const results: any[] = [];

  surahs.forEach((surah) => {
    const matchedVerses = surah.verses.filter((verse: any) =>
      verse.translation.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedVerses.length > 0) {
      results.push({
        surahId: surah.id,
        surahName: surah.name,
        transliteration: surah.transliteration,
        verses: matchedVerses,
      });
    }
  });

  return results;
};

export const SurahService = {
  getAllSurahs,
  getSingleSurah,
  searchAyah,
};
