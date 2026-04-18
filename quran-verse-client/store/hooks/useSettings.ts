"use client";

import { useEffect, useState } from "react";

export function useSettings() {
  const [arabicSize, setArabicSize] = useState(28);
  const [translationSize, setTranslationSize] = useState(16);
  const [font, setFont] = useState("font-amiri");

  useEffect(() => {
    const saved = localStorage.getItem("quran-settings");
    if (saved) {
      const s = JSON.parse(saved);
      setArabicSize(s.arabicSize);
      setTranslationSize(s.translationSize);
      setFont(s.font);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quran-settings",
      JSON.stringify({ arabicSize, translationSize, font }),
    );
  }, [arabicSize, translationSize, font]);

  return {
    arabicSize,
    setArabicSize,
    translationSize,
    setTranslationSize,
    font,
    setFont,
  };
}
