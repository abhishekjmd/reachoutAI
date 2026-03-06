"use client";

import React from "react";

import { Sidebar } from "@/features/discover";
import { FollowUpCard, FollowUpHeader, EmptyState } from "@/features/follow-up/components";
import { FollowUp } from "@/features/follow-up/types";

const MOCK_FOLLOW_UPS: FollowUp[] = [
  {
    id: "1",
    lead: {
      id: "l1",
      businessName: "Bright Smile Dental",
      ownerName: "Dr. Smith",
      phone: "+1 (555) 012-3456",
      area: "Downtown",
      city: "Mumbai",
      category: "Dentist",
      rating: 4.8,
      reviewCount: 120,
      sentAt: new Date().toISOString(),
      status: "sent",
      messageSent: "Hi, I noticed you were looking for new patient acquisition tools...",
      followUpSent: false,
      followUpDue: true,
    },
    originalMessage: "Hi, I noticed you were looking for new patient acquisition tools to scale your clinic in the downtown area...",
    followUpMessage: "Hi there, just following up on our previous conversation regarding your dental practice's growth. Would you have 5 minutes to chat about the patient flow automation we discussed?",
    hoursElapsed: 26,
    status: "pending",
    dueAt: new Date().toISOString(),
  },
  {
    id: "2",
    lead: {
      id: "l2",
      businessName: "Sharma Eye Care",
      ownerName: "Dr. Sharma",
      phone: "+1 (555) 987-6543",
      area: "Westside",
      city: "Delhi",
      category: "Optometrist",
      rating: 4.9,
      reviewCount: 85,
      sentAt: new Date().toISOString(),
      status: "sent",
      messageSent: "Good morning Dr. Sharma, I loved your recent article...",
      followUpSent: false,
      followUpDue: true,
    },
    originalMessage: "Good morning Dr. Sharma, I loved your recent article on advanced laser technology. We've helped similar clinics...",
    followUpMessage: "Hope you're having a productive week! Just circling back to see if you had a chance to look at the clinical case study I sent over. Would love to hear your thoughts.",
    hoursElapsed: 31,
    status: "pending",
    dueAt: new Date().toISOString(),
  },
];

export default function FollowUpPage() {
  const handleSend = (id: string) => console.log("Send", id);
  const handleSnooze = (id: string) => console.log("Snooze", id);
  const handleNotInterested = (id: string) => console.log("Not interested", id);

  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto ml-[240px]">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <FollowUpHeader pendingCount={MOCK_FOLLOW_UPS.length} />
          
          <div className="flex flex-col gap-6">
            {MOCK_FOLLOW_UPS.map((followUp) => (
              <FollowUpCard 
                key={followUp.id} 
                followUp={followUp}
                onSend={handleSend}
                onSnooze={handleSnooze}
                onNotInterested={handleNotInterested}
              />
            ))}
            
            <EmptyState />
          </div>
        </div>
      </main>
    </div>
  );
}
