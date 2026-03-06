import { Lead } from "@/features/pipeline";

export type FollowUpStatus = "pending" | "sent" | "snoozed";

export type FollowUp = {
  id: string;
  lead: Lead;
  originalMessage: string;
  followUpMessage: string;
  hoursElapsed: number;
  status: FollowUpStatus;
  snoozedUntil?: string;
  dueAt: string;        // ISO string
};
