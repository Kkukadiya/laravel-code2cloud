import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-hero transition-opacity duration-500 ${
        !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Shimmer skeleton layout */}
        <div className="w-64 space-y-4">
          {/* Header shimmer */}
          <div className="h-8 w-3/4 mx-auto rounded-lg bg-muted/30 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          
          {/* Content shimmer lines */}
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-muted/30 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animationDelay: "0.1s" }} />
            </div>
            <div className="h-4 w-5/6 rounded bg-muted/30 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animationDelay: "0.2s" }} />
            </div>
            <div className="h-4 w-4/6 rounded bg-muted/30 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
          
          {/* Button shimmer */}
          <div className="h-10 w-32 mx-auto rounded-full bg-muted/30 overflow-hidden relative mt-6">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
