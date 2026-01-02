
export enum ExtractionMode {
  LEAD_GEN = 'LEAD_GEN',
  HS_CODE_SEARCH = 'HS_CODE_SEARCH',
  URL_SEARCH = 'URL_SEARCH',
  RAW_TEXT = 'RAW_TEXT',
  AI_HUNTER = 'AI_HUNTER'
}

export interface ExtractionRequest {
  mode: ExtractionMode;
  source: string; 
  fields: string; 
  instructions: string;
  targetGoal?: string;
  location?: string;
  targetMarket?: string; // Yeni: Ürünün satıldığı hedef pazar
  excludeList?: string[];
  competitorTracking?: string; // Yeni: İzlenecek rakip firma
  hsCodeContext?: {
    code: string;
    direction: 'import' | 'export';
    origin: string;
    target: string;
  };
}

export interface ExtractionResult {
  data: any[];
  jsonString: string;
  sourceUrl?: string;
  timestamp: string;
}
