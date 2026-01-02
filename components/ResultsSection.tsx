
import React, { useState } from 'react';
import { ExtractionResult } from '../types';
import { Table as TableIcon, Mail, ExternalLink, Loader2, Target, TrendingUp, MapPin, Wand2, Link as LinkIcon, History, Search, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ResultsSectionProps {
  result: ExtractionResult | null;
  requestedFields: string;
  onLoadMore?: () => void;
  isLoadingMore?: boolean;
  onMagicFix?: (index: number) => void;
  isFixing?: number | null;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ 
  result, 
  onLoadMore, 
  isLoadingMore = false,
  onMagicFix,
  isFixing = null
}) => {
  const [viewMode, setViewMode] = useState<'json' | 'table'>('table');

  if (!result || result.data.length === 0) {
    return (
      <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-slate-500 border border-dashed border-slate-800 rounded-[3rem] bg-slate-900/10 p-12 text-center group">
        <div className="bg-slate-900 p-12 rounded-full mb-8 border border-slate-800 shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <Search className="w-20 h-20 text-slate-700" />
        </div>
        <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase italic opacity-60">Sistem Hazır</h3>
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-600">Analiz motorunu çalıştırın</p>
      </div>
    );
  }

  const tradeData = result.data.find(d => d._isTradeIntel);
  const leads = result.data.filter(d => !d._isTradeIntel);

  return (
    <div className="flex flex-col space-y-12 animate-in fade-in duration-1000">
      
      {tradeData && (
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="bg-gradient-to-br from-brand-500/5 to-transparent p-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
             <div className="space-y-6">
                <div className="flex items-center gap-3 text-brand-500">
                   <ShieldCheck className="w-7 h-7" />
                   <span className="text-[11px] font-black uppercase tracking-[0.4em]">Pazar Analiz Raporu</span>
                </div>
                <h2 className="text-7xl font-black text-white tracking-tighter uppercase leading-none">Kod: {tradeData.hsCode}</h2>
                <div className="flex flex-wrap items-center gap-6">
                   <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-2.5 rounded-2xl text-slate-300 font-black text-xs uppercase border border-slate-700">
                      <MapPin className="w-5 h-5" /> {tradeData.country}
                   </div>
                   <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-2.5 rounded-2xl text-slate-300 font-black text-xs uppercase border border-slate-700">
                      <Target className="w-5 h-5" /> {tradeData.targetMarket || 'Global'}
                   </div>
                </div>
             </div>
             <div className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-inner min-w-[200px] text-center">
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-3">Hacim Analizi</div>
                <div className="text-5xl font-mono font-black text-white tracking-tighter">${(tradeData.totalVolumeUSD / 1000000).toFixed(1)}M</div>
                <div className="flex items-center justify-center gap-2 mt-3 text-emerald-500">
                   <TrendingUp className="w-5 h-5" />
                   <span className="text-xs font-black uppercase tracking-widest">%{tradeData.trend}</span>
                </div>
             </div>
          </div>
        </div>
      )}

      <div className="bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
        <div className="px-12 py-10 border-b border-slate-800 bg-slate-900/30 flex flex-col md:flex-row md:items-center justify-between gap-8 sticky top-0 z-20 backdrop-blur-3xl">
          <div className="flex items-center gap-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Kurumsal Kayıtlar</h2>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Doğrulanmış Veri Havuzu</p>
              </div>
          </div>

          <div className="flex bg-slate-950 rounded-[2rem] p-1.5 border border-slate-800 shadow-inner">
            <button onClick={() => setViewMode('table')} className={`px-10 py-3 rounded-2xl text-[11px] font-black transition-all ${viewMode === 'table' ? 'bg-slate-800 text-white shadow-xl' : 'text-slate-500 hover:text-white'}`}>TABLO</button>
            <button onClick={() => setViewMode('json')} className={`px-10 py-3 rounded-2xl text-[11px] font-black transition-all ${viewMode === 'json' ? 'bg-slate-800 text-brand-400 shadow-xl' : 'text-slate-500 hover:text-white'}`}>VERİ</button>
          </div>
        </div>

        <div className="relative w-full bg-slate-950/10 flex-1 overflow-auto custom-scrollbar">
          {viewMode === 'table' ? (
            <table className="min-w-full">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="px-12 py-8 text-left text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Kurum Bilgisi</th>
                  <th className="px-12 py-8 text-left text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">İletişim Kanalları</th>
                  <th className="px-12 py-8 text-left text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Faaliyet Analizi</th>
                  <th className="px-12 py-8 text-right text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/30">
                {leads.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.01] transition-all">
                    <td className="px-12 py-10">
                      <div className="flex flex-col gap-3">
                        <span className="text-xl font-black text-white group-hover:text-brand-400 transition-colors uppercase tracking-tight">{row.hedef_isim}</span>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold max-w-[200px] truncate uppercase tracking-widest">
                           <LinkIcon className="w-3.5 h-3.5 text-slate-700" /> 
                           {row.kaynak_url || "Kurumsal Web Sitesi"}
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-12 py-10">
                      <div className="space-y-4">
                         <div className="flex items-center gap-4">
                            <Mail className={`w-5 h-5 ${row.e_posta && row.e_posta !== 'null' ? 'text-brand-500' : 'text-slate-800'}`} />
                            {row.e_posta && row.e_posta !== 'null' ? (
                               <a href={`mailto:${row.e_posta}`} className="text-sm text-slate-200 font-mono font-bold hover:text-brand-400">{row.e_posta}</a>
                            ) : <span className="text-[10px] text-slate-700 font-black italic uppercase">BİLGİ BEKLENİYOR</span>}
                         </div>

                         <div className="flex items-center gap-4">
                            <Smartphone className={`w-5 h-5 ${row.mobil_whatsapp && row.mobil_whatsapp !== 'null' ? 'text-emerald-500' : 'text-slate-800'}`} />
                            {row.mobil_whatsapp && row.mobil_whatsapp !== 'null' ? (
                               <div className="flex flex-col">
                                  <span className="text-sm text-white font-mono font-black">{row.mobil_whatsapp}</span>
                                  <a href={`https://wa.me/${row.mobil_whatsapp.replace(/\D/g,'')}`} target="_blank" className="text-[9px] text-emerald-500 font-black hover:underline uppercase mt-1">BAĞLANTIYI AÇ</a>
                               </div>
                            ) : <span className="text-[10px] text-slate-700 font-black italic uppercase">BİLGİ BEKLENİYOR</span>}
                         </div>
                      </div>
                    </td>

                    <td className="px-12 py-10">
                       <div className="flex flex-col gap-3 max-w-[250px]">
                          <p className="text-[12px] text-slate-400 leading-relaxed font-bold italic opacity-80">
                             {row.analiz_notu || "İlgili sektörde aktif kurumsal faaliyet tespiti yapıldı."}
                          </p>
                       </div>
                    </td>

                    <td className="px-12 py-10 text-right">
                        <button 
                          onClick={() => onMagicFix?.(i)}
                          disabled={isFixing === i}
                          className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border ${isFixing === i ? 'bg-white text-slate-950 border-white' : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-brand-500 hover:text-brand-400'}`}
                        >
                          {isFixing === i ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                          SIHİRBAZ
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-12"><pre className="text-xs font-mono text-slate-400 bg-slate-950 p-8 rounded-[2rem] border border-slate-800">{JSON.stringify(leads, null, 2)}</pre></div>
          )}
          
          <div className="p-24 flex justify-center pb-56">
              <button
                  onClick={onLoadMore}
                  disabled={isLoadingMore}
                  className="flex items-center gap-6 px-20 py-8 bg-slate-900 border-2 border-slate-800 rounded-[3rem] hover:border-brand-500 transition-all text-sm font-black text-white uppercase tracking-[0.3em] shadow-2xl active:scale-95 group"
              >
                  {isLoadingMore ? <Loader2 className="w-6 h-6 animate-spin" /> : <History className="w-6 h-6 text-brand-500 group-hover:rotate-12 transition-transform" />}
                  LİSTEYİ GENİŞLET
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
