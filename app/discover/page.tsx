"use client";

import { 
  DiscoverLayout, 
  DiscoverHeader, 
  SearchControls, 
  BusinessCard, 
  MapPreview 
} from "@/features/discover";
import { useDiscover } from "@/features/discover/hooks/useDiscover";
import { AnimatePresence } from "framer-motion";

export default function DiscoverPage() {
  const {
    results,
    isSearching,
    searchStatus,
    searchError,
    handleSend,
    handleSkip,
    handleEditMessage,
    handleRegenerateMessage,
  } = useDiscover();

  return (
    <DiscoverLayout>
      <DiscoverHeader />
      
      <SearchControls />

      {/* Results Section */}
      <div className="flex flex-col gap-4">
        {searchError && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">error</span>
            {searchError}
          </div>
        )}

        {!isSearching && results.length === 0 && !searchError && (
          <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-white/5 rounded-3xl text-slate-600 gap-3">
            <span className="material-symbols-outlined text-5xl">search_insights</span>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-400">Ready to discover?</p>
              <p className="text-sm">Search for any business type in any Indian city to find new leads.</p>
            </div>
          </div>
        )}

        {isSearching && results.length === 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-xl">
                <span className="material-symbols-outlined text-primary animate-spin">progress_activity</span>
                <p className="text-slate-100 font-medium">{searchStatus || "Searching..."}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[300px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
              ))}
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm font-medium">
                Found <span className="text-primary font-bold">{results.length}</span> businesses without a website
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {results.map((result) => (
                  <BusinessCard
                    key={result.id}
                    result={result}
                    onSend={handleSend}
                    onSkip={handleSkip}
                    onEdit={handleEditMessage}
                    onRegenerate={handleRegenerateMessage}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <MapPreview />
    </DiscoverLayout>
  );
}
