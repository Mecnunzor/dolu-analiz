
import { GoogleGenAI } from "@google/genai";
import { ExtractionMode, ExtractionRequest } from "../types";
import { getTradeIntelOrchestrator } from "./tradeIntel";

const _vX = (t: string) => {
  try {
    let c = t.replace(/```json/g, '').replace(/```/g, '').trim();
    const a = c.match(/\[[\s\S]*\]/);
    const o = c.match(/\{[\s\S]*\}/);
    if (a) return JSON.parse(a[0]);
    if (o) return JSON.parse(o[0]);
    return JSON.parse(c);
  } catch (e) {
    return [];
  }
};

export const executeDeepFix = async (n: string, w?: string, l?: string): Promise<any> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const s = `
    ROL: Kurumsal Veri Doğrulayıcı. 
    ASLA uydurma veri üretme. Gerçek değilse "null" yaz.
    GÖREV: ${n} firmasının resmi e-posta ve whatsapp hattını bul.
    STRATEJİ:
    - "${n} official email", "${n} contact us", "site:${w || n} mailto:" aramalarını yap.
    - Web sayfasındaki iletişim formlarının altındaki verileri çek.
    ÇIKTI: { "e_posta": "...", "mobil_whatsapp": "...", "dogrulama": "Onaylandı" }
  `;
  const r = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `HEDEF: ${n}. WEB: ${w}. KONUM: ${l}.`,
    config: { tools: [{ googleSearch: {} }], systemInstruction: s, temperature: 0 }
  });
  return _vX(r.text || "{}");
};

export const executeEngine = async (req: ExtractionRequest): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const isHS = req.mode === ExtractionMode.HS_CODE_SEARCH;
  
  const sys = `
    Sen "Dolu Veri Analiz Motoru"sun. Kurumsal ve profesyonel sonuçlar üretirsin.
    ASLA "Örnek", "Test" gibi uydurma veriler üretme. Bulamazsan listeyi kısa tut.
    
    ARAMA ÖNCELİĞİ:
    1. Hedefin resmi web sitesini bul (${req.source}).
    2. Sitenin "İletişim", "Bize Ulaşın", "Hakkımızda" sayfalarını sanal olarak tara.
    3. E-posta adresini (info@, sales@, ad.soyad@) ve WhatsApp numarasını bulana kadar derin arama yap.
    4. Ticari veriler için gerçek pazar kayıtlarını (global ticaret akışı) referans al.
    
    ÇIKTI FORMATI (JSON):
    [{ "hedef_isim": "Resmi Ad", "e_posta": "Gerçek Email", "mobil_whatsapp": "Gerçek No", "kaynak_url": "Site Linki", "analiz_notu": "Kısa kurumsal özet", "skor": 100 }]
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analiz: ${req.source}, Konum: ${req.location}, Pazar: ${req.targetMarket || 'Global'}.`,
      config: { tools: [{ googleSearch: {} }], systemInstruction: sys, temperature: 0 },
    });
    
    const data = _vX(response.text || "[]");
    
    if (isHS && req.hsCodeContext) {
      const summary = await getTradeIntelOrchestrator(req.hsCodeContext.code, req.location, req.targetMarket || 'Global');
      return JSON.stringify([{ ...summary, _isTradeIntel: true }, ...data]);
    }
    return JSON.stringify(data);
  } catch (e: any) {
    throw new Error(`Bağlantı Hatası: ${e.message}`);
  }
};
