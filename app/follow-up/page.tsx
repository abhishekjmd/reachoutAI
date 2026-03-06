import React from "react";
import { Sidebar } from "@/features/discover";
import { FollowUpCard, FollowUpHeader, EmptyState } from "@/features/follow-up/components";

const MOCK_FOLLOW_UPS = [
  {
    name: "Bright Smile Dental",
    location: "Downtown",
    rating: "4.8",
    phone: "+1 (555) 012-3456",
    sentTime: "26 hours",
    originalMessage: "Hi, I noticed you were looking for new patient acquisition tools to scale your clinic in the downtown area...",
    aiMessage: "Hi there, just following up on our previous conversation regarding your dental practice's growth. Would you have 5 minutes to chat about the patient flow automation we discussed?",
  },
  {
    name: "Sharma Eye Care",
    location: "Westside",
    rating: "4.9",
    phone: "+1 (555) 987-6543",
    sentTime: "31 hours",
    originalMessage: "Good morning Dr. Sharma, I loved your recent article on advanced laser technology. We've helped similar clinics...",
    aiMessage: "Hope you're having a productive week! Just circling back to see if you had a chance to look at the clinical case study I sent over. Would love to hear your thoughts.",
    opacity: true,
  },
];

export default function FollowUpPage() {
  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto ml-[240px]">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <FollowUpHeader pendingCount={MOCK_FOLLOW_UPS.length} />
          
          <div className="flex flex-col gap-6">
            {MOCK_FOLLOW_UPS.map((followUp, index) => (
              <FollowUpCard key={index} {...followUp} />
            ))}
            
            <EmptyState />
          </div>
        </div>
      </main>
    </div>
  );
}
