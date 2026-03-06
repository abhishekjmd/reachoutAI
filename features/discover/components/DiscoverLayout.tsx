import React from "react";
import { Sidebar } from "./Sidebar";

interface DiscoverLayoutProps {
  children: React.ReactNode;
}

export const DiscoverLayout = ({ children }: DiscoverLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <Sidebar />
      <main className="flex-1 ml-[240px] p-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
