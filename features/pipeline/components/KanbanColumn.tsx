import React from "react";
import { Lead, PipelineColumn } from "../types";
import { LeadCard } from "./LeadCard";

interface KanbanColumnProps {
  column: PipelineColumn;
  onCardClick: (lead: Lead) => void;
}

export const KanbanColumn = ({ column, onCardClick }: KanbanColumnProps) => {
  return (
    <div className="min-w-[300px] w-[300px] flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span 
            className="text-[11px] font-black uppercase tracking-[0.2em]" 
            style={{ color: column.color }}
          >
            {column.label}
          </span>
          <span 
            className="text-[10px] px-1.5 py-0.5 rounded border font-bold"
            style={{ 
              backgroundColor: `${column.color}15`, 
              color: column.color,
              borderColor: `${column.color}30`
            }}
          >
            {column.leads.length}
          </span>
        </div>
        <button className="text-slate-600 hover:text-slate-400 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>

      <div className="space-y-3 overflow-y-auto pr-1 scrollbar-hide flex-1">
        {column.leads.map((lead) => (
          <LeadCard 
            key={lead.id} 
            lead={lead} 
            statusColor={column.color}
            onClick={onCardClick}
          />
        ))}
        
        {column.leads.length === 0 && (
          <div className="h-24 border border-dashed border-white/5 rounded-xl flex items-center justify-center">
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">No Leads</span>
          </div>
        )}
      </div>
    </div>
  );
};

