import AyahCard from "./AyahCard";

type Verse = {
  id: number;
  text: string;
  translation: string;
  verse_number?: number;
  verse_no?: number;
  number?: number;
};

type Props = {
  verses: Verse[];
};

export default function AyahList({ verses }: Props) {
  return (
    <div className="space-y-3">
      {verses.map((ayah) => (
        <AyahCard
          key={ayah.id}
          number={ayah.verse_number ?? ayah.verse_no ?? ayah.number ?? ayah.id}
          arabic={ayah.text}
          translation={ayah.translation}
        />
      ))}
    </div>
  );
}