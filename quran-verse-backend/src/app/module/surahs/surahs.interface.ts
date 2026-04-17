export interface IVerse {
  id: number;
  text: string;
  translation: string;
}

export interface ISurah {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: IVerse[];
}