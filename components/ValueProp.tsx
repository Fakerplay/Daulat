
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const ValueProp: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.brief-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const themes = [
    {
      id: "01",
      title: "Fundamental Research",
      tagline: "Intellectual Rigor",
      description: "Deep-tier analysis of underlying assets to identify intrinsic value and sustainable growth drivers beyond market sentiment.",
      briefCode: "STRAT-RES-001"
    },
    {
      id: "02",
      title: "Risk-Adjusted Alpha",
      tagline: "Capital Efficiency",
      description: "Our strategies are built to optimize for performance relative to volatility and drawdown risks, ensuring capital preservation first.",
      briefCode: "STRAT-RISK-002"
    },
    {
      id: "03",
      title: "Capital Allocation",
      tagline: "Multi-Asset Strategy",
      description: "Institutional-grade diversification across global equities, fixed income, and specialized alternative investment vehicles.",
      briefCode: "STRAT-ALLOC-003"
    }
  ];

  return (
    <section id="approach" className="py-24 lg:py-48 bg-white dark:bg-[#050505] transition-colors duration-500" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-20 lg:mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#16D12E] block mb-6 lg:mb-8">Value Proposition</span>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-medium heading-h2 leading-[1.05] tracking-tight text-[#111111] dark:text-white transition-colors">
              Where Art Meets <br className="hidden sm:block" />
              <span className="text-[#16D12E]">Asset Allocation</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gray-400 dark:text-gray-500 font-light text-lg lg:text-xl leading-relaxed max-w-sm lg:ml-auto">
              Our philosophy is rooted in the conviction that superior returns are born from disciplined research and structural rigor.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e9eaeb] dark:bg-[#1a1a1a] border border-[#e9eaeb] dark:border-[#1a1a1a] overflow-hidden" ref={gridRef}>
          {themes.map((theme) => (
            <div 
              key={theme.id} 
              className="brief-card bg-white dark:bg-[#0d0d0d] p-8 lg:p-16 flex flex-col min-h-auto lg:min-h-[520px] group transition-all duration-700 relative cursor-default hover:bg-[#111111] dark:hover:bg-white"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
              
              <div className="mb-10 lg:mb-16 flex justify-between items-start">
                <div>
                  <span className="text-sm font-bold tracking-[0.2em] text-[#16D12E] block mb-2">{theme.id}</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-gray-600 group-hover:text-white/40 dark:group-hover:text-black/40 transition-colors">{theme.tagline}</span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-gray-300 dark:text-gray-700 group-hover:text-white/20 dark:group-hover:text-black/20 uppercase">{theme.briefCode}</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl lg:text-4xl font-medium mb-6 lg:mb-10 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500 leading-tight">
                  {theme.title}
                </h3>
                <p className="text-gray-500 font-light text-base lg:text-lg leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors duration-500">
                  {theme.description}
                </p>
              </div>

              <div className="mt-10 lg:mt-16 pt-8 lg:pt-10 border-t border-[#f0f1f2] dark:border-[#1a1a1a] group-hover:border-white/10 dark:group-hover:border-black/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16D12E]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16D12E] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16D12E] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
                  View Dossier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;