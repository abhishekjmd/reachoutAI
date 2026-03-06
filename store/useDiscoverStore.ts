import { create } from "zustand";

type SearchResult = {
  id: string;
  businessName: string;
  phone: string;
  website: string | null;
  hasWebsite: boolean;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  category: string;
  latitude: number | null;
  longitude: number | null;
  generatedMessage: string | null;
  isGeneratingMessage: boolean;
};

type DiscoverStore = {
  query: string;
  city: string;
  results: SearchResult[];
  isSearching: boolean;
  searchStatus: string;
  searchError: string | null;
  sentIds: string[];
  skippedIds: string[];
  setQuery: (q: string) => void;
  setCity: (c: string) => void;
  setResults: (r: SearchResult[]) => void;
  setIsSearching: (v: boolean) => void;
  setSearchStatus: (s: string) => void;
  setSearchError: (e: string | null) => void;
  setGeneratedMessage: (id: string, message: string) => void;
  setIsGeneratingMessage: (id: string, v: boolean) => void;
  markAsSent: (id: string) => void;
  markAsSkipped: (id: string) => void;
  getVisibleResults: () => SearchResult[];
};

export const useDiscoverStore = create<DiscoverStore>((set, get) => ({
  query: "",
  city: "",
  results: [],
  isSearching: false,
  searchStatus: "",
  searchError: null,
  sentIds: [],
  skippedIds: [],

  setQuery: (q) => set({ query: q }),
  setCity: (c) => set({ city: c }),
  setResults: (r) => set({ results: r }),
  setIsSearching: (v) => set({ isSearching: v }),
  setSearchStatus: (s) => set({ searchStatus: s }),
  setSearchError: (e) => set({ searchError: e }),

  setGeneratedMessage: (id, message) =>
    set((state) => ({
      results: state.results.map((r) =>
        r.id === id ? { ...r, generatedMessage: message } : r
      ),
    })),

  setIsGeneratingMessage: (id, v) =>
    set((state) => ({
      results: state.results.map((r) =>
        r.id === id ? { ...r, isGeneratingMessage: v } : r
      ),
    })),

  markAsSent: (id) =>
    set((state) => ({
      sentIds: [...state.sentIds, id],
    })),

  markAsSkipped: (id) =>
    set((state) => ({
      skippedIds: [...state.skippedIds, id],
    })),

  getVisibleResults: () => {
    const { results, sentIds, skippedIds } = get();
    return results.filter(
      (r) => !sentIds.includes(r.id) && !skippedIds.includes(r.id)
    );
  },
}));
