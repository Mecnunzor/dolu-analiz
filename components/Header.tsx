import React, { useState } from 'react';
import { Database, Coins, PlusCircle, Hexagon } from 'lucide-react';
import { PricingModal } from './PricingModal';

export const Header: React.FC<{ credits: number, onAddCredits: () => void }> = ({ credits, onAddCredits }) => {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <>
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-500/20">
              <Hexagon className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Dolu
                <span className="text-brand-500">.ai</span>
              </h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Veri Madencisi</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            
            {/* Credit Display */}
            <button 
               onClick={() => setShowPricing(true)}
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-800 transition-all group shadow-sm"
               title="Kredi Detayları"
            >
               <div className="bg-amber-500/10 p-1 rounded-full">
                  <Coins className="w-4 h-4 text-amber-400" />
               </div>
               <div className="flex flex-col items-start leading-none">
                  <span className="text-slate-400 text-[10px] font-medium">Bakiye</span>
                  <span className="text-white text-sm font-bold font-mono">{credits}</span>
               </div>
               <PlusCircle className="w-4 h-4 text-brand-500 opacity-50 group-hover:opacity-100 transition-opacity ml-1" />
            </button>
          </div>
        </div>
      </header>

      <PricingModal 
        isOpen={showPricing} 
        onClose={() => setShowPricing(false)} 
        credits={credits} 
      />
    </>
  );
};