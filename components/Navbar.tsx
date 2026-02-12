
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Approach', 'Framework', 'Leadership', 'Portfolios'];

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-[#e9eaeb] dark:border-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer z-[110]">
          <div className="w-8 h-8 bg-[#111111] dark:bg-white group-hover:bg-[#16D12E] transition-all duration-500 flex items-center justify-center transform group-hover:rotate-45">
            <span className="text-white dark:text-black group-hover:text-black font-bold text-xs transition-colors group-hover:-rotate-45">D</span>
          </div>
          <span className="text-lg font-semibold tracking-tight uppercase text-[#111111] dark:text-white transition-colors">
            Daulat <span className="font-light">Wealth</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#111111] dark:hover:text-white transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#16D12E] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-[#e9eaeb] dark:bg-[#1a1a1a]"></div>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-[#16D12E] transition-colors relative"
            aria-label="Toggle Theme"
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </motion.div>
          </button>

          <button className="bg-[#111111] dark:bg-white text-white dark:text-black px-8 py-3 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#16D12E] hover:text-black transition-all transform hover:scale-[1.05]">
            Portal
          </button>
        </div>
        
        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-gray-400">
            {isDarkMode ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#111111] dark:text-white z-[110] relative"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="w-full h-[1.5px] bg-current block origin-center"
              />
              <motion.span 
                animate={isOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                className="w-2/3 h-[1.5px] bg-current block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -10, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="w-full h-[1.5px] bg-current block origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-[#050505] z-[100] pt-32 px-10 md:hidden"
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
                  className="text-4xl font-bold tracking-tighter text-[#111111] dark:text-white"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 bg-[#111111] dark:bg-white text-white dark:text-black w-full py-6 text-[10px] font-bold tracking-[0.4em] uppercase"
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