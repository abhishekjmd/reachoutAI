import React from "react";

const STATS = [
  { label: "Total Outreached", value: "1,240", growth: "+18%", trend: "up" },
  { label: "Replied", value: "318", growth: "+25.6%", trend: "up" },
  { label: "Interested", value: "89", growth: "+7.2%", trend: "up" },
  { label: "Converted", value: "23", growth: "🎉", trend: "highlight", isPrimary: true },
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {STATS.map((stat) => (
        <div 
          key={stat.label} 
          className={`bg-white dark:bg-card-dark p-6 rounded-xl border border-primary/5 relative overflow-hidden group transition-all hover:border-primary/20 cursor-default ${stat.isPrimary ? 'ring-1 ring-primary/20' : ''}`}
        >
          {stat.isPrimary && (
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-1">{stat.label}</p>
          <div className="flex items-end gap-3">
            <span className={`text-3xl font-black ${stat.isPrimary ? 'text-primary' : 'dark:text-slate-100'}`}>{stat.value}</span>
            <span className={`${stat.trend === 'up' ? 'text-emerald-500' : 'text-primary/70 animate-bounce'} text-sm font-bold mb-1`}>
              {stat.growth}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
