"use client";

import { useMemo, useState } from "react";
import { MOCK_LEADS } from "@/features/pipeline/data/mockLeads";
import { FollowUp, FollowUpStatus } from "../types";

export const useFollowUps = () => {
  const [snoozedIds, setSnoozedIds] = useState<Set<string>>(new Set());
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());

  const followUps = useMemo(() => {
    const now = new Date();
    
    return MOCK_LEADS
      .filter((lead) => {
        if (lead.status !== "sent") return false;
        if (!lead.followUpDue) return false;
        if (lead.followUpSent) return false;
        if (snoozedIds.has(lead.id)) return false;
        if (dismissedIds.has(lead.id)) return false;
        
        return true;
      })
      .map((lead): FollowUp => {
        const sentDate = new Date(lead.sentAt);
        const hoursElapsed = Math.floor((now.getTime() - sentDate.getTime()) / (1000 * 60 * 60));
        
        return {
          id: lead.id,
          lead,
          originalMessage: lead.messageSent,
          followUpMessage: `Hi ${lead.ownerName}, just following up on my previous message regarding ${lead.businessName}. Would love to hear your thoughts!`,
          hoursElapsed,
          status: "pending",
          dueAt: new Date(sentDate.getTime() + 24 * 60 * 60 * 1000).toISOString()
        };
      })
      .sort((a, b) => b.hoursElapsed - a.hoursElapsed);
  }, [snoozedIds, dismissedIds]);

  const markSent = (id: string) => {
    setDismissedIds((prev) => new Set(prev).add(id));
  };

  const snooze = (id: string) => {
    setSnoozedIds((prev) => new Set(prev).add(id));
  };

  const markNotInterested = (id: string) => {
    setDismissedIds((prev) => new Set(prev).add(id));
  };

  return {
    followUps,
    pendingCount: followUps.length,
    markSent,
    snooze,
    markNotInterested
  };
};
