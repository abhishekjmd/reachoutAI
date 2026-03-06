import React from "react";

interface KanbanCardProps {
  name: string;
  icon: string;
  contactName: string;
  status?: "follow-up" | "high-intent" | "converted" | "none";
  message?: string;
  opacity?: boolean;
}

export const KanbanCard = ({ name, icon, contactName, status = "none", message, opacity = false }: KanbanCardProps) => {
  return (
    <div className={`bg-card-dark border-l-4 p-4 rounded-lg shadow-sm border border-primary/5 transition-all hover:border-primary/20 cursor-grab active:cursor-grabbing ${opacity ? 'opacity-60' : ''} ${
      status === 'follow-up' ? 'border-blue-500' : 
      status === 'high-intent' ? 'border-purple-500' : 
      status === 'converted' ? 'border-primary' : 
      'border-slate-700'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-slate-100 font-semibold text-sm">{name}</h4>
        <span className="material-symbols-outlined text-slate-600 text-sm hover:text-slate-400 cursor-pointer transition-colors">open_in_new</span>
      </div>

      {status === 'follow-up' && (
        <div className="flex items-center gap-1 bg-amber-500/10 text-amber-500 px-2 py-1 rounded text-[10px] w-fit font-medium">
          <span className="material-symbols-outlined text-xs">schedule</span>
          ⏰ Follow-up due
        </div>
      )}

      {status === 'high-intent' && (
        <div className="flex items-center gap-1 bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-[10px] w-fit font-medium">
          <span className="material-symbols-outlined text-xs">stars</span>
          High Intent
        </div>
      )}

      {status === 'converted' && (
        <div className="flex items-center gap-1 text-primary px-2 py-1 rounded text-[11px] w-fit font-bold">
          <span className="material-symbols-outlined text-xs">check_circle</span>
          ✓ Converted
        </div>
      )}

      {message && (
        <p className="text-[11px] text-slate-400 line-clamp-2 mt-2 italic">
          &quot;{message}&quot;
        </p>
      )}

      <div className="mt-3 flex items-center gap-2">
        <div className="size-6 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
          <img className="w-full h-full object-cover" src={icon} alt={name} />
        </div>
        <span className="text-[10px] text-slate-500">{contactName}</span>
      </div>
    </div>
  );
};
