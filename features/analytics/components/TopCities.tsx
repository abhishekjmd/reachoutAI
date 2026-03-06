import React from "react";

const CITIES = [
  { name: "Mumbai", percentage: 90 },
  { name: "Delhi", percentage: 75 },
  { name: "Bangalore", percentage: 80 },
  { name: "Pune", percentage: 55 },
  { name: "Hyderabad", percentage: 45 },
];

export const TopCities = () => {
  return (
    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-primary/5 h-full">
      <h3 className="text-lg font-bold mb-6 dark:text-slate-100">Top Cities</h3>
      <div className="space-y-4">
        {CITIES.map((city) => (
          <div key={city.name} className="flex items-center gap-3 group">
            <span className="w-20 text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">{city.name}</span>
            <div className="flex-1 bg-primary/10 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${city.percentage}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-black text-slate-600">{city.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
