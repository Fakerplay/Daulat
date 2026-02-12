
import React from 'react';

const TrustStrip: React.FC = () => {
  const licenses = [
    { label: "License", value: "Mutual Fund Distributor" },
    { label: "Regulatory", value: "Regulated by AMFI" },
    { label: "Authority", value: "Regulated by SEBI" },
    { label: "Accreditation", value: "NISM Certified X-A/B" }
  ];

  return (
    <div className="bg-white dark:bg-[#050505] border-y border-[#e9eaeb] dark:border-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e9eaeb] dark:divide-[#1a1a1a]">
          {licenses.map((license, idx) => (
            <div key={idx} className="py-8 lg:py-10 px-6 lg:px-10 flex flex-col items-start group hover:bg-[#fafafa] dark:hover:bg-[#0d0d0d] transition-colors">
              <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-600 mb-2 lg:mb-3 group-hover:text-[#16D12E] transition-colors">
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