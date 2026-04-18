type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching?: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isFetching,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | "...")[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isFetching}
        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 disabled:opacity-40"
      >
        Prev
      </button>

      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-white/40">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={isFetching}
            className={`min-w-10 rounded-lg px-3 py-2 text-sm transition ${
              currentPage === page
                ? "bg-emerald-500 text-white"
                : "border border-white/10 text-white/70 hover:border-emerald-500/30"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isFetching}
        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}