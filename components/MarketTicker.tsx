
import React from 'react';

const MarketTicker: React.FC = () => {
  const indices = [
    { name: "NIFTY 50", value: "24,321.45", change: "+0.85%" },
    { name: "SENSEX", value: "80,120.32", change: "+0.72%" },
    { name: "S&P 500", value: "5,982.10", change: "+1.12%" },
    { name: "NASDAQ", value: "19,234.55", change: "+1.45%" },
    { name: "GOLD", value: "$2,654.20", change: "-0.22%" },
    { name: "USD/INR", value: "84.32", change: "+0.04%" },
    { name: "BTC/USD", value: "$98,432", change: "+2.10%" },
    { name: "10Y YIELD", value: "4.21%", change: "-0.02%" }
  ];

  return (
    <div className="w-full bg-[#111111] dark:bg-white overflow-hidden py-3 border-b border-white/5 dark:border-black/5 relative z-[110]">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {indices.map((idx, j) => (
              <div key={j} className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{idx.name}</span>
                <span className="text-[10px] font-mono font-medium text-white dark:text-black">{idx.value}</span>
                <span className={`text-[9px] font-mono ${idx.change.startsWith('+') ? 'text-[#16D12E]' : 'text-red-500'}`}>
                  {idx.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
