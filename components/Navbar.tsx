
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Approach', 'Framework', 'Leadership', 'Portfolios'];

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-[#e9eaeb]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer z-[110]">
          <div className="w-8 h-8 bg-[#111111] group-hover:bg-[#16D12E] transition-all duration-500 flex items-center justify-center transform group-hover:rotate-45">
            <span className="text-white group-hover:text-black font-bold text-xs transition-colors group-hover:-rotate-45">D</span>
          </div>
          <span className="text-lg font-semibold tracking-tight uppercase text-[#111111]">
            Daulat <span className="font-light">Wealth</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#111111] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#16D12E] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="bg-[#111111] text-white px-8 py-3 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#16D12E] hover:text-black transition-all transform hover:scale-[1.05]">
            Portal
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#111111] z-[110] relative"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="w-full h-[1.5px] bg-black block origin-center"
            />
            <motion.span 
              animate={isOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
              className="w-2/3 h-[1.5px] bg-black block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -10, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="w-full h-[1.5px] bg-black block origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[100] pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-[#111111]"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 bg-[#111111] text-white w-full py-6 text-[10px] font-bold tracking-[0.4em] uppercase"
              >
                Access Portal
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
