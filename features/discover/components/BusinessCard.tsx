"use client";

import React from "react";

interface BusinessCardProps {
  name: string;
  location: string;
  rating: string;
  phone: string;
  icon: string;
  aiMessage: string;
  hasWebsite?: boolean;
}

export const BusinessCard = ({ name, location, rating, phone, icon, aiMessage, hasWebsite = false }: BusinessCardProps) => {
  return (
    <div className="bg-card-dark rounded-2xl border border-white/5 p-6 flex flex-col hover:border-primary/30 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="size-14 rounded-xl bg-accent-dark border border-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">
            {icon}
          </span>
        </div>
        {!hasWebsite && (
          <span className="px-3 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-rose-500/20">
            NO WEBSITE
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-slate-100 mb-1">{name}</h3>
      <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
        <span className="material-symbols-outlined text-sm">location_on</span>
        <span>{location}</span>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
          <span className="text-slate-200 font-bold text-sm">{rating}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 text-sm">
          <span className="material-symbols-outlined text-sm">call</span>
          <span>{phone}</span>
        </div>
      </div>
      
      <div className="bg-accent-dark rounded-xl p-4 mb-6 border-l-4 border-primary">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-xs">smart_toy</span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">AI Drafted Message</span>
        </div>
        <p className="text-sm text-slate-300 italic leading-relaxed">
          &quot;{aiMessage}&quot;
        </p>
      </div>
      
      <div className="mt-auto space-y-3">
        <button className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.795 0-.855.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.173.444.731.953 1.185.656.584 1.209.765 1.382.852.173.087.275.072.376-.043.101-.115.433-.505.548-.678.115-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"></path>
          </svg>
          Send on WhatsApp
        </button>
        <div className="grid grid-cols-2 gap-3">
          <button className="py-2.5 bg-white/5 hover:bg-white/10 active:bg-white/15 text-slate-300 font-semibold rounded-xl text-sm transition-all border border-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/10">
            Edit Message
          </button>
          <button className="py-2.5 bg-primary/10 hover:bg-primary/20 active:bg-primary/25 text-primary font-semibold rounded-xl text-sm transition-all border border-primary/10 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/20">
            Skip
          </button>
        </div>
      </div>
    </div>

  );
};
