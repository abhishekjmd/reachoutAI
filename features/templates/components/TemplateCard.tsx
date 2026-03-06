import React from "react";

interface TemplateCardProps {
  title: string;
  tags: string[];
  type: string;
  content: React.ReactNode;
  usedCount: string;
  replyRate: string;
  isBestPerformer?: boolean;
}

export const TemplateCard = ({
  title,
  tags,
  type,
  content,
  usedCount,
  replyRate,
  isBestPerformer = false,
}: TemplateCardProps) => {
  return (
    <div className={`group bg-slate-50 dark:bg-card-dark border transition-all rounded-2xl p-6 relative ${
        isBestPerformer 
          ? 'border-amber-500/50 ring-1 ring-amber-500/20' 
          : 'border-transparent dark:border-primary/5 hover:border-primary/30'
      }`}>
      {isBestPerformer && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase rounded-full shadow-lg z-10">
          Best Performer
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className={`text-lg font-bold group-hover:text-primary transition-colors ${isBestPerformer ? 'text-amber-500' : 'dark:text-slate-100'}`}>
            {title}
          </h4>
          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase">
                {tag}
              </span>
            ))}
            <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-neutral-dark text-slate-500 text-[10px] font-bold uppercase">
              {type}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-slate-200 dark:bg-inner-dark hover:text-primary transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
            <span className="material-symbols-outlined text-xl">content_copy</span>
          </button>
          <button className="p-2 rounded-lg bg-slate-200 dark:bg-inner-dark hover:text-primary transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
            <span className="material-symbols-outlined text-xl">edit_note</span>
          </button>
        </div>
      </div>

      <div className={`bg-white dark:bg-inner-dark rounded-xl p-4 mb-4 border italic text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${isBestPerformer ? 'border-amber-500/10' : 'border-slate-100 dark:border-primary/5'}`}>
        {content}
      </div>

      <div className="flex items-center gap-6 pt-2 border-t border-slate-200 dark:border-primary/10">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Used</span>
          <span className="text-sm font-black dark:text-slate-200">{usedCount}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Reply Rate</span>
          <span className="text-sm font-black text-emerald-500">{replyRate}</span>
        </div>
      </div>
    </div>
  );
};
