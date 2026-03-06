import React from "react";
import { Sidebar } from "@/features/discover";
import { 
  AnalyticsHeader, 
  StatsGrid, 
  CategoryChart, 
  ConversionFunnel, 
  ActivityChart, 
  RecentConversionsTable,
  TopCities
} from "@/features/analytics";


export default function AnalyticsPage() {
  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto ml-[240px] scrollbar-hide">
        <div className="max-w-7xl mx-auto p-8">
          <AnalyticsHeader />
          
          <StatsGrid />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CategoryChart />
            <ConversionFunnel />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ActivityChart />
            <TopCities />
          </div>
          
          <RecentConversionsTable />
          
          {/* Revenue Summary */}
          <div className="flex justify-end items-center gap-4 bg-primary/5 p-6 rounded-xl border border-primary/10 group hover:border-primary/30 transition-all">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Total Revenue Generated</p>
              <p className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-right">₹77,000</p>
            </div>
            <div className="size-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
