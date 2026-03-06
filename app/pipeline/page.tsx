import React from "react";
import { Sidebar } from "@/features/discover";
import { PipelineHeader, StatsPills, KanbanBoard } from "@/features/pipeline/components";
import { MOCK_LEADS } from "@/features/pipeline/data/mockLeads";

export default function PipelinePage() {
  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden ml-[240px]">
        <PipelineHeader />
        
        <div className="px-8 flex-1 flex flex-col overflow-hidden">
          <StatsPills />
          
          <div className="mt-8 flex-1 overflow-hidden">
            <KanbanBoard leads={MOCK_LEADS} />
          </div>
        </div>

        <footer className="p-6 flex justify-center border-t border-white/5 bg-sidebar-dark/30">
          <p className="text-slate-600 text-[11px] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span>
            Drag and drop leads to move them between stages. AI agents automatically update these based on conversation sentiment.
          </p>
        </footer>
      </main>
    </div>
  );
}

