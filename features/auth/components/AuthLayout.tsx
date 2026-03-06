import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 coral-glow pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      {/* Container */}
      <main className="relative z-10 w-full max-w-[420px] px-4">
        <div className="bg-card-dark border border-border-dark rounded-xl p-8 shadow-2xl">
          {children}
        </div>
      </main>
    </div>
  );
};
