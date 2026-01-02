
export interface HSCode {
  code: string;
  name: string;
  category: string;
}

export const HS_CODES: HSCode[] = [
  { code: '7606.12', name: 'Alüminyum Alaşımlı Levhalar (Sublimasyon/Metal)', category: 'Metal' },
  { code: '6109.10', name: 'Pamuklu Örme Tişörtler', category: 'Tekstil' },
  { code: '9403.60', name: 'Ahşap Mobilyalar', category: 'Mobilya' },
  { code: '0802.31', name: 'Kabuklu Ceviz', category: 'Gıda/Tarım' },
  { code: '8471.30', name: 'Taşınabilir Bilgisayarlar (Laptop)', category: 'Teknoloji' },
  { code: '3304.99', name: 'Cilt Bakım ve Makyaj Ürünleri', category: 'Kozmetik' },
  { code: '8708.99', name: 'Otomobil Yedek Parçaları', category: 'Otomotiv' },
  { code: '3923.21', name: 'Etilen Polimerden Torba ve Çantalar', category: 'Plastik' },
  { code: '6907.21', name: 'Seramik Karolar ve Döşemeler', category: 'İnşaat' },
  { code: '7308.90', name: 'Demir/Çelik İnşaat Aksamları', category: 'Metal' }
];
