
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ValueProp from './components/ValueProp';
import Framework from './components/Framework';
import Leadership from './components/Leadership';
import PortfolioStructure from './components/PortfolioStructure';
import Footer from './components/Footer';

declare const gsap: any;
declare const ScrollTrigger: any;

const App: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Custom Cursor logic - Disable on mobile
    if (window.innerWidth > 1024) {
      const cursor = document.createElement('div');
      cursor.className = 'cursor-follower';
      document.body.appendChild(cursor);

      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.3,
          ease: "power2.out",
          opacity: 1
        });
      };

      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
        cursor.remove();
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#16D12E] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <ValueProp />
        <Framework />
        <Leadership />
        <PortfolioStructure />
        
        {/* Closing Section Refined */}
        <section className="py-24 lg:py-40 bg-white border-t border-[#e9eaeb]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-[#fafafa] border border-[#e9eaeb] p-10 lg:p-20 text-center relative group overflow-hidden transition-all duration-700 hover:bg-[#111111] hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <h2 className="text-4xl md:text-7xl font-medium mb-8 lg:mb-10 heading-h2 group-hover:text-white transition-colors duration-500">
                Capital, <span className="text-[#16D12E]">Thoughtfully</span> Managed.
              </h2>
              <p className="text-gray-400 text-lg md:text-2xl mb-12 lg:mb-16 max-w-2xl mx-auto font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                Bespoke strategies designed for the complexities of modern wealth creation and preservation.
              </p>
              <button className="bg-[#111111] text-white w-full sm:w-auto px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase transition-all transform hover:bg-[#16D12E] hover:text-black hover:scale-[1.05] active:scale-[0.98] group-hover:bg-white group-hover:text-black">
                Start a Conversation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
