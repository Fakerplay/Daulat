
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Framework: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.framework-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const steps = [
    {
      id: "01",
      title: "Research",
      desc: "Exhaustive due diligence and quantitative screening across global markets to filter for high-conviction opportunities."
    },
    {
      id: "02",
      title: "Allocate",
      desc: "Structured capital deployment aligned with bespoke risk profiles and long-horizon compounding objectives."
    },
    {
      id: "03",
      title: "Monitor",
      desc: "Real-time surveillance and periodic rebalancing to maintain optimal exposure in shifting market conditions."
    }
  ];

  return (
    <section id="framework" className="py-24 lg:py-40 bg-[#fafafa] border-y border-[#e9eaeb]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#16D12E] block mb-6">Process Protocol</span>
            <h2 className="text-4xl lg:text-6xl font-medium heading-h2 tracking-tight text-[#111111]">
              Investment Framework
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-gray-400 font-light italic text-lg border-l border-[#16D12E] pl-8 lg:ml-auto">
              "A systematic approach to capital allocation ensures clarity when markets are opaque."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e9eaeb] border border-[#e9eaeb] bg-white shadow-sm overflow-hidden" ref={gridRef}>
          {steps.map((step) => (
            <div key={step.id} className="framework-card p-10 lg:p-16 group hover:bg-[#111111] transition-all duration-500 relative overflow-hidden cursor-default">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <span className="block text-4xl lg:text-5xl font-light text-gray-100 mb-8 group-hover:text-[#16D12E] transition-colors duration-500 number-tracking">
                {step.id}
              </span>
              <h3 className="text-2xl lg:text-3xl font-medium mb-6 text-[#111111] group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed text-base lg:text-lg group-hover:text-gray-400 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
