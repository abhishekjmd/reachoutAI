import React from "react";

export const TemplateFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-black dark:text-slate-100 italic">Message Templates</h3>
        <p className="text-slate-500 text-sm mt-1 font-medium italic">4 Active strategies found in your library</p>
      </div>
      <div className="flex bg-slate-100 dark:bg-card-dark p-1 rounded-xl ring-1 ring-primary/5">
        <button className="px-5 py-2 text-xs font-bold rounded-lg bg-white dark:bg-primary text-primary dark:text-white shadow-sm transition-all cursor-pointer">All</button>
        <button className="px-5 py-2 text-xs font-bold text-slate-500 rounded-lg hover:text-primary transition-colors cursor-pointer">Direct</button>
        <button className="px-5 py-2 text-xs font-bold text-slate-500 rounded-lg hover:text-primary transition-colors cursor-pointer">Follow-up</button>
      </div>
    </div>
  );
};
