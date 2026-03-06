import React from "react";

const CONVERSIONS = [
  { business: "Bright Dental Care", city: "Mumbai", cat: "Dentists", sent: 12, value: "₹12,000", catColor: "bg-blue-500/10 text-blue-500" },
  { business: "Iron & Steel Gym", city: "Bangalore", cat: "Gyms", sent: 8, value: "₹8,500", catColor: "bg-orange-500/10 text-orange-500" },
  { business: "Glow Hair & Spa", city: "Delhi", cat: "Salons", sent: 15, value: "₹15,000", catColor: "bg-purple-500/10 text-purple-500" },
  { business: "Zen Wellness", city: "Hyderabad", cat: "Spas", sent: 22, value: "₹22,000", catColor: "bg-teal-500/10 text-teal-500" },
];

export const RecentConversionsTable = () => {
  return (
    <div className="bg-white dark:bg-card-dark rounded-xl border border-primary/5 overflow-hidden mb-8 shadow-xl shadow-black/20">
      <div className="p-6 border-b border-primary/5 flex items-center justify-between">
        <h3 className="text-lg font-bold dark:text-slate-100">Recent Conversions</h3>
        <button className="text-xs font-bold text-primary hover:underline cursor-pointer">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-primary/5 text-slate-500">
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Business</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">City</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Category</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Sent</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Converted</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px]">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {CONVERSIONS.map((conv, i) => (
              <tr key={i} className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 font-medium dark:text-slate-200 group-hover:text-primary transition-colors">{conv.business}</td>
                <td className="px-6 py-4 text-slate-500">{conv.city}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${conv.catColor} text-[10px] font-bold uppercase`}>{conv.cat}</span>
                </td>
                <td className="px-6 py-4 text-slate-500 font-mono italic">{conv.sent}</td>
                <td className="px-6 py-4 text-emerald-500 font-bold">Yes</td>
                <td className="px-6 py-4 font-bold dark:text-slate-100">{conv.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
