
import React from 'react';

const TrustStrip: React.FC = () => {
  const licenses = [
    { label: "License", value: "Mutual Fund Distributor" },
    { label: "Regulatory", value: "Regulated by AMFI" },
    { label: "Authority", value: "Regulated by SEBI" },
    { label: "Accreditation", value: "NISM Certified X-A/B" }
  ];

  return (
    <div className="bg-white border-y border-[#e9eaeb]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e9eaeb]">
          {licenses.map((license, idx) => (
            <div key={idx} className="py-8 lg:py-10 px-6 lg:px-10 flex flex-col items-start group hover:bg-[#fafafa] transition-colors">
              <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2 lg:mb-3 group-hover:text-[#16D12E] transition-colors">
                {license.label}
              </span>
              <span className="text-xs lg:text-sm font-medium uppercase tracking-[0.2em] text-[#111111]">
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
