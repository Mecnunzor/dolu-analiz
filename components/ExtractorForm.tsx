
import React, { useState, useMemo } from 'react';
import { ExtractionMode, ExtractionRequest } from '../types';
import { Search, ArrowRight, Loader2, Target, MapPin, Globe, Map as MapIcon, BarChart3, Database, SearchCode } from 'lucide-react';
import { SECTORS } from '../data/sectors';
import { HS_CODES } from '../data/hsCodes';

interface ExtractorFormProps {
  isLoading: boolean;
  onExtract: (request: ExtractionRequest) => void;
}

export const ExtractorForm: React.FC<ExtractorFormProps> = ({ isLoading, onExtract }) => {
  const [mode, setMode] = useState<ExtractionMode>(ExtractionMode.AI_HUNTER);
  const [targetGoal, setTargetGoal] = useState('');
  const [location, setLocation] = useState('Türkiye');
  const [targetMarket, setTargetMarket] = useState('');
  const [hsCodeSearch, setHsCodeSearch] = useState('');
  const [selectedHS, setSelectedHS] = useState('');
  const [direction, setDirection] = useState<'import' | 'export'>('export');
  
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedSubSector, setSelectedSubSector] = useState<string>('');

  const filteredHS = useMemo(() => {
    if (!hsCodeSearch) return [];
    return HS_CODES.filter(h => 
      h.code.includes(hsCodeSearch) || h.name.toLowerCase().includes(hsCodeSearch.toLowerCase())
    ).slice(0, 5);
  }, [hsCodeSearch]);

  const handleSubSectorSelect = (sub: any) => {
    setSelectedSubSector(sub.id);
    setTargetGoal(sub.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExtract({
      mode: mode,
      source: mode === ExtractionMode.HS_CODE_SEARCH ? selectedHS : targetGoal,
      location: location,
      targetMarket: targetMarket,
      fields: "Full Verified Enterprise Info",
      instructions: "Deep multi-source verification",
      hsCodeContext: mode === ExtractionMode.HS_CODE_SEARCH ? {
        code: selectedHS,
        direction: direction,
        origin: location,
        target: targetMarket
      } : undefined
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
      <h2 className="text-lg font-black text-white mb-10 flex items-center gap-4 italic uppercase tracking-tighter">
        <Database className="w-5 h-5 text-brand-500" />
        Analiz Ayarları
      </h2>

      <div className="grid grid-cols-4 gap-2 mb-10 bg-slate-950 p-2 rounded-2xl border border-slate-800">
        {[
          { id: ExtractionMode.AI_HUNTER, icon: Target, label: 'PAZAR' },
          { id: ExtractionMode.LEAD_GEN, icon: MapIcon, label: 'BÖLGE' },
          { id: ExtractionMode.HS_CODE_SEARCH, icon: BarChart3, label: 'TİCARET' },
          { id: ExtractionMode.URL_SEARCH, icon: Globe, label: 'WEB' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`flex flex-col items-center justify-center gap-2 py-4 rounded-xl transition-all ${
              mode === tab.id ? 'bg-slate-800 text-white shadow-xl' : 'text-slate-600 hover:text-slate-400'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {mode === ExtractionMode.HS_CODE_SEARCH ? (
          <div className="space-y-6">
            <div className="relative">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 italic">Ürün veya Kod</label>
              <div className="relative">
                <SearchCode className="absolute top-4 left-4 w-5 h-5 text-slate-600" />
                <input
                  type="text"
                  value={hsCodeSearch || selectedHS}
                  onChange={(e) => {
                    setHsCodeSearch(e.target.value);
                    setSelectedHS(e.target.value);
                  }}
                  placeholder="Ürün adı veya kod..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:ring-1 focus:ring-brand-500 outline-none font-bold placeholder:text-slate-700"
                />
              </div>
              {filteredHS.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                  {filteredHS.map(h => (
                    <button key={h.code} type="button" onClick={() => { setSelectedHS(h.code); setHsCodeSearch(''); }} className="w-full px-4 py-3 text-left hover:bg-slate-800 flex flex-col gap-0.5">
                      <span className="text-brand-400 font-black text-xs">{h.code}</span>
                      <span className="text-slate-400 text-[10px] uppercase font-bold">{h.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 grid grid-cols-2 gap-1">
                <button type="button" onClick={() => setDirection('export')} className={`py-4 rounded-lg text-[10px] font-black uppercase transition-all ${direction === 'export' ? 'bg-brand-500 text-white shadow-lg' : 'text-slate-600'}`}>İhracatçılar</button>
                <button type="button" onClick={() => setDirection('import')} className={`py-4 rounded-lg text-[10px] font-black uppercase transition-all ${direction === 'import' ? 'bg-brand-500 text-white shadow-lg' : 'text-slate-600'}`}>İthalatçılar</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Menşei Ülke</label>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Örn: Çin" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-brand-500 outline-none" />
               </div>
               <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Hedef Ülke</label>
                  <input type="text" value={targetMarket} onChange={(e) => setTargetMarket(e.target.value)} placeholder="Örn: Türkiye" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-brand-500 outline-none" />
               </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
               <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Kategorik Analiz</label>
               <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {SECTORS.map(s => (
                    <button key={s.id} type="button" onClick={() => setSelectedSector(s.id)} className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-[10px] font-black border transition-all ${selectedSector === s.id ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-800 text-slate-600 hover:text-slate-400'}`}>{s.name}</button>
                  ))}
               </div>
               {selectedSector && (
                 <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    {SECTORS.find(s => s.id === selectedSector)?.subSectors.map(sub => (
                      <button key={sub.id} type="button" onClick={() => handleSubSectorSelect(sub)} className={`px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${selectedSubSector === sub.id ? 'bg-slate-800 text-brand-400 border border-brand-500/30' : 'text-slate-600 bg-slate-950 border border-slate-900'}`}>{sub.name}</button>
                    ))}
                 </div>
               )}
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Hedef Odak Noktası</label>
              <textarea value={targetGoal} onChange={(e) => setTargetGoal(e.target.value)} placeholder="Hangi firmaları veya iş kollarını bulmak istiyorsunuz?" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:ring-1 focus:ring-brand-500 outline-none min-h-[120px] text-sm font-medium leading-relaxed placeholder:text-slate-700" required />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Konumsal Filtre</label>
              <div className="relative">
                <MapPin className="absolute top-4 left-4 w-5 h-5 text-brand-500" />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Şehir veya Ülke" className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:ring-1 focus:ring-brand-500 outline-none font-bold" required />
              </div>
            </div>
          </div>
        )}

        <button type="submit" disabled={isLoading} className="w-full h-20 bg-brand-600 hover:bg-brand-500 text-white font-black rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-4 disabled:opacity-50 text-base uppercase tracking-[0.3em]">
          {isLoading ? (
            <><Loader2 className="w-7 h-7 animate-spin" /><span>Veriler Doğrulanıyor</span></>
          ) : (
            <><Search className="w-7 h-7" /><span>Analizi Başlat</span></>
          )}
        </button>
      </form>
    </div>
  );
};
