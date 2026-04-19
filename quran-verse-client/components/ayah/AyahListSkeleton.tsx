import AyahCardSkeleton from "./AyahCardSkeleton";

 

export function AyahListSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <AyahCardSkeleton key={i} />
      ))}
    </div>
  );
}