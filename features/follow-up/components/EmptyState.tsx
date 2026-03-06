import React from "react";

export const EmptyState = () => {
  return (
    <div className="border-2 border-dashed border-white/5 rounded-xl py-12 flex flex-col items-center justify-center bg-white/[0.02]">
      <div className="bg-emerald-500/20 text-emerald-500 p-4 rounded-full mb-4">
        <span className="material-symbols-outlined text-4xl">check_circle</span>
      </div>
      <p className="text-white text-xl font-bold font-syne mb-1">All clear!</p>
      <p className="text-slate-500 text-sm">You have no more follow-ups in the queue.</p>
    </div>
  );
};
