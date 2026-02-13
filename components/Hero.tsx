
import React, { useEffect, useRef, useState } from 'react';
import CapitalArchitecture from './CapitalArchitecture';
import { motion } from 'framer-motion';

declare const gsap: any;

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(128452.42);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(v => v + (Math.random() - 0.45) * 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = titleRef.current;
      if (title) {
        const text = title.innerText;
        title.innerHTML = text.split(' ').map(word => 
          `<span class="inline-block overflow-hidden py-6 -my-6 mr-[0.25em]"><span class="word inline-block">${word}</span></span>`
        ).join(' ');

        gsap.from('.word', {
          y: '105%',
          duration: 1.4,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.2
        });
      }

      gsap.fromTo([subtitleRef.current, actionsRef.current], 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.9 }
      );

      if (window.innerWidth > 1024) {
        gsap.to('.hero-visual-wrapper', {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white dark:bg-[#050505] pt-16 pb-24 lg:pt-32 lg:pb-60 overflow-hidden transition-colors duration-500">
      {/* Structural Data Layer */}
      <div className="absolute top-0 right-0 p-10 hidden xl:flex flex-col items-end gap-2 opacity-10 dark:opacity-20 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase">LATENCY: 14MS</span>
        <span className="text-[10px] font-mono tracking-widest uppercase">NODE_ACTIVE: ASIA_PACIFIC</span>
        <span className="text-[10px] font-mono tracking-widest uppercase">ENCRYPTION: AES_256_GCM</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* Left Column: Core Message */}
        <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-10">
          <div className="flex items-center gap-5 mb-10 lg:mb-14">
            <div className="w-12 h-[2.5px] bg-[#16D12E]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#16D12E]">Institutional Rigor</span>
              <span className="text-[8px] font-mono text-gray-300 uppercase mt-1">Status: Market_Open</span>
            </div>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-7xl lg:text-[104px] font-bold mb-10 lg:mb-16 heading-h1 text-[#111111] dark:text-white leading-[1.2] tracking-tight max-w-4xl"
          >
            Compounding with Depth.
          </h1>
          
          <div ref={subtitleRef} className="max-w-xl border-l border-[#f0f0f0] dark:border-[#1a1a1a] pl-6 lg:pl-12 mb-12 lg:mb-20 relative">
            {/* Fintech Visual Decorator */}
            <div className="absolute -left-[1px] top-0 h-1/3 w-[3px] bg-[#16D12E]"></div>
            
            <p className="text-xl lg:text-3xl text-gray-400 dark:text-gray-500 leading-relaxed font-light">
              Bespoke investment strategies designed for <span className="text-[#111111] dark:text-white font-normal">long-term risk-adjusted growth</span> across public and private markets.
            </p>
          </div>
          
          <div ref={actionsRef} className="flex flex-wrap items-center gap-6 lg:gap-10 w-full sm:w-auto">
            <button className="bg-[#111111] dark:bg-white text-white dark:text-black w-full sm:w-auto px-14 py-7 text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[#16D12E] dark:hover:bg-[#16D12E] hover:text-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group relative overflow-hidden">
              <span className="relative z-10">The Strategy</span>
              <div className="absolute inset-0 bg-[#16D12E] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </button>
            <button className="group flex items-center justify-center sm:justify-start gap-4 text-[#111111] dark:text-white py-4 w-full sm:w-auto text-[10px] font-bold tracking-[0.4em] uppercase hover:text-[#16D12E] transition-all">
              Start Conversation
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right Column: Interactive Architecture */}
        <div className="lg:col-span-5 hero-visual-wrapper w-full pt-12 lg:pt-0">
          <div className="relative">
            <div className="aspect-square sm:aspect-[4/5] bg-white dark:bg-[#050505] border border-[#e9eaeb] dark:border-[#1a1a1a] p-1 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] relative overflow-hidden group">
              <CapitalArchitecture isDarkMode={isDarkMode} />
              
              {/* Floating Fintech Widget */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute top-10 right-10 bg-white/80 dark:bg-black/80 backdrop-blur-md p-6 border border-[#e9eaeb] dark:border-[#1a1a1a] hidden sm:block shadow-xl z-20"
              >
                <div className="flex items-center justify-between mb-4 gap-12">
                  <span className="text-[8px] font-bold tracking-widest text-gray-400 uppercase">Live_Portfolio_Value</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16D12E] animate-ping"></div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-light text-gray-400">$</span>
                  <span className="text-xl font-bold tracking-tighter text-[#111111] dark:text-white font-mono">
                    {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <motion.div 
                    animate={{ width: ["10%", "60%", "45%", "80%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="h-full bg-[#16D12E]"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Real-time Data Float (Desktop only) */}
            <div className="absolute -bottom-10 -left-10 bg-[#111111] dark:bg-white text-white dark:text-black p-10 border border-white/10 dark:border-black/10 hidden xl:block shadow-3xl z-20">
              <p className="text-[9px] font-bold tracking-[0.4em] text-gray-500 mb-6 uppercase">Alpha Performance</p>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between gap-20 items-center">
                  <span className="text-[11px] font-light text-gray-400 dark:text-gray-500 uppercase tracking-tighter">Market Index</span>
                  <span className="text-xs font-bold text-[#16D12E]">+14.2%</span>
                </div>
                <div className="w-full h-[1px] bg-white/5 dark:bg-black/5"></div>
                <div className="flex justify-between gap-20 items-center">
                  <span className="text-[11px] font-light text-gray-400 dark:text-gray-500 uppercase tracking-tighter">Portfolio Vol</span>
                  <span className="text-xs font-bold text-white dark:text-black">0.08</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 flex justify-between items-end border-t border-[#f0f0f0] dark:border-[#1a1a1a] pt-10 lg:pt-12 transition-colors">
            <div className="flex flex-col gap-2">
              <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-gray-300 dark:text-gray-600">Architecture V2.0</p>
              <p className="text-sm font-medium text-[#111111] dark:text-white tracking-tight uppercase">Proprietary DMAS Protocol</p>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-gray-300 dark:text-gray-600">System Status</p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#16D12E] animate-pulse"></div>
                <p className="text-sm font-bold text-[#111111] dark:text-white">OPTIMIZED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;