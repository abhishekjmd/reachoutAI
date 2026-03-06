import React from "react";

export const TemplateBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-orange-600 p-8 text-white shadow-xl shadow-primary/10">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="material-symbols-outlined text-amber-300" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Current Champion</span>
          </div>
          <h2 className="text-3xl font-black mb-2 italic">Best Performer: The Patient Search Angle</h2>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            This template is currently outperforming all other strategies with a <span className="text-white font-bold">24% conversion lift</span>. Try applying this hook to your next campaign.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <button className="bg-white text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:translate-y-[-2px] active:scale-95 transition-all shadow-lg cursor-pointer">
              Apply to Campaign
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-white/20 active:scale-95 transition-all cursor-pointer">
              View Deep Analytics
            </button>
          </div>
        </div>
      </div>
      {/* Decorative Blur */}
      <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl absolute -right-20 -top-20 pointer-events-none"></div>
    </div>
  );
};
