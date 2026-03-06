import { 
  DiscoverLayout, 
  DiscoverHeader, 
  SearchControls, 
  BusinessCard, 
  MapPreview 
} from "@/features/discover";

const MOCK_BUSINESSES = [
  {
    name: "Dr. Mehta Dental Care",
    location: "Bandra West, Mumbai",
    rating: "4.8",
    phone: "+91 98210 00000",
    icon: "dentistry",
    aiMessage: "Hi Dr. Mehta, noticed your Bandra clinic has amazing reviews but no website! We help top dentists like you get 2x more bookings with a custom site. Interested?",
    hasWebsite: false
  },
  {
    name: "New Life Salon",
    location: "Colaba, Mumbai",
    rating: "4.2",
    phone: "+91 97654 11111",
    icon: "spa",
    aiMessage: "Hi Team New Life, Colaba locals love your spa services! Did you know a simple online booking system could fill those weekday gaps? Love to chat!",
    hasWebsite: false
  },
  {
    name: "City Care Clinic",
    location: "Juhu, Mumbai",
    rating: "4.5",
    phone: "+91 91234 56789",
    icon: "medical_information",
    aiMessage: "Hello City Care! Your patients in Juhu clearly love you. We can help showcase these 5-star reviews on a professional site. Ready to upgrade your online presence?",
    hasWebsite: false
  }
];

export default function DiscoverPage() {
  return (
    <DiscoverLayout>
      <DiscoverHeader />
      
      <SearchControls />

      {/* Filters */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <span className="text-slate-500 text-sm font-medium shrink-0">Quick Filters:</span>
        <button className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold flex items-center gap-2 shrink-0 cursor-pointer transition-all hover:bg-primary/30 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
          <span className="material-symbols-outlined text-sm">public_off</span>
          No Website Only
        </button>
        <button className="px-4 py-1.5 rounded-full bg-accent-dark text-slate-400 border border-white/5 text-sm font-medium hover:border-white/20 active:bg-white/5 transition-all shrink-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/10">
          <span className="material-symbols-outlined text-sm">star</span>
          Top Rated
        </button>
        <button className="px-4 py-1.5 rounded-full bg-accent-dark text-slate-400 border border-white/5 text-sm font-medium hover:border-white/20 active:bg-white/5 transition-all shrink-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/10">
          <span className="material-symbols-outlined text-sm">phone_in_talk</span>
          Verified Phone
        </button>
      </div>


      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_BUSINESSES.map((business, index) => (
          <BusinessCard key={index} {...business} />
        ))}
      </div>

      <MapPreview />
    </DiscoverLayout>
  );
}
