"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lead } from "../types";

interface LeadCardProps {
  lead: Lead;
  statusColor: string;
  onClick: (lead: Lead) => void;
}

export const LeadCard = ({ lead, statusColor, onClick }: LeadCardProps) => {
  const formattedDate = new Date(lead.sentAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short'
  });

  return (
    <motion.div
      layoutId={lead.id}
      whileHover={{ scale: 1.01 }}
      onClick={() => onClick(lead)}
      className="bg-card-dark border border-white/5 rounded-xl p-4 cursor-pointer transition-colors hover:border-white/20 shadow-sm relative overflow-hidden group"
      style={{ borderLeft: `3px solid ${statusColor}` }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="text-slate-100 text-[13px] font-semibold leading-tight group-hover:text-primary transition-colors">
            {lead.businessName}
          </h3>
          <span className="text-[11px] text-slate-500 font-medium">{formattedDate}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-[11px] text-slate-400 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">location_on</span>
            {lead.area}
          </span>
          <span className="text-slate-600 text-[10px]">•</span>
          <span className="text-[11px] text-slate-400 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">category</span>
            {lead.category}
          </span>
        </div>

        {lead.status === "converted" && lead.revenue && (
          <div className="mt-1 flex items-center gap-1.5 text-primary font-bold text-[13px]">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            ₹{lead.revenue.toLocaleString('en-IN')}
          </div>
        )}

        {lead.followUpDue && lead.status === "sent" && (
          <div className="mt-1 flex items-center gap-1 w-fit bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20">
            <span className="material-symbols-outlined text-[12px]">schedule</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Follow-up due</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
