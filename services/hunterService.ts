
import { GoogleGenAI } from "@google/genai";

interface HunterResult {
  email: string;
  confidence: number;
  source: string;
  pattern?: string;
}

// Helper to extract clean domain from URL
const extractDomain = (url: string): string | null => {
  try {
    if (!url) return null;
    let cleanUrl = url.toLowerCase().trim();
    if (!cleanUrl.startsWith('http')) cleanUrl = `https://${cleanUrl}`;
    const urlObj = new URL(cleanUrl);
    return urlObj.hostname.replace('www.', '');
  } catch (e) {
    return null;
  }
};

export const searchHunterIo = async (domainOrUrl: string, companyName: string): Promise<string | null> => {
  const domain = extractDomain(domainOrUrl);
  const apiKey = process.env.HUNTER_API_KEY; // Assumes availability

  // 1. Try Real Hunter.io API if Key exists
  if (apiKey && domain) {
    try {
      const response = await fetch(`https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${apiKey}&limit=1`);
      const data = await response.json();
      
      if (data?.data?.emails && data.data.emails.length > 0) {
        const email = data.data.emails[0].value;
        const type = data.data.emails[0].type; // 'personal' or 'generic'
        return email; // Return the best email found
      }
    } catch (error) {
      console.warn("Hunter.io API request failed, falling back to Gemini Simulation.", error);
    }
  }

  // 2. Fallback: Hunter.io Simulation via Gemini
  // If no API key or API limit reached, we use Gemini to perform a "Pattern Recognition & Deep Search" 
  // mimicking Hunter's behavior.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    ROL: Sen "Hunter.io" e-posta bulma motorusun.
    GÖREV: Aşağıdaki firma ve domain için en olası e-posta adresini tespit et.
    
    HEDEF:
    Firma Adı: ${companyName}
    Web Sitesi/Domain: ${domain || domainOrUrl}
    
    ALGORİTMA:
    1. Web sitesini sanal olarak tara ve "İletişim", "Takımımız", "Hakkımızda" sayfalarındaki e-posta desenlerini (pattern) analiz et.
    2. Genellikle kullanılan formatı bul (Örn: {ad}.{soyad}@domain.com veya info@domain.com).
    3. Eğer kişisel mail bulamazsan, departman maillerini (export@, sales@, info@) getir.
    4. Sadece EN YÜKSEK güven skoruna sahip TEK BİR email adresini döndür.
    
    ÇIKTI FORMATI:
    Sadece e-posta adresini yaz. Başka hiçbir metin yazma. Bulamazsan "null" yaz.
  `;

  try {
    const result = await ai.models.generateContent({
      // Updated model to gemini-3-flash-preview for text extraction tasks
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }], // Use search to validate email existence
        // responseMimeType: "text/plain" is omitted to avoid conflicts with search grounding results
      }
    });

    const text = result.text?.trim();
    if (!text || text.toLowerCase().includes('null') || text.includes(' ')) return null;
    return text;
  } catch (e) {
    console.error("Hunter Simulation Failed:", e);
    return null;
  }
};
