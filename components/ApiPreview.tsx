
import React from 'react';
import { Copy, Terminal } from 'lucide-react';

interface ApiPreviewProps {
  fields: string;
}

export const ApiPreview: React.FC<ApiPreviewProps> = ({ fields }) => {
  // Convert simple string fields to an example object
  const fieldList = fields.split(',').map(f => f.trim()).filter(Boolean);
  const exampleObj: Record<string, string> = {};
  fieldList.forEach(f => exampleObj[f] = "...");

  const exampleCode = `
// Bu veriyi projenizde kullanmak için örnek Gemini API kodu:

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function fetchMyData() {
  const result = await ai.models.generateContent({
    // Using gemini-3-flash-preview as recommended for text extraction tasks
    model: "gemini-3-flash-preview",
    contents: "...", // Kaynak metin veya URL search isteği
    config: {
      responseMimeType: "application/json",
      systemInstruction: "Aşağıdaki alanları çıkar: ${fieldList.join(', ')}"
    }
  });
  
  // Directly access the .text property (not a method)
  console.log(JSON.parse(result.text));
}`;

  return (
    <div className="mt-8 border border-slate-800 rounded-xl overflow-hidden">
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-slate-300">Entegrasyon Kodu</span>
        </div>
        <button 
          onClick={() => navigator.clipboard.writeText(exampleCode)}
          className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors"
        >
          <Copy className="w-3 h-3" />
          Kopyala
        </button>
      </div>
      <div className="bg-slate-950 p-4 overflow-x-auto custom-scrollbar">
        <pre className="text-xs font-mono text-slate-400 leading-relaxed">
          {exampleCode}
        </pre>
      </div>
    </div>
  );
};
