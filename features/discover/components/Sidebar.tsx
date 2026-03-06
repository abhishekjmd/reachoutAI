"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] bg-sidebar-dark border-r border-primary/10 flex flex-col fixed h-full overflow-y-auto z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined font-bold">rocket_launch</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-slate-100 text-lg font-bold leading-none">ReachOut</h1>
          <p className="text-primary/70 text-xs font-medium uppercase tracking-wider">AI Outreach</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <Link 
          href="/discover" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            pathname === '/discover' ? 'bg-primary/20 text-primary font-semibold' : 'text-slate-400 hover:bg-white/5 active:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined">explore</span>
          <span>Discover</span>
        </Link>
        <Link 
          href="/pipeline" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            pathname === '/pipeline' ? 'bg-primary/20 text-primary font-semibold' : 'text-slate-400 hover:bg-white/5 active:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined">view_kanban</span>
          <span>Pipeline</span>
        </Link>
        <Link 
          href="/follow-up" 
          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            pathname === '/follow-up' ? 'bg-primary/20 text-primary font-semibold' : 'text-slate-400 hover:bg-white/5 active:bg-white/10'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === '/follow-up' ? "'FILL' 1" : "'FILL' 0" }}>chat_bubble</span>
            <span>Follow-ups</span>
          </div>
          <span className="bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span>
        </Link>

        <Link 
          href="/analytics" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            pathname === '/analytics' ? 'bg-primary/20 text-primary font-semibold' : 'text-slate-400 hover:bg-white/5 active:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined">analytics</span>
          <span>Analytics</span>
        </Link>
        <Link 
          href="/templates" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
            pathname === '/templates' ? 'bg-primary/20 text-primary font-semibold' : 'text-slate-400 hover:bg-white/5 active:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: pathname === '/templates' ? "'FILL' 1" : "'FILL' 0" }}>description</span>
          <span>Templates</span>
        </Link>


      </nav>

      <div className="p-4 mt-auto">
        <button className="w-full py-3 bg-primary hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer outline-none">
          <span className="material-symbols-outlined text-sm">add_circle</span>
          New Campaign
        </button>

        <div className="mt-6 flex items-center gap-3 p-2 border-t border-white/5">
          <div className="size-10 rounded-full bg-accent-dark border border-white/10 overflow-hidden">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi2dRLU-2MotbqwWXR96YYK4z4cDWckuyxUfyhkswyoOUwSiy-kbgsZbTMjHMOcZMDVjBHpjoHf_1JuZLhK6rmZXcahGGbSvXj-doS0Xpc-uuiAFXOEffflZCgtLhKs_Asod_QxnHcEH829gfCZNFCX6DicRWsSH-O21c529pZKDmz4vGYRysH5RoD2wLM1HEHvJYWsX4eX8ZlH-m9YRv5kJkPFuUvVHSd-gn0rwRlNqFW7MaGaHPvLiQaUBuVcPOPCiS2OFyZIH0" 
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-100">Alex Rivera</p>
            <p className="text-xs text-slate-500">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
