import React from "react";

export const BrandLogo = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-primary size-10 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-2xl">
            bolt
          </span>
        </div>
        <div>
          <h1 className="font-syne text-2xl font-bold text-slate-100 leading-none">
            ReachOut
          </h1>
          <p className="font-dm-sans text-xs text-primary/80 font-medium mt-1">
            AI Outreach Agent
          </p>
        </div>
      </div>
    </div>
  );
};
