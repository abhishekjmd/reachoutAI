import React from "react";

export const AnalyticsHeader = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-black tracking-tight dark:text-slate-100 italic">Analytics Dashboard</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Real-time performance metrics for your AI agents</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary text-sm font-bold flex items-center gap-2 hover:bg-primary/10 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer">
          <span className="material-symbols-outlined text-base">calendar_month</span>
          Last 30 Days
        </button>
        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-base">file_download</span>
          Export Report
        </button>
      </div>
    </header>
  );
};
