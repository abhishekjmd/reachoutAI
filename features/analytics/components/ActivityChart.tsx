import React from "react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const ActivityChart = () => {
  return (
    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-primary/5 h-full">
      <h3 className="text-lg font-bold mb-2 dark:text-slate-100">Weekly Activity</h3>
      <p className="text-sm text-slate-500 mb-6 font-medium">Engagement trends over the last 7 days</p>
      
      <div className="relative h-[200px] w-full mt-4 group">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3"></stop>
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path 
            className="transition-all duration-1000"
            d="M0,80 C50,60 100,90 150,40 C200,10 250,70 300,50 C350,30 400,60 400,60 L400,100 L0,100 Z" 
            fill="url(#areaGradient)"
          ></path>
          <path 
            className="transition-all duration-1000"
            d="M0,80 C50,60 100,90 150,40 C200,10 250,70 300,50 C350,30 400,60 400,60" 
            fill="none" 
            stroke="var(--color-primary)" 
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </svg>
        
        <div className="flex justify-between mt-4">
          {DAYS.map(day => (
            <span key={day} className="text-[10px] font-bold text-slate-500 hover:text-primary transition-colors cursor-default">{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
