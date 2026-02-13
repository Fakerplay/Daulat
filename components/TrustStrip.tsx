
import React from 'react';

const TrustStrip: React.FC = () => {
  const licenses = [
    { 
      label: "License", 
      value: "Mutual Fund Distributor",
      icon: (
        <svg className="w-5 h-5 mb-4 text-[#16D12E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: "Regulatory", 
      value: "Regulated by AMFI",
      icon: (
        <svg className="w-5 h-5 mb-4 text-[#16D12E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      label: "Authority", 
      value: "Regulated by SEBI",
      icon: (
        <svg className="w-5 h-5 mb-4 text-[#16D12E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    { 
      label: "Accreditation", 
      value: "NISM Certified X-A/B",
      icon: (
        <svg className="w-5 h-5 mb-4 text-[#16D12E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white dark:bg-[#050505] border-y border-[#e9eaeb] dark:border-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e9eaeb] dark:divide-[#1a1a1a]">
          {licenses.map((license, idx) => (
            <div key={idx} className="py-10 lg:py-14 px-8 lg:px-12 flex flex-col items-start group hover:bg-[#fafafa] dark:hover:bg-[#0d0d0d] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#16D12E] group-hover:h-full transition-all duration-500"></div>
              {license.icon}
              <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-600 mb-2 lg:mb-3 group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                {license.label}
              </span>
              <span className="text-xs lg:text-sm font-medium uppercase tracking-[0.2em] text-[#111111] dark:text-white transition-colors">
                {license.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
