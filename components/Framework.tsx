
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

declare const gsap: any;
declare const ScrollTrigger: any;

const ProcessDiagram = ({ step }: { step: string }) => {
  if (step === "01") {
    return (
      <svg className="w-full h-24 mb-10 text-gray-100 dark:text-gray-800" viewBox="0 0 200 80">
        <rect x="10" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <rect x="80" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <rect x="150" y="10" width="40" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <motion.path 
          animate={{ x: [0, 70, 140, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          d="M 30 40 L 40 40" stroke="#16D12E" strokeWidth="2" strokeLinecap="round" 
        />
        <text x="10" y="6" fontSize="5" className="fill-gray-400 dark:fill-gray-600 font-mono">SCAN_NODE_01</text>
        <text x="80" y="6" fontSize="5" className="fill-gray-400 dark:fill-gray-600 font-mono">FILTER_NODE_02</text>
        <text x="150" y="6" fontSize="5" className="fill-gray-400 dark:fill-gray-600 font-mono">EXEC_NODE_03</text>
      </svg>
    );
  }
  if (step === "02") {
    return (
      <svg className="w-full h-24 mb-10 text-gray-100 dark:text-gray-800" viewBox="0 0 200 80">
        <circle cx="100" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <motion.path 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ originX: "100px", originY: "40px" }}
          d="M 100 10 L 100 40 L 130 40" stroke="#16D12E" strokeWidth="1" fill="none" 
        />
        <text x="100" y="80" textAnchor="middle" fontSize="6" className="fill-gray-400 dark:fill-gray-600 font-mono">DYNAMIC_ALLOCATION_MATRIX</text>
      </svg>
    );
  }
  return (
    <svg className="w-full h-24 mb-10 text-gray-100 dark:text-gray-800" viewBox="0 0 200 80">
      <path d="M 10 40 L 190 40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
      {[20, 50, 80, 110, 140, 170].map((x, i) => (
        <motion.circle 
          key={i}
          animate={{ r: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
          cx={x} cy="40" r="1.5" fill="#16D12E" 
        />
      ))}
      <text x="100" y="15" textAnchor="middle" fontSize="6" className="fill-gray-400 dark:fill-gray-600 font-mono">SURVEILLANCE_BEAT_ACTIVE</text>
    </svg>
  );
};

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
    <section id="framework" className="py-24 lg:py-40 bg-[#fafafa] dark:bg-[#050505] border-y border-[#e9eaeb] dark:border-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20 lg:mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#16D12E] block mb-6">Process Protocol</span>
            <h2 className="text-4xl lg:text-6xl font-medium heading-h2 tracking-tight text-[#111111] dark:text-white">
              Investment Framework
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-gray-400 dark:text-gray-500 font-light italic text-lg border-l border-[#16D12E] pl-8 lg:ml-auto transition-colors">
              "A systematic approach to capital allocation ensures clarity when markets are opaque."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e9eaeb] dark:divide-[#1a1a1a] border border-[#e9eaeb] dark:border-[#1a1a1a] bg-white dark:bg-[#0d0d0d] shadow-sm overflow-hidden" ref={gridRef}>
          {steps.map((step) => (
            <div key={step.id} className="framework-card p-10 lg:p-16 group hover:bg-[#111111] dark:hover:bg-white transition-all duration-500 relative overflow-hidden cursor-default">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <ProcessDiagram step={step.id} />

              <span className="block text-4xl lg:text-5xl font-light text-gray-100 dark:text-gray-800 mb-8 group-hover:text-[#16D12E] transition-colors duration-500 number-tracking">
                {step.id}
              </span>
              <h3 className="text-2xl lg:text-3xl font-medium mb-6 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-base lg:text-lg group-hover:text-gray-400 dark:group-hover:text-gray-600 transition-colors">
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
