import React from "react";

const STATS = [
  { label: "6 Sent", color: "bg-blue-500" },
  { label: "1 Replied", color: "bg-teal-500" },
  { label: "1 Interested", color: "bg-purple-500" },
  { label: "1 Converted", color: "bg-primary" },
];

export const StatsPills = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex items-center gap-2 px-4 py-2 bg-card-dark border border-primary/5 rounded-full hover:border-primary/20 transition-all cursor-default">
          <span className={`size-2 rounded-full ${stat.color}`}></span>
          <span className="text-xs font-semibold text-slate-200">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
