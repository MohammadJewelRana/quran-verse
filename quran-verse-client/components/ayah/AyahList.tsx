import AyahCard from "./AyahCard";

type Props = {
  verses: {
    id: number;
    text: string;
    translation: string;
  }[];
};

export default function AyahList({ verses }: any) {
  return (
    <div className="space-y-3">
      {verses.map((ayah: any, index: number) => (
        <AyahCard
          key={ayah.id}
          number={index + 1}
          arabic={ayah.text}
          translation={ayah.translation}
        />
      ))}
    </div>
  );
}