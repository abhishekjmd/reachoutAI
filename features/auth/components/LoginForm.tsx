"use client";

import React from "react";

import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export const LoginForm = () => {
  return (
    <>
      <BrandLogo />
      
      {/* Header Text */}
      <div className="text-center mb-8">
        <h2 className="font-syne text-2xl font-bold text-slate-100 mb-2">Welcome back</h2>
        <p className="text-slate-400 text-sm font-dm-sans">Sign in to start finding and reaching businesses</p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5 px-1">Email</label>
          <input 
            className="w-full h-12 bg-input-dark border border-border-dark rounded-lg px-4 text-slate-100 placeholder:text-slate-600 focus:ring-1 focus:ring-primary/50 focus:border-primary outline-none transition-all" 
            placeholder="name@company.com" 
            type="email" 
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5 px-1">Password</label>
          <input 
            className="w-full h-12 bg-input-dark border border-border-dark rounded-lg px-4 text-slate-100 placeholder:text-slate-600 focus:ring-1 focus:ring-primary/50 focus:border-primary outline-none transition-all" 
            placeholder="••••••••" 
            type="password" 
          />
        </div>
        <div className="pt-2">
          <button 
            className="w-full h-12 bg-primary hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/50 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer outline-none" 
            type="submit"
          >
            <span>Sign In</span>
            <span className="material-symbols-outlined text-sm caps-none">arrow_forward</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative py-4 flex items-center">
          <div className="flex-grow border-t border-border-dark"></div>
          <span className="flex-shrink mx-4 text-slate-600 text-xs uppercase tracking-widest">or</span>
          <div className="flex-grow border-t border-border-dark"></div>
        </div>

        {/* Google Button */}
        <button 
          className="w-full h-12 bg-transparent border border-border-dark hover:bg-white/5 active:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/20 text-slate-200 font-medium rounded-lg flex items-center justify-center gap-3 transition-all cursor-pointer outline-none" 
          type="button"
        >

          <img 
            alt="Google Logo" 
            className="size-5" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDTcDzWG9b1KspdOh-1dVPXEFWBBWcFOHfkos_HHTOhrlkTYd78rBqDGygogSTYYBmHsM4Rja2RGcMa2ip8ugBO9Mbr6UYI2ymShG06bCOPxkDfERwAcHgwEmQT7C3kTgPs433wd4yHt7E8yDRvMabpkkf03d6pNIXA5nldBF-fCH3ilhiPAAGCLAPBZbC_HwFNiN1p-pTBT15G58dpEtd28NK4Wzv08AFCog0xUu0H4z8r3mUcMQMCFAWRCnoIyOuyFXUQEfjd0" 
          />
          <span>Continue with Google</span>
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
          No account? 
          <Link href="/signup" className="text-primary hover:underline font-semibold ml-1">
            Try Demo Free
          </Link>
        </p>
      </div>
    </>
  );
};
