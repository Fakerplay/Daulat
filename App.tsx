
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import MarketTicker from './components/MarketTicker';
import ValueProp from './components/ValueProp';
import Framework from './components/Framework';
import Leadership from './components/Leadership';
import PortfolioStructure from './components/PortfolioStructure';
import Footer from './components/Footer';

declare const gsap: any;
declare const ScrollTrigger: any;

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#16D12E] selection:text-white dark:bg-[#050505] transition-colors duration-500">
      <MarketTicker />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero isDarkMode={isDarkMode} />
        <TrustStrip />
        <ValueProp />
        <Framework />
        <Leadership />
        <PortfolioStructure />
        
        <section className="py-24 lg:py-40 bg-white dark:bg-[#050505] border-t border-[#e9eaeb] dark:border-[#1a1a1a]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-[#fafafa] dark:bg-[#0d0d0d] border border-[#e9eaeb] dark:border-[#1a1a1a] p-10 lg:p-20 text-center relative group overflow-hidden transition-all duration-700 hover:bg-[#111111] dark:hover:bg-white hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#16D12E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <h2 className="text-4xl md:text-7xl font-medium mb-8 lg:mb-10 heading-h2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                Capital, <span className="text-[#16D12E]">Thoughtfully</span> Managed.
              </h2>
              <p className="text-gray-400 text-lg md:text-2xl mb-12 lg:mb-16 max-w-2xl mx-auto font-light leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors duration-500">
                Bespoke strategies designed for the complexities of modern wealth creation and preservation.
              </p>
              <button className="bg-[#111111] dark:bg-white text-white dark:text-black w-full sm:w-auto px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase transition-all transform hover:bg-[#16D12E] dark:hover:bg-[#16D12E] hover:text-black hover:scale-[1.05] active:scale-[0.98]">
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
