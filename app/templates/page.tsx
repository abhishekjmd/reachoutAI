import React from "react";
import { Sidebar } from "@/features/discover";
import { 
  TemplateHeader, 
  TemplateBanner, 
  TemplateFilters, 
  TemplateCard 
} from "@/features/templates";

const TEMPLATES = [
  {
    title: "The Google Reviews Hook",
    tags: ["Local SEO"],
    type: "Initial",
    usedCount: "1.2k times",
    replyRate: "18.4%",
    content: (
      <>
        &quot;Hey <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[First Name]</span>, I just saw <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[Business Name]</span>&apos;s latest review. You guys are crushing it! Quick question about your <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[X]</span> strategy...&quot;
      </>
    )
  },
  {
    title: "The Patient Search Angle",
    tags: ["Medical"],
    type: "Initial",
    usedCount: "4.8k times",
    replyRate: "24.2%",
    isBestPerformer: true,
    content: (
      <>
        &quot;Hi <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[First Name]</span>, I was searching for <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[X]</span> services in your area and noticed <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[Business Name]</span> isn&apos;t showing up for...&quot;
      </>
    )
  },
  {
    title: "The Competitor Angle",
    tags: ["SaaS"],
    type: "Cold",
    usedCount: "940 times",
    replyRate: "12.1%",
    content: (
      <>
        &quot;Notice you&apos;re using <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[X]</span> for your team at <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[Business Name]</span>. Most folks find it hard to scale because of...&quot;
      </>
    )
  },
  {
    title: "The Simple Follow-up",
    tags: ["Generic"],
    type: "Nurture",
    usedCount: "12.4k times",
    replyRate: "31.5%",
    content: (
      <>
        &quot;Quick bump on this <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[First Name]</span> - did you get a chance to look at that <span className="inline-flex px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">[X]</span> breakdown I sent?&quot;
      </>
    )
  }
];

export default function TemplatesPage() {
  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden ml-[240px]">
        <TemplateHeader />
        
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          <TemplateBanner />
          
          <TemplateFilters />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-10">
            {TEMPLATES.map((template, index) => (
              <TemplateCard key={index} {...template} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
