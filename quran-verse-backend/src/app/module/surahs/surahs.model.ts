import mongoose from "mongoose";

const verseSchema = new mongoose.Schema({
  id: Number,
  text: String,
  translation: String,
});

const surahSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  transliteration: String,
  translation: String,
  type: String,
  total_verses: Number,
  verses: [verseSchema],
});

export const Surah = mongoose.model("Surah", surahSchema);

