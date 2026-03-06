"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lead, PipelineColumn, PipelineStatus } from "../types";
import { KanbanColumn } from "./KanbanColumn";
import { LeadDetailModal } from "./LeadDetailModal";

interface KanbanBoardProps {
  leads: Lead[];
}

const COLUMNS: { id: PipelineStatus; label: string; color: string }[] = [
  { id: "sent", label: "Sent", color: "#74B9FF" },
  { id: "replied", label: "Replied", color: "#4ECDC4" },
  { id: "interested", label: "Interested", color: "#A29BFE" },
  { id: "converted", label: "Converted", color: "#eeaa2b" },
  { id: "not_interested", label: "Not Interested", color: "#64748b" },
];

export const KanbanBoard = ({ leads }: KanbanBoardProps) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const getLeadsForColumn = (status: PipelineStatus) => {
    return leads.filter((lead) => lead.status === status);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-6 h-full overflow-x-auto pb-6 scrollbar-hide select-none"
      >
        {COLUMNS.map((col) => (
          <KanbanColumn 
            key={col.id}
            column={{
              ...col,
              leads: getLeadsForColumn(col.id)
            }}
            onCardClick={setSelectedLead}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedLead && (
          <LeadDetailModal 
            lead={selectedLead} 
            onClose={() => setSelectedLead(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
