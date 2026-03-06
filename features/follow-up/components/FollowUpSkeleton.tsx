"use client";

import React from "react";

export const FollowUpSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 pb-12">
      {[1, 2].map((i) => (
        <div 
          key={i} 
          className="bg-card-dark border border-amber-500/10 rounded-[14px] p-5 h-48 animate-pulse flex flex-col gap-4"
        >
          <div className="flex justify-between items-start">
            <div className="h-4 w-32 bg-white/5 rounded-full" />
            <div className="h-4 w-16 bg-white/5 rounded-full" />
          </div>
          <div className="h-4 w-48 bg-white/5 rounded-full" />
          <div className="h-px bg-white/5 w-full" />
          <div className="space-y-3">
            <div className="h-12 bg-white/5 rounded-xl w-full" />
            <div className="flex gap-2">
              <div className="h-10 w-32 bg-white/5 rounded-xl" />
              <div className="h-10 w-32 bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
