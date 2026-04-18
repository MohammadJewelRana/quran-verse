"use client";

type Props = {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  text?: string;
};

const LoadingSpinner = ({ size = "md", fullScreen = false, text }: Props) => {
  const sizeClasses = {
    sm: "h-5 w-5 border-2",
    md: "h-9 w-9 border-[3px]",
    lg: "h-14 w-14 border-4",
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`animate-spin rounded-full border-white/15 border-t-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.18)] ${sizeClasses[size]}`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm font-medium text-white/50 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#050A14]/70 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;