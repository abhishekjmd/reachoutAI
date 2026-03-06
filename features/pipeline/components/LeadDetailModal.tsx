"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lead, PipelineStatus } from "../types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface LeadDetailModalProps {
  lead: Lead;
  onClose: () => void;
}

const STATUS_CONFIG: { id: PipelineStatus; label: string; color: string }[] = [
  { id: "sent", label: "Sent", color: "#74B9FF" },
  { id: "replied", label: "Replied", color: "#4ECDC4" },
  { id: "interested", label: "Interested", color: "#A29BFE" },
  { id: "converted", label: "Converted", color: "#eeaa2b" },
  { id: "not_interested", label: "Not Interested", color: "#64748b" },
];

export const LeadDetailModal = ({ lead, onClose }: LeadDetailModalProps) => {
  const [notes, setNotes] = useState(lead.notes || "");
  const [revenue, setRevenue] = useState(lead.revenue?.toString() || "");

  const handleWhatsAppSend = () => {
    const followUpMessage = `Hi ${lead.ownerName}, just following up on my previous message regarding ${lead.businessName}. Would love to hear your thoughts!`;
    window.open(buildWhatsAppUrl(lead.phone, followUpMessage), "_blank");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
      />
      
      <motion.div
        initial={{ x: 420, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 420, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-[420px] bg-sidebar-dark border-l border-white/10 z-[70] shadow-2xl flex flex-col"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-slate-100">{lead.businessName}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-slate-400">{lead.area}, {lead.city}</span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-0.5 text-amber-500">
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                <span className="text-xs font-bold">{lead.rating}</span>
                <span className="text-[10px] text-slate-500 ml-0.5">({lead.reviewCount})</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="size-8 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          {/* Status Selector */}
          <section className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest font-black text-slate-500">Current Status</h3>
            <div className="flex flex-wrap gap-2">
              {STATUS_CONFIG.map((status) => (
                <button
                  key={status.id}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                    lead.status === status.id 
                      ? "bg-slate-100 text-sidebar-dark border-slate-100 shadow-lg shadow-white/5" 
                      : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </section>

          {/* AI Follow-up Suggestion */}
          {lead.status === "sent" && lead.followUpDue && (
            <section className="space-y-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-500">
                <span className="material-symbols-outlined text-[18px] animate-pulse">auto_awesome</span>
                <h3 className="text-[10px] uppercase tracking-widest font-black">AI Follow-up Suggestion</h3>
              </div>
              <p className="text-[13px] text-slate-300 leading-relaxed italic">
                "Hi {lead.ownerName}, just following up on my previous message regarding {lead.businessName}. Would love to hear your thoughts!"
              </p>
              <button 
                onClick={handleWhatsAppSend}
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#1fb355] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Send on WhatsApp →
              </button>
            </section>
          )}

          {/* Message Sent */}
          <section className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-widest font-black text-slate-500">Original Message</h3>
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 text-[13px] text-slate-400 leading-relaxed">
              {lead.messageSent}
            </div>
          </section>

          {/* Revenue Input */}
          {lead.status === "converted" && (
            <section className="space-y-3">
              <h3 className="text-[10px] uppercase tracking-widest font-black text-slate-500">Deal Value</h3>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">₹</span>
                <input 
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full bg-black/30 border border-white/5 rounded-xl py-3 pl-8 pr-4 text-slate-100 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  placeholder="0.00"
                />
              </div>
            </section>
          )}

          {/* Notes */}
          <section className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-widest font-black text-slate-500">Manual Notes</h3>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-32 bg-black/30 border border-white/5 rounded-xl p-4 text-[13px] text-slate-300 focus:outline-none focus:border-primary/50 transition-all resize-none scrollbar-hide"
              placeholder="Add some notes about this lead..."
            />
          </section>
        </div>
      </motion.div>
    </>
  );
};
