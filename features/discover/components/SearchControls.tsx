"use client";

import React from "react";

export const SearchControls = () => {
  return (
    <div className="bg-card-dark p-2 rounded-2xl border border-white/5 shadow-2xl mb-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
        <div className="flex-1 min-w-[200px] flex items-center gap-3 px-4 py-3 bg-accent-dark rounded-xl border border-white/5 focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-slate-500">medical_services</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-slate-100 w-full placeholder:text-slate-600 outline-none" 
            placeholder="Business type (e.g. Dental Care)" 
            type="text"
          />
        </div>
        <div className="flex-1 min-w-[150px] flex items-center gap-3 px-4 py-3 bg-accent-dark rounded-xl border border-white/5 focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-slate-500">location_on</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-slate-100 w-full placeholder:text-slate-600 outline-none" 
            placeholder="City" 
            type="text"
          />
        </div>
        <div className="flex-1 min-w-[150px] flex items-center gap-3 px-4 py-3 bg-accent-dark rounded-xl border border-white/5 focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-slate-500">map</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-slate-100 w-full placeholder:text-slate-600 outline-none" 
            placeholder="Area" 
            type="text"
          />
        </div>
        <button className="bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
          <span className="material-symbols-outlined">search</span>
          Search
        </button>
      </div>
    </div>

  );
};
