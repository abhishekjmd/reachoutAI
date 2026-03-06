"use client";

import React from "react";

const CITIES = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Chennai", "Ahmedabad", "Pune"];
const CATEGORIES = ["All", "Dentist", "Salon", "Clinic", "Restaurant", "Gym", "CA Firm"];

export const PipelineFilters = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
          {CITIES.map((city) => (
            <button
              key={city}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                city === "All Cities"
                  ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
        
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm group-focus-within:text-primary transition-colors">search</span>
          <input 
            type="text" 
            placeholder="Search businesses..."
            className="bg-sidebar-dark border border-white/5 rounded-full py-2 pl-10 pr-4 text-xs text-slate-200 focus:outline-none focus:border-primary/30 transition-all w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
        <span className="text-[10px] uppercase tracking-widest font-black text-slate-600 mr-2 whitespace-nowrap">Filter by category:</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap border transition-all ${
              cat === "All"
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                : "bg-black/20 text-slate-500 border-white/5 hover:border-white/10 hover:text-slate-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};
