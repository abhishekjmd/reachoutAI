import React from "react";

export const TemplateHeader = () => {
  return (
    <header className="h-20 border-b border-primary/10 flex items-center justify-between px-8 bg-background-light dark:bg-background-dark/50 backdrop-blur-md z-10 sticky top-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input 
            className="w-full bg-slate-100 dark:bg-card-dark border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all dark:text-slate-100 outline-none" 
            placeholder="Search templates..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-primary hover:brightness-110 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/25 active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined text-lg">add</span>
          New Template
        </button>
        <div className="h-8 w-px bg-primary/10 mx-2"></div>
        <button className="size-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-card-dark text-slate-500 hover:text-primary transition-colors active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
  );
};
