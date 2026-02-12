
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#050505] pt-24 pb-12 border-t border-[#e9eaeb] dark:border-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-[#111111] dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-[10px]">D</span>
              </div>
              <span className="text-base font-semibold tracking-tight uppercase text-[#111111] dark:text-white">
                Daulat <span className="font-light">Wealth</span>
              </span>
            </div>
            <p className="text-gray-400 dark:text-gray-600 text-sm font-light leading-relaxed max-w-xs transition-colors">
              Institutional-grade wealth management for families and high-net-worth individuals globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] dark:text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Approach', 'Framework', 'Leadership'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-[#111111] dark:hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Whitepapers', 'Market Insights', 'DMAS Portfolios'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-[#111111] dark:hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Use', 'Disclosures'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-[#111111] dark:hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] dark:text-white mb-6">Connect</h4>
            <ul className="space-y-4">
              {['LinkedIn', 'Twitter', 'Contact Us'].map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-[#111111] dark:hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#f0f1f2] dark:border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <p className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Daulat Wealth Management. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">Regulated by AMFI</span>
            <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest">SEBI Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;