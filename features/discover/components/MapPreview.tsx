import React from "react";

export const MapPreview = () => {
  return (
    <div className="mt-12 bg-card-dark rounded-2xl border border-white/5 overflow-hidden h-[300px] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="w-full h-full flex items-center justify-center relative">
        <img 
          alt="Map of Mumbai" 
          className="w-full h-full object-cover opacity-20 grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6P6QjDcvfzpvA0sOLYPzFJSVmz8YAoN3XnJOlEHiid4iOwPWn51BAswk90N-FB-4Y0bqdxO6521eS0qpKDwaNAkyfb5tLRkMI1Lh2Ndx8xo9HV00XRjm7dCgyhGxDWkq21UBZ1D18FkFiv0kfwzTVLCGLb295-y7yi58UdemNE30Sj3YMtUEStnEDSxitrOdZPgr797xXZK9VUwTJuAL25_O7HvIz4bhYSjpt8Ca4D3XtWPBO0K5UiQ6O-N8k0ZaMuOTGJBk1_aw" 
        />
        <div className="absolute flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">map_search</span>
          <p className="text-slate-100 font-bold text-xl">View 124 Results on Map</p>
          <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full text-sm font-semibold backdrop-blur-sm transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/20">
            Enable Map View
          </button>
        </div>
      </div>
    </div>

  );
};
