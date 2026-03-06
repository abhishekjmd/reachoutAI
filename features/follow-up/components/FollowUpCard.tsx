"use client";

import React from "react";

import { FollowUp } from "../types";

interface FollowUpCardProps {
  followUp: FollowUp;
  onSend: (id: string) => void;
  onSnooze: (id: string) => void;
  onNotInterested: (id: string) => void;
  opacity?: boolean;
}

export const FollowUpCard = ({
  followUp,
  onSend,
  onSnooze,
  onNotInterested,
  opacity = false,
}: FollowUpCardProps) => {
  const { lead, originalMessage, followUpMessage, hoursElapsed } = followUp;

  return (
    <div className={`bg-card-dark rounded-xl border border-white/5 overflow-hidden shadow-2xl transition-all hover:border-primary/20 ${opacity ? 'opacity-90 hover:opacity-100' : ''}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white text-xl font-bold font-syne">{lead.businessName}</h3>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-500 text-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> {lead.city}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-amber-500 fill-current">star</span> {lead.rating} Rating
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">call</span> {lead.phone}
              </span>
            </div>
          </div>
          <div className="text-amber-500 text-sm font-bold flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg shrink-0">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Sent {hoursElapsed} hours ago
          </div>
        </div>

        {/* Original Message Preview */}
        <div className="bg-accent-dark/50 border border-white/5 rounded-lg p-3 mb-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Original Message</p>
          <p className="text-slate-400 text-sm truncate">{originalMessage}</p>
        </div>

        {/* AI Message Area */}
        <div className="bg-accent-dark rounded-xl border border-primary/20 p-5 mb-6 relative group">
          <div className="absolute -top-3 -left-3 bg-primary text-white p-1.5 rounded-lg shadow-lg">
            <span className="material-symbols-outlined text-lg">smart_toy</span>
          </div>
          <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3">AI Follow-up Message</p>
          <p className="text-slate-200 font-dm-sans text-lg leading-relaxed italic">
            &quot;{followUpMessage}&quot;
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => onSend(followUp.id)}
            className="flex items-center gap-2 px-6 h-11 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white rounded-xl font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            Send Follow-up on WhatsApp
          </button>
          <button 
            onClick={() => onNotInterested(followUp.id)}
            className="flex items-center gap-2 px-6 h-11 bg-primary/10 hover:bg-primary/20 active:scale-[0.98] text-primary rounded-xl font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">block</span>
            Mark as Not Interested
          </button>
          <button 
            onClick={() => onSnooze(followUp.id)}
            className="flex items-center gap-2 px-4 h-11 bg-white/5 hover:bg-white/10 active:bg-white/15 text-slate-300 rounded-xl font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">snooze</span>
            Snooze 24hrs
          </button>
        </div>
      </div>
    </div>
  );
};
