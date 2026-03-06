import React from "react";

const FUNNEL_STEPS = [
  { label: "Sent", value: "1,240", width: "100%", opacity: "bg-primary" },
  { label: "Replied", value: "318", width: "60%", opacity: "bg-primary/70" },
  { label: "Interested", value: "89", width: "30%", opacity: "bg-primary/40" },
  { label: "Converted", value: "23", width: "15%", opacity: "bg-primary/20", textPrimary: true },
];

export const ConversionFunnel = () => {
  return (
    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-primary/5 h-full">
      <h3 className="text-lg font-bold mb-6 dark:text-slate-100">Conversion Funnel</h3>
      <div className="flex flex-col gap-3 h-[180px] justify-between">
        {FUNNEL_STEPS.map((step) => (
          <div key={step.label} className="flex items-center gap-4 group">
            <div 
              className={`${step.opacity} h-8 rounded transition-all duration-700 hover:brightness-110`} 
              style={{ width: step.width }}
            ></div>
            <span className={`text-xs font-bold whitespace-nowrap ${step.textPrimary ? 'text-primary' : 'text-slate-500'} group-hover:translate-x-1 transition-transform`}>
              {step.label}: {step.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
