
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExtractorForm } from './components/ExtractorForm';
import { ResultsSection } from './components/ResultsSection';
import { ExtractionRequest, ExtractionResult, ExtractionMode } from './types';
import { executeEngine, executeDeepFix } from './services/geminiService';
import { AlertCircle, ShieldCheck, Database, Info } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFixing, setIsFixing] = useState<number | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentRequest, setCurrentRequest] = useState<ExtractionRequest | null>(null);
  const [allData, setAllData] = useState<any[]>([]);
  const [credits, setCredits] = useState(500);

  useEffect(() => {
    if (allData.length > 0) {
      setResult({
        data: allData,
        jsonString: JSON.stringify(allData, null, 2),
        timestamp: new Date().toISOString()
      });
    } else {
      setResult(null);
    }
  }, [allData]);

  const handleExtraction = async (request: ExtractionRequest, isPagination = false) => {
    if (credits <= 0) {
        setError("Bakiye yetersiz. Lütfen yükleme yapın.");
        return;
    }

    setIsLoading(true);
    setError(null);

    if (!isPagination) setCurrentRequest(request);

    const uniqueIdentifiers = allData.map(d => d.mobil_whatsapp || d.e_posta).filter(Boolean);
    const requestPayload = { ...request, excludeList: uniqueIdentifiers };

    try {
      const rawJsonString = await executeEngine(requestPayload);
      const parsedData = JSON.parse(rawJsonString);
      const newDataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
      
      const filteredNewData = newDataArray.filter(newItem => {
        if (newItem._isTradeIntel) return true;
        return !allData.some(existing => 
          (existing.mobil_whatsapp && existing.mobil_whatsapp === newItem.mobil_whatsapp) ||
          (existing.e_posta && existing.e_posta === newItem.e_posta)
        );
      });

      if (filteredNewData.length === 0 && !isPagination) {
         setError("Yeni veri bulunamadı veya tüm sonuçlar zaten listelenmiş.");
         setIsLoading(false);
         return;
      }

      setCredits(prev => Math.max(0, prev - filteredNewData.filter(d => !d._isTradeIntel).length));
      setAllData(prev => {
        const hasTrade = filteredNewData.find(d => d._isTradeIntel);
        const pureLeads = filteredNewData.filter(d => !d._isTradeIntel);
        return hasTrade ? [hasTrade, ...prev.filter(p => !p._isTradeIntel), ...pureLeads] : [...prev, ...pureLeads];
      });

    } catch (err: any) {
      setError("Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMagicFix = async (indexInLeads: number) => {
    const leadsOnly = allData.filter(d => !d._isTradeIntel);
    const targetFirm = leadsOnly[indexInLeads];
    if (!targetFirm) return;

    setIsFixing(indexInLeads);
    try {
      const fixedData = await executeDeepFix(targetFirm.hedef_isim, targetFirm.kaynak_url, currentRequest?.location);
      if (Object.keys(fixedData).length > 0) {
        setAllData(prev => {
          const updated = [...prev];
          const actualIndex = prev.findIndex(p => p.hedef_isim === targetFirm.hedef_isim);
          if (actualIndex !== -1) updated[actualIndex] = { ...updated[actualIndex], ...fixedData };
          return updated;
        });
        setCredits(prev => Math.max(0, prev - 1));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsFixing(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header credits={credits} onAddCredits={() => setCredits(c => c + 1000)} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 bg-brand-500/10 px-6 py-2 rounded-full border border-brand-500/20">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span className="text-[10px] font-black text-brand-400 uppercase tracking-[0.2em]">Kurumsal Veri Çözümleri</span>
          </div>
          <h2 className="text-6xl font-black text-white mb-6 tracking-tight uppercase italic leading-none">
            Dolu <span className="text-brand-500">Analiz</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed opacity-80">
            Küresel pazar verilerini ve kurumsal bağlantıları doğrulayarak raporlayan profesyonel veri platformu.
          </p>
        </div>

        {error && (
          <div className="mb-10 bg-red-500/5 border border-red-500/20 text-red-400 p-6 rounded-[2rem] flex items-center gap-4 animate-in slide-in-from-top-4">
             <AlertCircle className="w-6 h-6 flex-shrink-0" />
             <p className="font-bold text-sm uppercase tracking-tight">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ExtractorForm isLoading={isLoading} onExtract={(req) => handleExtraction(req, false)} />
          </div>
          <div className="lg:col-span-8">
            <ResultsSection 
                result={result} 
                requestedFields={currentRequest?.fields || ''}
                onLoadMore={() => currentRequest && handleExtraction(currentRequest, true)}
                isLoadingMore={isLoading && allData.length > 0}
                onMagicFix={handleMagicFix}
                isFixing={isFixing}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
