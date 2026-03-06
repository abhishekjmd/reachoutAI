import React from "react";

export const PipelineHeader = () => {
  return (
    <header className="p-8 pb-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-[26px] font-syne font-semibold text-slate-100 italic tracking-tight">Pipeline</h2>
          <p className="text-slate-400 text-sm mt-1">Manage and track your AI outreach lead stages</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-card-dark border border-primary/10 text-slate-400 hover:text-slate-100 transition-all hover:border-primary/30 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="p-2 rounded-lg bg-card-dark border border-primary/10 text-slate-400 hover:text-slate-100 transition-all hover:border-primary/30 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};
