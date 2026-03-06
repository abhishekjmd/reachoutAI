export type PipelineStatus = 
  | "sent" 
  | "replied" 
  | "interested" 
  | "converted" 
  | "not_interested";

export type Lead = {
  id: string;
  businessName: string;
  ownerName: string;
  phone: string;
  area: string;
  city: string;
  category: string;
  rating: number;
  reviewCount: number;
  sentAt: string;        // ISO date string
  repliedAt?: string;
  convertedAt?: string;
  revenue?: number;
  status: PipelineStatus;
  messageSent: string;
  notes?: string;
  followUpSent: boolean;
  followUpDue: boolean;  // true if 24hrs passed, no reply
};

export type PipelineColumn = {
  id: PipelineStatus;
  label: string;
  color: string;        // hex
  leads: Lead[];
};
