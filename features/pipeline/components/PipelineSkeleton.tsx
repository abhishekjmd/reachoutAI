"use client";

import React from "react";

export const PipelineSkeleton = () => {
  return (
    <div className="flex gap-6 h-full overflow-hidden select-none">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex-shrink-0 w-72 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="h-4 w-24 bg-white/5 rounded-full animate-pulse" />
            <div className="h-4 w-8 bg-white/5 rounded-full animate-pulse" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-32 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
