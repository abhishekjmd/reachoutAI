"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FollowUp } from "../types";
import { FollowUpCard } from "./FollowUpCard";

interface FollowUpListProps {
  followUps: FollowUp[];
  onSend: (id: string) => void;
  onSnooze: (id: string) => void;
  onNotInterested: (id: string) => void;
}

export const FollowUpList = ({ followUps, onSend, onSnooze, onNotInterested }: FollowUpListProps) => {
  if (followUps.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="size-24 rounded-full bg-primary/10 flex items-center justify-center mb-6"
        >
          <motion.span 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            className="material-symbols-outlined text-5xl text-primary font-black"
          >
            check_circle
          </motion.span>
        </motion.div>
        <h2 className="text-2xl font-black text-slate-100 mb-2">You're all caught up!</h2>
        <p className="text-slate-500 font-medium max-w-xs">
          No follow-ups pending right now. Great job staying on top of your outreach!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-12">
      <AnimatePresence mode="popLayout">
        {followUps.map((followUp) => (
          <FollowUpCard
            key={followUp.id}
            followUp={followUp}
            onSend={onSend}
            onSnooze={onSnooze}
            onNotInterested={onNotInterested}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
