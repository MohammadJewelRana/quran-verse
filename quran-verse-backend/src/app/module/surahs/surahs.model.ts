import mongoose, { Schema } from "mongoose";

//  Verse Schema
const verseSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    translation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

//  Surah Schema
const surahSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true, // fast lookup
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    transliteration: {
      type: String,
      required: true,
      trim: true,
    },
    translation: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["meccan", "medinan"],
      required: true,
    },
    total_verses: {
      type: Number,
      required: true,
      min: 1,
    },
    verses: {
      type: [verseSchema],
      required: true,
      validate: {
        validator: function (this: any, v: any[]) {
          return v.length === this.total_verses;
        },
        message: "Verses count must match total_verses",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//  FULL TEXT SEARCH INDEX
surahSchema.index({
  "verses.translation": "text",
});

surahSchema.index({ id: 1, "verses.id": 1 });

export const Surah = mongoose.model("Surah", surahSchema);
