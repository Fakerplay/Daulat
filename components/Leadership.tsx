
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Leadership: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelector('.leader-image'), 
      { opacity: 0, scale: 1.05 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%"
        }
      }
    );

    gsap.fromTo(el.querySelector('.leader-content'), 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="leadership" className="py-24 lg:py-48 bg-white dark:bg-[#050505] transition-colors duration-500" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 leader-image relative group overflow-hidden order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#f7f7f7] dark:bg-[#111111] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105 shadow-2xl border border-[#e9eaeb] dark:border-[#1a1a1a]">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQGs6T0x0-Q0Rw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691563630685?e=1746662400&v=beta&t=o_K_4YV6R8Y3zW6t5t5v5v5v5v5v5v5v5v5v5v5v5v5" 
                alt="Varun Fatehpuria" 
                className="w-full h-full object-cover object-[50%_20%]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Structural Marker */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end z-10">
              <div className="bg-[#111111] dark:bg-white px-5 py-3 border border-white/10 dark:border-black/10 shadow-2xl">
                <span className="text-[9px] font-bold tracking-[0.5em] text-white dark:text-black uppercase block mb-1">Founder Verified</span>
                <div className="w-10 h-[1.5px] bg-[#16D12E]"></div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-7 leader-content pt-6 lg:pt-10 order-1 lg:order-2">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-4 mb-8 lg:mb-12">
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#16D12E]">Leadership Protocol</span>
              </div>
              
              <h2 className="text-5xl lg:text-[100px] font-bold mb-10 lg:mb-14 heading-h1 text-[#111111] dark:text-white leading-[1.1] tracking-tighter transition-colors">Varun Fatehpuria</h2>
              
              <div className="flex items-center gap-8 mb-12 lg:mb-16">
                <span className="text-lg font-medium text-[#111111] dark:text-white uppercase tracking-[0.3em]">Founder & CEO</span>
                <div className="w-16 h-[1.5px] bg-[#111111] dark:bg-white opacity-10"></div>
              </div>

              <div className="mb-14 lg:mb-20">
                <p className="text-gray-400 dark:text-gray-500 font-light text-2xl lg:text-4xl leading-relaxed italic">
                  "We believe institutional-grade capital management shouldn't be limited to sovereign funds. Our mission is to bring the same <span className="text-[#111111] dark:text-white not-italic font-normal">rigor, transparency, and structure</span> to private wealth."
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 border-t border-[#f0f0f0] dark:border-[#1a1a1a] pt-14 lg:pt-20">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 dark:text-gray-600 mb-8 transition-colors">Professional Experience</h4>
                  <ul className="space-y-5 lg:space-y-8">
                    {["Blackstone Private Equity (Hong Kong)", "Bloomberg LP (Hong Kong)", "Real Estate Development"].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 text-base font-medium text-[#111111] dark:text-white">
                        <div className="w-2 h-2 bg-[#16D12E] mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 dark:text-gray-600 mb-8 transition-colors">Accreditations</h4>
                  <ul className="space-y-5 lg:space-y-8">
                    {["HKUST Finance & Info Systems", "NISM Series X-A and X-B", "Regulated by AMFI & SEBI"].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 text-base font-medium text-[#111111] dark:text-white">
                        <div className="w-2 h-2 bg-[#111111] dark:bg-white mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;