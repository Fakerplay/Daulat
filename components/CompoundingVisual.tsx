
import React, { useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface CompoundingVisualProps {
  isDarkMode: boolean;
}

const CompoundingVisual: React.FC<CompoundingVisualProps> = ({ isDarkMode }) => {
  const data = useMemo(() => {
    const points = [];
    let value = 100000; // Starting Capital
    const rate = 0.09; // 9% average annual return
    for (let i = 0; i <= 30; i++) {
      points.push({
        year: `Year ${i}`,
        displayYear: i,
        value: Math.round(value),
      });
      value *= (1 + rate);
    }
    return points;
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#111111] border border-[#e9eaeb] dark:border-[#1a1a1a] p-4 shadow-2xl backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Projection_Year_{payload[0].payload.displayYear}</p>
          <p className="text-xl font-bold tracking-tighter text-[#111111] dark:text-white font-mono">
            ${payload[0].value.toLocaleString()}
          </p>
          <div className="w-full h-[1px] bg-[#16D12E] mt-2"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 lg:py-40 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-24 items-start">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#16D12E] block mb-6">Growth Physics</span>
            <h2 className="text-4xl lg:text-7xl font-medium heading-h2 tracking-tight text-[#111111] dark:text-white mb-8">
              The Power of <br />
              <span className="text-[#16D12E]">Compounding</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <p className="text-gray-400 dark:text-gray-500 font-light text-lg lg:text-xl leading-relaxed max-w-xl">
              Wealth is not built by chasing volatility, but by capturing the exponential curves of time. Our models prioritize <span className="text-[#111111] dark:text-white font-normal">structural longevity</span> over market timing.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] w-full bg-[#fafafa] dark:bg-[#0d0d0d] border border-[#e9eaeb] dark:border-[#1a1a1a] p-6 lg:p-12 group">
          {/* Chart Header Details */}
          <div className="absolute top-8 left-8 z-10 hidden sm:block">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Projection_ID: COMP-EXP-2025</span>
              <span className="text-[9px] font-mono text-[#16D12E] uppercase tracking-widest">Base_Return: 9.0% APY</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16D12E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#16D12E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke={isDarkMode ? '#1a1a1a' : '#f0f0f0'} 
              />
              <XAxis 
                dataKey="displayYear" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: isDarkMode ? '#444' : '#ccc', fontFamily: 'monospace' }}
                dy={10}
              />
              <YAxis 
                hide 
                domain={['dataMin - 10000', 'dataMax + 100000']} 
              />
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ stroke: '#16D12E', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#16D12E" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={2500}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none border border-[#e9eaeb] dark:border-[#1a1a1a] bg-gradient-to-t from-black/[0.01] to-transparent"></div>
        </div>

        <div className="mt-12 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Horizon", val: "30 Years" },
            { label: "Efficiency", val: "94.2%" },
            { label: "Drawdown", val: "Low" },
            { label: "Volatility", val: "Managed" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-gray-400 dark:text-gray-600">{stat.label}</span>
              <span className="text-xl font-bold text-[#111111] dark:text-white uppercase tracking-tighter">{stat.val}</span>
              <div className="w-8 h-[1.5px] bg-[#16D12E] opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompoundingVisual;
