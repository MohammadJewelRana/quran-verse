type Props = {
  message?: string;
};

export default function EmptyCard({ message = "No data found." }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0D1626] to-[#08111F] p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-2xl">
        !
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{message}</h3>
      <p className="mt-2 text-sm text-white/50">
        Please refresh or try again later.
      </p>
    </div>
  );
}