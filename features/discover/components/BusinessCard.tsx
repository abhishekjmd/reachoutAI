import React from "react";
import { motion } from "framer-motion";

type BusinessCardProps = {
  result: {
    id: string;
    businessName: string;
    phone: string;
    rating: number;
    reviewCount: number;
    address: string;
    city: string;
    category: string;
    generatedMessage: string | null;
    isGeneratingMessage: boolean;
  };
  onSend: (id: string, phone: string, message: string) => void;
  onSkip: (id: string) => void;
  onEdit: (id: string, newMessage: string) => void;
  onRegenerate: (
    id: string,
    biz: {
      businessName: string;
      category: string;
      city: string;
      rating: number;
      reviewCount: number;
    }
  ) => void;
};

export const BusinessCard = ({ result, onSend, onSkip, onEdit, onRegenerate }: BusinessCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -30, height: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-card-dark rounded-2xl border border-white/5 p-6 flex flex-col hover:border-primary/30 transition-all group overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-slate-100 mb-1 leading-tight">{result.businessName}</h3>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>{result.city}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="px-3 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-rose-500/20">
            NO WEBSITE
          </span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
            <span className="text-slate-200 font-bold text-sm">{result.rating}</span>
            <span className="text-slate-500 text-xs">({result.reviewCount})</span>
          </div>
        </div>
      </div>
      
      {/* Message Area */}
      <div className="relative mt-2 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xs shrink-0">smart_toy</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">AI Outreach Draft</span>
          </div>
          {result.generatedMessage && (
            <button 
              onClick={() => onRegenerate(result.id, {
                businessName: result.businessName,
                category: result.category,
                city: result.city,
                rating: result.rating,
                reviewCount: result.reviewCount,
              })}
              className="p-1 hover:bg-white/5 rounded-md text-slate-500 hover:text-primary transition-all group"
              title="Regenerate message"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
            </button>
          )}
        </div>

        <div className={`relative min-h-[80px] rounded-xl border transition-all ${
          result.isGeneratingMessage 
            ? 'border-primary/30 bg-primary/5 animate-pulse' 
            : 'border-white/5 bg-accent-dark focus-within:border-primary/50'
        }`}>
          {result.isGeneratingMessage ? (
            <div className="p-4 flex flex-col gap-2">
              <div className="h-3 w-3/4 bg-white/5 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-white/5 rounded animate-pulse" />
              <p className="text-[11px] text-primary/50 font-medium italic mt-1">AI is writing your message...</p>
            </div>
          ) : result.generatedMessage ? (
            <textarea
              value={result.generatedMessage}
              onChange={(e) => onEdit(result.id, e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-300 p-4 min-h-[80px] resize-none outline-none leading-relaxed italic"
            />
          ) : (
            <div className="p-4 flex items-center justify-center h-full min-h-[80px]">
              <p className="text-xs text-slate-600 italic">Message will appear after search</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto space-y-3">
        <button 
          disabled={!result.generatedMessage || result.isGeneratingMessage}
          onClick={() => onSend(result.id, result.phone, result.generatedMessage ?? "")}
          className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 shadow-lg shadow-[#25D366]/10"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.795 0-.855.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.173.444.731.953 1.185.656.584 1.209.765 1.382.852.173.087.275.072.376-.043.101-.115.433-.505.548-.678.115-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"></path>
          </svg>
          Send on WhatsApp
        </button>
        <button 
          onClick={() => onSkip(result.id)}
          className="w-full py-2.5 bg-white/5 hover:bg-white/10 active:bg-white/15 text-slate-500 hover:text-slate-300 font-semibold rounded-xl text-sm transition-all border border-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/10"
        >
          Skip Lead
        </button>
      </div>
    </motion.div>
  );
};
