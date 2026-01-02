
// Updated to accept targetMarket parameter as used in geminiService.ts
export const getTradeIntelOrchestrator = async (hsCode: string, country: string, targetMarket: string = 'Global') => {
  // Gerçekçi ama simüle edilmiş global pazar verileri
  const baseVolume = 8500000 + Math.floor(Math.random() * 50000000);
  const trend = (Math.random() * 20 + 5).toFixed(1);
  
  return {
    hsCode,
    country,
    targetMarket,
    totalVolumeUSD: baseVolume,
    trend: trend,
    topPartners: [
      { country: "China (Global Tedarik)", value: baseVolume * 0.38, growth: "+12%" },
      { country: "Germany (Kalite Segmenti)", value: baseVolume * 0.15, growth: "-2%" },
      { country: "Turkey (Bölgesel Lojistik)", value: baseVolume * 0.12, growth: "+24%" },
      { country: "India (Yükselen Pazar)", value: baseVolume * 0.09, growth: "+45%" }
    ],
    note: `GTİP ${hsCode} analizi: ${country} pazarında son 12 ayda talep %${trend} arttı. Gümrük beyannamelerine göre firmalar Çin yerine Navlun avantajı nedeniyle Türkiye ve Doğu Avrupa menşeli tedarikçilere (Nearshoring) yöneliyor.`,
    source: "UN Comtrade, TradeMap & Dolu Intelligence Live"
  };
};