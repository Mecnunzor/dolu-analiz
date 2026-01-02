import React from 'react';
import { X, Check, Coins, Zap, Wand2 } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  credits: number;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, credits }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-cyan-600 p-6 text-white relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-2">
                <Coins className="w-8 h-8 text-amber-300" />
                <h2 className="text-2xl font-bold">Dolu Kredi Sistemi</h2>
            </div>
            <p className="text-brand-100 text-sm">
                Mevcut Bakiyeniz: <strong className="text-white text-lg ml-1">{credits} Kredi</strong>
            </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
            
            {/* Pricing Table */}
            <div className="space-y-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    Harcama Tablosu
                </h3>
                
                <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                    <div className="grid grid-cols-12 text-xs font-bold text-slate-500 bg-slate-900/50 p-3 border-b border-slate-800 uppercase">
                        <div className="col-span-8">İşlem</div>
                        <div className="col-span-4 text-right">Maliyet</div>
                    </div>
                    
                    <div className="p-4 space-y-4">
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-8 text-slate-300 text-sm">
                                <strong>Kişi/Firma Bulma</strong>
                                <p className="text-xs text-slate-500">Standart arama listesi oluşturma</p>
                            </div>
                            <div className="col-span-4 text-right text-emerald-400 font-mono text-sm">
                                Bulunan Tel/Mail Başına 1 Kredi
                            </div>
                        </div>
                        <div className="w-full h-px bg-slate-800/50"></div>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-8 text-slate-300 text-sm flex items-center gap-2">
                                <strong className="flex items-center gap-1">
                                    <Wand2 className="w-3 h-3 text-brand-400" />
                                    Sihirli Bul (Magic Fix)
                                </strong>
                            </div>
                            <div className="col-span-4 text-right text-amber-400 font-mono text-sm">
                                1 Kredi / İşlem
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Included */}
            <div>
                 <h3 className="text-white font-semibold mb-3">Paket Özellikleri</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {[
                         "Dolu AI Gelişmiş Tarama Motoru",
                         "İletişim Sayfası Derin Analizi",
                         "Excel / CSV Dışa Aktarım",
                         "7/24 Kesintisiz Hizmet",
                         "Kullanılmayan Krediler Silinmez"
                     ].map((item, i) => (
                         <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                             <Check className="w-4 h-4 text-emerald-500" />
                             {item}
                         </li>
                     ))}
                 </ul>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button 
                    onClick={onClose}
                    className="px-6 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium"
                >
                    Kapat
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-2 rounded-lg transition-colors shadow-lg shadow-amber-500/20 text-sm">
                    Kredi Satın Al
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};