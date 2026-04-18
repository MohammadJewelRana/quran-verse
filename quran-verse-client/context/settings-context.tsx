"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FontKey = "amiri" | "noto";

type Settings = {
  font: FontKey;
  arabicSize: number;
  translationSize: number;
};

type SettingsContextType = Settings & {
  setFont: (font: FontKey) => void;
  setArabicSize: (value: number) => void;
  setTranslationSize: (value: number) => void;
  resetSettings: () => void;
};

const defaultSettings: Settings = {
  font: "amiri",
  arabicSize: 22,
  translationSize: 14,
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<FontKey>(defaultSettings.font);
  const [arabicSize, setArabicSize] = useState(defaultSettings.arabicSize);
  const [translationSize, setTranslationSize] = useState(
    defaultSettings.translationSize
  );

  useEffect(() => {
    const saved = localStorage.getItem("quran-settings");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (parsed.font) setFont(parsed.font);
      if (parsed.arabicSize) setArabicSize(parsed.arabicSize);
      if (parsed.translationSize) setTranslationSize(parsed.translationSize);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quran-settings",
      JSON.stringify({ font, arabicSize, translationSize })
    );
  }, [font, arabicSize, translationSize]);

  const resetSettings = () => {
    setFont(defaultSettings.font);
    setArabicSize(defaultSettings.arabicSize);
    setTranslationSize(defaultSettings.translationSize);
  };

  const value = useMemo(
    () => ({
      font,
      arabicSize,
      translationSize,
      setFont,
      setArabicSize,
      setTranslationSize,
      resetSettings,
    }),
    [font, arabicSize, translationSize]
  );

  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}