import React from "react";

const CATEGORIES = [
  { name: "Dentists", count: 487, percentage: 85 },
  { name: "Salons", count: 312, percentage: 65 },
  { name: "Gyms", count: 245, percentage: 50 },
  { name: "Spas", count: 196, percentage: 40 },
];

export const CategoryChart = () => {
  return (
    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-primary/5 h-full">
      <h3 className="text-lg font-bold mb-6 dark:text-slate-100">Outreach by Category</h3>
      <div className="space-y-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="space-y-1 group">
            <div className="flex justify-between text-sm font-medium dark:text-slate-300">
              <span className="group-hover:text-primary transition-colors">{cat.name}</span>
              <span className="text-slate-500 font-bold">{cat.count}</span>
            </div>
            <div className="w-full bg-primary/10 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${cat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
