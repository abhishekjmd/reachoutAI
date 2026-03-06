import React from "react";

interface KanbanColumnProps {
  title: string;
  count: number;
  colorClass: string;
  children: React.ReactNode;
}

export const KanbanColumn = ({ title, count, colorClass, children }: KanbanColumnProps) => {
  return (
    <div className="min-w-[280px] w-[280px] flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-bold ${colorClass} uppercase tracking-widest`}>{title}</span>
          <span className={`${colorClass}/10 ${colorClass} text-[10px] px-1.5 py-0.5 rounded border ${colorClass}/20`}>{count}</span>
        </div>
        <button className="text-slate-600 hover:text-slate-400 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>
      <div className="space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
        {children}
      </div>
    </div>
  );
};
