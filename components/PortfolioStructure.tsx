
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const PortfolioStructure: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.portfolio-card');
    if (!cards) return;

    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        scale: 0.95,
        y: 30 
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const categories = [
    {
      name: "Equities",
      detail: "Concentrated high-conviction global equity portfolios focused on structural alpha.",
      metrics: "Core Growth / Deep Value"
    },
    {
      name: "Fixed Income",
      detail: "Strategic yield optimization and capital preservation across sovereign and corporate credit.",
      metrics: "Systematic Yield Capture"
    },
    {
      name: "Commodities",
      detail: "Inflation-hedged exposures in hard assets and precious metals to bolster portfolio resilience.",
      metrics: "Macro Resilience"
    },
    {
      name: "Alternatives",
      detail: "Access to private markets, hedge funds, and structured credit for uncorrelated returns.",
      metrics: "Non-Linear Alpha"
    }
  ];

  return (
    <section id="portfolios" className="py-24 lg:py-40 bg-white dark:bg-[#050505] transition-colors duration-500" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-32 text-center lg:text-left mx-auto lg:mx-0">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#16D12E] block mb-4 lg:mb-6">Proprietary Architecture</span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium mb-6 lg:mb-10 heading-h2 tracking-tight text-[#111111] dark:text-white">
            The <span className="text-[#16D12E]">DMAS</span> Portfolio Matrix
          </h2>
          <p className="text-gray-400 dark:text-gray-500 font-light leading-relaxed text-lg lg:text-xl max-w-2xl transition-colors">
            Our Dynamic Multi-Asset Strategy (DMAS) structure provides a robust architectural foundation for wealth preservation and growth across shifting economic cycles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e9eaeb] dark:bg-[#1a1a1a] border border-[#e9eaeb] dark:border-[#1a1a1a] shadow-xl shadow-black/5 overflow-hidden" ref={cardsRef}>
          {categories.map((cat, i) => (
            <div key={i} className="portfolio-card bg-white dark:bg-[#0d0d0d] p-8 lg:p-14 hover:bg-[#111111] dark:hover:bg-white transition-all duration-500 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#16D12E] mb-8 lg:mb-12 block">Structure 0{i+1}</h3>
              <h4 className="text-xl lg:text-2xl font-medium mb-4 lg:mb-6 text-[#111111] dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">{cat.name}</h4>
              <p className="text-gray-400 dark:text-gray-400 font-light leading-relaxed mb-10 lg:mb-16 text-sm lg:text-base group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors duration-500">
                {cat.detail}
              </p>
              <div className="pt-6 lg:pt-8 border-t border-[#f0f1f2] dark:border-[#1a1a1a] group-hover:border-white/10 dark:group-hover:border-black/10 flex items-center justify-between transition-colors duration-500">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] dark:text-white group-hover:text-[#16D12E] transition-colors duration-500">
                  {cat.metrics}
                </span>
                <div className="w-1.5 h-1.5 bg-[#16D12E] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 lg:mt-24 flex flex-col md:flex-row items-center justify-between p-8 lg:p-16 border border-[#e9eaeb] dark:border-[#1a1a1a] bg-white dark:bg-[#0d0d0d] group hover:border-[#16D12E] transition-all duration-700 shadow-sm hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#16D12E]/5 transform translate-x-16 -translate-y-16 rounded-full group-hover:scale-[4] transition-transform duration-1000"></div>
          
          <div className="mb-10 md:mb-0 relative z-10 text-center md:text-left">
            <h4 className="text-2xl lg:text-3xl font-medium text-[#111111] dark:text-white mb-4">Request Institutional Briefing</h4>
            <p className="text-gray-400 dark:text-gray-500 font-light text-base lg:text-lg">Detailed performance metrics available for accredited allocators.</p>
          </div>
          <button className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase bg-[#111111] dark:bg-white text-white dark:text-black w-full md:w-auto px-12 py-6 hover:bg-[#16D12E] hover:text-black transition-all transform hover:scale-[1.05]">
            Access Methodology
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStructure;