import React from "react";

interface FollowUpHeaderProps {
  pendingCount: number;
}

export const FollowUpHeader = ({ pendingCount }: FollowUpHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-4xl font-syne font-extrabold tracking-tight italic">Follow-up Queue</h2>
        <p className="text-slate-400 text-base">Manage your AI-generated follow-up messages for high-intent leads.</p>
      </div>
      <div className="bg-amber-500/20 border border-amber-500/30 text-amber-500 px-4 py-2 rounded-full flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span className="text-sm font-bold uppercase tracking-wider">{pendingCount} pending</span>
      </div>
    </div>
  );
};
