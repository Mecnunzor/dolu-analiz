export interface SubSector {
  id: string;
  name: string;
  searchStrategy: string; // Gemini'ye verilecek özel arama taktiği
  targetAudience: string; // Kimleri arıyoruz?
}

export interface Sector {
  id: string;
  name: string;
  icon: string;
  subSectors: SubSector[];
}

export const SECTORS: Sector[] = [
  {
    id: 'beauty',
    name: 'Güzellik & Kuaför',
    icon: 'Scissors',
    subSectors: [
      { id: 'hair', name: 'Kuaför Salonu', searchStrategy: 'Google Maps, Instagram (#kuaför), LinkedIn (İşletme Sahipleri), KolayRandevu, Eniyi.co (Kuaförler), Facebook Yerel Esnaf Grupları, Sektörel Fuarlar', targetAudience: 'Bayan kuaförleri, Saç tasarım merkezleri' },
      { id: 'beauty_center', name: 'Güzellik Merkezi', searchStrategy: 'Google Maps, Armut.com, Instagram (#güzellikmerkezi), DoktorTakvimi (Estetisyenler), KadınlarKulübü Forumları, LinkedIn (Estetik ve Güzellik Uzmanları)', targetAudience: 'Güzellik salonları, Cilt bakım merkezleri' },
      { id: 'spa', name: 'Spa & Wellness', searchStrategy: 'TripAdvisor, Spafinder, Otel web siteleri, Instagram, LinkedIn (Spa Müdürleri), Foursquare, Google Haritalar Yorumları', targetAudience: 'Masaj salonları, SPA merkezleri' },
      { id: 'aesthetic', name: 'Estetik Merkezi', searchStrategy: 'DoktorTakvimi, TTB Listeleri, Estetik International Forumları, LinkedIn (Plastik Cerrahlar), Instagram Klinikleri, Xing (Medikal Turizm)', targetAudience: 'Estetik klinikleri' },
      { id: 'nail', name: 'Tırnak Salonu (Nail Art)', searchStrategy: 'Instagram (#nailart), Pinterest (Profil İletişim), Google Maps, TikTok İşletme Hesapları, Armut.com', targetAudience: 'Protez tırnak stüdyoları' }
    ]
  },
  {
    id: 'real_estate',
    name: 'Emlak',
    icon: 'Home',
    subSectors: [
      { id: 'consultant', name: 'Emlak Danışmanlığı', searchStrategy: 'Sahibinden.com (Kurumsal Mağazalar), Zingat, Emlakjet, LinkedIn (Gayrimenkul Danışmanları), Xing (Real Estate Agents), Yerel Emlak Odaları', targetAudience: 'Gayrimenkul danışmanları' },
      { id: 'investment', name: 'Gayrimenkul Yatırım Ofisi', searchStrategy: 'LinkedIn (Yatırım Uzmanları), GYODER Üyeleri, Google Maps, Sektörel Haber Siteleri (EmlakKulis), Xing (Investment Managers)', targetAudience: 'Yatırım şirketleri' },
      { id: 'commercial', name: 'Ticari Gayrimenkul', searchStrategy: 'Sahibinden (Ticari İlanlar), LinkedIn (Ticari Gayrimenkul), Plaza Yönetimleri, TSKB Değerleme Raporları (Referanslar)', targetAudience: 'Ticari mülk ofisleri' },
      { id: 'project_sales', name: 'Proje Satış Ofisleri', searchStrategy: 'Konut Projeleri Web Siteleri, Emlak Haber Portalları, LinkedIn (Satış Müdürleri), Instagram Sponsorlu Reklamlar, Konutder Üyeleri', targetAudience: 'İnşaat firması satış ofisleri' },
      { id: 'land', name: 'Arsa & Arazi Danışmanlığı', searchStrategy: 'Sahibinden (Arsa İlanları), Tapu.com, LinkedIn (Arazi Geliştirme), Facebook Yerel Alım-Satım Grupları', targetAudience: 'Arsa ofisleri' }
    ]
  },
  {
    id: 'food',
    name: 'Restoran & Kafe',
    icon: 'Utensils',
    subSectors: [
      { id: 'restaurant', name: 'Restoran (Fine Dining / Casual)', searchStrategy: 'TripAdvisor, Zomato, Google Maps, Instagram, Gastronomi Dernekleri, Michelin Guide, LinkedIn (Restoran Müdürleri/F&B Managers)', targetAudience: 'Restoran işletmecileri' },
      { id: 'cafe', name: 'Kafe / Coffee Shop', searchStrategy: 'Nitelikli Kahve Haritaları, Instagram (#coffeeshop), Foursquare, Google Maps, Kahve Festivalleri Listeleri, LinkedIn (Baristalar/İşletmeciler)', targetAudience: 'Kafe sahipleri' },
      { id: 'fast_food', name: 'Fast Food / Paket Servis', searchStrategy: 'Yemeksepeti, GetirYemek, Trendyol Yemek Listeleri, Google Maps, Franchise Verenler Listesi (Bayim Olur Musun Fuarı)', targetAudience: 'Paket servis restoranları' },
      { id: 'bakery', name: 'Pastane / Fırın', searchStrategy: 'Google Maps, Instagram (#butikpasta), Düğün.com (Pasta Firmaları), Fırıncılar Odası Kayıtları, Yerel Rehberler', targetAudience: 'Pastane işletmeleri' },
      { id: 'dessert', name: 'Tatlıcı / Dondurmacı', searchStrategy: 'Google Maps, Instagram, Vedat Milor/Gurme Blogları, TripAdvisor, Mekan.com', targetAudience: 'Tatlıcılar' }
    ]
  },
  {
    id: 'health',
    name: 'Klinik & Sağlık',
    icon: 'Stethoscope',
    subSectors: [
      { id: 'dental', name: 'Diş Kliniği', searchStrategy: 'Türk Diş Hekimleri Birliği (TDB), DoktorTakvimi, Google Maps, LinkedIn (Diş Hekimleri), Instagram (Smile Design)', targetAudience: 'Diş hekimleri, klinikler' },
      { id: 'aesthetic_surgery', name: 'Estetik Cerrahi', searchStrategy: 'Estetik Cerrahi Dernekleri, DoktorTakvimi, LinkedIn, Instagram (Before/After), Xing (Medical Professionals), Özel Hastane Kadroları', targetAudience: 'Plastik cerrahlar' },
      { id: 'private_clinic', name: 'Özel Tıp Merkezi', searchStrategy: 'Özel Hastaneler ve Sağlık Kuruluşları Derneği (OHSAD), Google Maps, SGK Anlaşmalı Kurumlar, LinkedIn (Başhekimler)', targetAudience: 'Tıp merkezleri' },
      { id: 'diet', name: 'Diyetisyen / Beslenme Uzmanı', searchStrategy: 'DoktorTakvimi, Instagram (#diyetisyen), LinkedIn, Armut.com, Diyetisyenler Derneği, Diyetkolik', targetAudience: 'Diyetisyen ofisleri' },
      { id: 'physio', name: 'Fizyoterapi Merkezi', searchStrategy: 'Fizyoterapistler Derneği, Google Maps, DoktorTakvimi, Instagram, LinkedIn (Fizyoterapistler), Romatem vb. merkezler', targetAudience: 'Fizyoterapistler' }
    ]
  },
  {
    id: 'hotel',
    name: 'Otel & Konaklama',
    icon: 'Hotel',
    subSectors: [
      { id: 'boutique', name: 'Butik Otel', searchStrategy: 'Booking.com, Küçük Oteller Sitesi, Neredekal.com, Instagram, TripAdvisor, LinkedIn (Otel Sahipleri)', targetAudience: 'Butik otel sahipleri' },
      { id: 'pension', name: 'Pansiyon / Apart', searchStrategy: 'Google Maps, Airbnb, Yerel Turizm Müdürlüğü, Facebook Tatil Grupları, Etstur', targetAudience: 'Pansiyon işletmecileri' },
      { id: 'luxury', name: '5 Yıldızlı Otel', searchStrategy: 'TÜROB Üye Listesi, LinkedIn (General Managers, Purchasing Managers), Xing (Tourism Professionals), Turizm Fuarları', targetAudience: 'Otel genel müdürleri' },
      { id: 'resort', name: 'Tatil Köyü', searchStrategy: 'ETS Tur, Jolly Tur, LinkedIn, Tatil Sepeti, Google Travel', targetAudience: 'Tatil köyü yöneticileri' },
      { id: 'airbnb', name: 'Airbnb İşletmecisi', searchStrategy: 'Airbnb (Host Profilleri), LinkedIn (Property Management), Facebook Airbnb Host Grupları, Instagram (Kiralık Villa)', targetAudience: 'Kısa dönem kiralama şirketleri' }
    ]
  },
  {
    id: 'education',
    name: 'Eğitim & Kurs',
    icon: 'GraduationCap',
    subSectors: [
      { id: 'private_tutor', name: 'Özel Ders Merkezi', searchStrategy: 'Armut.com, Sahibinden (Özel Ders), Ozelders.com, Instagram, LinkedIn (Eğitmenler), Facebook Veli Grupları', targetAudience: 'Etüt merkezleri' },
      { id: 'language', name: 'Dil Okulu', searchStrategy: 'Google Maps, LinkedIn (Eğitim Kurumları), Yabancı Dil Kursları Derneği, Instagram, Xing (Education Management)', targetAudience: 'Dil okulu müdürleri' },
      { id: 'driving', name: 'Sürücü Kursu', searchStrategy: 'MEB Sürücü Kursları Listesi, Google Maps, Sürücü Kursları Konfederasyonu, Sarı Sayfalar', targetAudience: 'Sürücü kursu sahipleri' },
      { id: 'course', name: 'MEB Onaylı Kurs', searchStrategy: 'İSMEK/Halk Eğitim Listeleri, Google Maps, Kariyer.net (Eğitmen İlanları), LinkedIn (Kurs Müdürleri)', targetAudience: 'Kurs yöneticileri' },
      { id: 'online_edu', name: 'Uzaktan Eğitim Platformu', searchStrategy: 'Udemy (Eğitmen Profilleri), LinkedIn (E-learning Specialists), YouTube (Eğitim Kanalları), Teachable', targetAudience: 'E-eğitim girişimcileri' }
    ]
  },
  {
    id: 'automotive',
    name: 'Otomotiv & Servis',
    icon: 'Car',
    subSectors: [
      { id: 'service', name: 'Araç Servisi / Tamirhane', searchStrategy: 'Google Maps (Sanayi Siteleri), Armut.com, Facebook Sanayi Grupları, Oto Servis Rehberleri, LinkedIn (Servis Müdürleri)', targetAudience: 'Oto servisleri' },
      { id: 'wash', name: 'Oto Yıkama & Detaylı Temizlik', searchStrategy: 'Google Maps, Instagram (#otokuaför), Foursquare, Araç Bakım Forumları (Detailing Turkey), Facebook', targetAudience: 'Oto yıkama sahipleri' },
      { id: 'rent', name: 'Araç Kiralama', searchStrategy: 'Rent a Car Firmaları Listesi, Yolcu360, LinkedIn (Filo Yöneticileri), Google Maps, TOKKDER Üyeleri', targetAudience: 'Araç kiralama ofisleri' },
      { id: 'gallery', name: 'Oto Galeri', searchStrategy: 'Sahibinden.com (Galeri Listesi), Arabam.com, Otonomi, Facebook Galericiler Grupları, LinkedIn', targetAudience: 'Galericiler' },
      { id: 'tires', name: 'Lastik & Jant Satışı', searchStrategy: 'Lastik Markaları Bayi Listeleri (Lassa, Michelin), Google Maps, Sanayi Rehberleri, Instagram', targetAudience: 'Lastikçiler' }
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness & Spor',
    icon: 'Dumbbell',
    subSectors: [
      { id: 'gym', name: 'Spor Salonu (Gym)', searchStrategy: 'Google Maps, Instagram (#fitness), SporCard Salon Listesi, LinkedIn (Gym Owners), Facebook Spor Grupları', targetAudience: 'Spor salonu işletmecileri' },
      { id: 'pilates', name: 'Pilates / Yoga Stüdyosu', searchStrategy: 'Instagram (#pilates), Armut.com, Yoga Merkezleri Haritası, LinkedIn, ClassPass', targetAudience: 'Stüdyo sahipleri' },
      { id: 'pt', name: 'Kişisel Antrenör (PT)', searchStrategy: 'Instagram (PT Profilleri), LinkedIn (Personal Trainers), Armut.com, Spor Kariyer Siteleri, Xing', targetAudience: 'Özel antrenörler' },
      { id: 'martial_arts', name: 'Dövüş Sanatları Merkezi', searchStrategy: 'Federasyon Listeleri, Google Maps, Facebook Spor Kulübü Sayfaları, Instagram', targetAudience: 'Dövüş okulu sahipleri' },
      { id: 'crossfit', name: 'Crossfit Box', searchStrategy: 'Crossfit Resmi Haritası (Affiliates), Instagram, Google Maps, LinkedIn', targetAudience: 'Crossfit salonu sahipleri' }
    ]
  },
  {
    id: 'law',
    name: 'Hukuk & Danışmanlık',
    icon: 'Scale',
    subSectors: [
      { id: 'lawyer', name: 'Avukatlık Ofisi', searchStrategy: 'Baro Levhaları (İstanbul, Ankara Barosu vb.), LinkedIn (Avukatlar/Hukuk Büroları), Xing (Legal), Eniyihekim (Hukuk Bölümü)', targetAudience: 'Avukatlar' },
      { id: 'patent', name: 'Marka / Patent Danışmanlığı', searchStrategy: 'Türk Patent ve Marka Kurumu Vekil Listesi, LinkedIn (Marka Vekilleri), Google Maps', targetAudience: 'Marka vekilleri' },
      { id: 'tax', name: 'Vergi Danışmanlığı', searchStrategy: 'LinkedIn (Vergi Uzmanları), Mali Müşavirler Odası, Xing, Vergi Forumları', targetAudience: 'Mali müşavirler' },
      { id: 'hr', name: 'İnsan Kaynakları Danışmanı', searchStrategy: 'LinkedIn (İK Yöneticileri/Headhunters), Kariyer.net, İK Dernekleri (PERYÖN), Xing (HR)', targetAudience: 'İK şirketleri' },
      { id: 'corporate_law', name: 'İş Hukuku / Ticaret Hukuku', searchStrategy: 'LinkedIn (Kurumsal Hukuk Departmanları), Legal 500 Listeleri, Hukuk Bürosu Web Siteleri', targetAudience: 'Hukuk bürosu ortakları' }
    ]
  },
  {
    id: 'finance',
    name: 'Sigorta & Finans',
    icon: 'BadgeDollarSign',
    subSectors: [
      { id: 'insurance', name: 'Sigorta Acentesi', searchStrategy: 'TOBB Sigorta Acenteleri Levhası, Google Maps, LinkedIn (Sigorta Acenteleri), Sigorta Şirketleri Web Siteleri', targetAudience: 'Acenteler' },
      { id: 'financial_advisor', name: 'Finansal Danışmanlık', searchStrategy: 'LinkedIn (Financial Advisors), Xing, Yatırım Danışmanlığı Firmaları, BloombergHT Yorumcuları', targetAudience: 'Finans danışmanları' },
      { id: 'credit', name: 'Kredi Danışmanı', searchStrategy: 'Google Maps, Kredi Danışmanlık Firmaları, LinkedIn, Facebook Finans Grupları', targetAudience: 'Kredi uzmanları' },
      { id: 'pension_expert', name: 'Bireysel Emeklilik Uzmanı', searchStrategy: 'LinkedIn (BES Uzmanları), Sigorta Şirketleri Kadroları, Xing', targetAudience: 'BES uzmanları' },
      { id: 'investment_expert', name: 'Yatırım Uzmanı', searchStrategy: 'SPK Lisanslı Uzmanlar Listesi, LinkedIn (Portfolio Managers), KAP (Kamuyu Aydınlatma Platformu)', targetAudience: 'Fon yöneticileri' }
    ]
  },
  {
    id: 'travel',
    name: 'Seyahat & Tur',
    icon: 'Plane',
    subSectors: [
      { id: 'tour_operator', name: 'Yurtiçi Tur Operatörü', searchStrategy: 'TÜRSAB Acenteler Listesi, TripAdvisor, LinkedIn, Google Maps, Tatil Sepeti', targetAudience: 'Tur şirketi sahipleri' },
      { id: 'study_abroad', name: 'Yurtdışı Eğitim Acentesi', searchStrategy: 'LinkedIn (International Education), Yurtdışı Eğitim Fuarları, Google Maps, Instagram, Xing', targetAudience: 'Eğitim danışmanları' },
      { id: 'hajj', name: 'Umre / Hac Organizasyonu', searchStrategy: 'Hac Umre Seyahat Acenteleri Derneği, Google Maps, Facebook Hac Grupları, Diyanet Listeleri', targetAudience: 'Hac organizatörleri' },
      { id: 'visa', name: 'Vize Danışmanlığı', searchStrategy: 'Google Maps, Vize Danışmanlık Firmaları, LinkedIn, Instagram, Gezi Forumları', targetAudience: 'Vize danışmanları' },
      { id: 'transfer', name: 'Havalimanı Transfer Hizmeti', searchStrategy: 'TripAdvisor, Transfer Firmaları Web Siteleri, Google Maps, LinkedIn (Transport Managers), Viator', targetAudience: 'Transfer şirketi sahipleri' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Ticaret',
    icon: 'ShoppingCart',
    subSectors: [
      { id: 'fashion', name: 'Moda & Aksesuar', searchStrategy: 'Instagram (#butik, #moda), Shopier Mağazaları, Trendyol/Hepsiburada Satıcı Listeleri, LinkedIn (E-ticaret Yöneticileri), Modacruz', targetAudience: 'Butik sahipleri' },
      { id: 'tech', name: 'Elektronik / Teknoloji', searchStrategy: 'Akakçe/Cimri Mağaza Listeleri, Teknoloji Forumları (DonanımHaber), LinkedIn (E-ticaret Müdürleri), Amazon Sellers', targetAudience: 'E-ticaret yöneticileri' },
      { id: 'home', name: 'Ev & Yaşam Ürünleri', searchStrategy: 'Instagram (#dekorasyon), Etsy Satıcıları, Trendyol Satıcı Profilleri, Pinterest, Vivense İş Ortakları', targetAudience: 'Pazaryeri satıcıları' },
      { id: 'b2b', name: 'B2B Ticaret (toptan)', searchStrategy: 'Alibaba/Turkinstry, Merter/Laleli Rehberleri, LinkedIn (Export Managers), Kompass, Europages', targetAudience: 'Toptancılar' },
      { id: 'instagram', name: 'Instagram Satıcıları', searchStrategy: 'Instagram Shop, Influencer İşbirlikleri, Facebook Marketplace, Shopier, Gardrops', targetAudience: 'Sosyal medya satıcıları' }
    ]
  },
  {
    id: 'accounting',
    name: 'Muhasebe & Mali',
    icon: 'Calculator',
    subSectors: [
      { id: 'cpa', name: 'Serbest Muhasebeci Mali Müşavir (SMMM)', searchStrategy: 'SMMM Odası Üye Listeleri, Google Maps, LinkedIn (Mali Müşavirler), AloMaliye Forumları', targetAudience: 'Mali müşavirler' },
      { id: 'audit', name: 'Bağımsız Denetim', searchStrategy: 'KGK (Kamu Gözetimi Kurumu) Yetkili Firmalar, LinkedIn (Denetçiler), Xing', targetAudience: 'Denetçiler' },
      { id: 'tax_planning', name: 'Vergi Planlama', searchStrategy: 'LinkedIn (Vergi Hukuku Uzmanları), Akademik Makale Yazarları, Hukuk/Maliye Forumları', targetAudience: 'Vergi uzmanları' },
      { id: 'reporting', name: 'Finansal Raporlama', searchStrategy: 'LinkedIn (Finansal Analistler), Kariyer.net, Xing (Finance)', targetAudience: 'Finans müdürleri' },
      { id: 'payroll', name: 'Bordro & SGK Hizmetleri', searchStrategy: 'Outsource Bordro Firmaları, LinkedIn (Payroll Specialists), İK Zirveleri', targetAudience: 'İK ve bordro şirketleri' }
    ]
  },
  {
    id: 'cleaning_services',
    name: 'Temizlik & Bakım',
    icon: 'SprayCan',
    subSectors: [
      { id: 'home_cleaning', name: 'Ev Temizliği', searchStrategy: 'Armut.com, Mutlubiev, Google Maps, Instagram, Facebook Yerel Gruplar, Sahibinden (Hizmetler)', targetAudience: 'Temizlik firması sahipleri' },
      { id: 'office_cleaning', name: 'Ofis Temizliği', searchStrategy: 'LinkedIn (Tesis Yönetim Hizmetleri), Kurumsal Temizlik Şirketleri Dizinleri, Google Maps, Xing', targetAudience: 'Kurumsal temizlik şirketleri' },
      { id: 'carpet_cleaning', name: 'Halı/Koltuk Yıkama', searchStrategy: 'Google Maps, Broşür Dağıtım Firmaları, Yerel Rehberler, Facebook, Instagram', targetAudience: 'Halı yıkamacılar' },
      { id: 'disinfection', name: 'Dezenfeksiyon Hizmeti', searchStrategy: 'Sağlık Bakanlığı Yetkili Firmalar, Google Maps, LinkedIn, Armut.com', targetAudience: 'İlaçlama firmaları' },
      { id: 'pest_control', name: 'Haşere İlaçlama', searchStrategy: 'Google Maps, Belediye Yetkili Firmalar, Armut.com, İlaçlama Dernekleri', targetAudience: 'İlaçlama servisleri' }
    ]
  },
  {
    id: 'home_services',
    name: 'Ev & Tesisat Hizmetleri',
    icon: 'Wrench',
    subSectors: [
      { id: 'electrician', name: 'Elektrikçi', searchStrategy: 'Armut.com, Google Maps, Facebook Usta Grupları, Elektrik Mühendisleri Odası, Sahibinden', targetAudience: 'Elektrik ustaları' },
      { id: 'plumber', name: 'Tesisatçı', searchStrategy: 'Armut.com, Google Maps, Nalbur Yönlendirmeleri, Tesisatçı Forumları, Instagram', targetAudience: 'Tesisatçılar' },
      { id: 'appliance_repair', name: 'Beyaz Eşya Servisi', searchStrategy: 'Google Maps, Şikayetvar (Marka Servisleri), Armut.com, Yetkili Servis Listeleri', targetAudience: 'Teknik servisler' },
      { id: 'gas_service', name: 'Doğalgaz Kombi Servisi', searchStrategy: 'Yetkili Servis Listeleri (Demirdöküm, Vaillant), Google Maps, Gaz Dağıtım Şirketi Yetkilileri', targetAudience: 'Kombi servisleri' },
      { id: 'ac_service', name: 'Klima Bakım / Montaj', searchStrategy: 'Klima Markaları Bayi Listeleri, Armut.com, Google Maps, LinkedIn (HVAC)', targetAudience: 'Klimacılar' }
    ]
  },
  {
    id: 'photo_video',
    name: 'Fotoğraf & Video',
    icon: 'Camera',
    subSectors: [
      { id: 'wedding_photo', name: 'Düğün / Nişan Fotoğrafçısı', searchStrategy: 'Düğün.com, Instagram (#düğünfotoğrafçısı), Facebook Düğün Grupları, Armut.com, Flickr', targetAudience: 'Fotoğrafçılar' },
      { id: 'birth_photo', name: 'Doğum / Bebek Çekimi', searchStrategy: 'Instagram (#doğumfotoğrafçısı), KadınlarKulübü, Armut.com, Google Maps', targetAudience: 'Bebek fotoğrafçıları' },
      { id: 'corporate_video', name: 'Kurumsal Video Prodüksiyon', searchStrategy: 'LinkedIn (Prodüksiyon Ajansları), Behance, Vimeo, Google Maps, Xing', targetAudience: 'Yapım şirketleri' },
      { id: 'content_creator', name: 'Sosyal Medya İçerik Üreticisi', searchStrategy: 'LinkedIn, Instagram, TikTok, Influencer Marketing Platformları, Creatorn', targetAudience: 'İçerik üreticileri' },
      { id: 'studio', name: 'Stüdyo Kiralama', searchStrategy: 'Google Maps, Sahibinden (Kiralık Stüdyo), Fotoğrafçılık Forumları, Instagram', targetAudience: 'Stüdyo sahipleri' }
    ]
  },
  {
    id: 'renovation',
    name: 'Tadilat & Dekorasyon',
    icon: 'Hammer',
    subSectors: [
      { id: 'interior_design', name: 'İç Mimarlık', searchStrategy: 'LinkedIn (İç Mimarlar), Behance, Instagram, Mimarlar Odası, Houzz, Pinterest', targetAudience: 'İç mimarlar' },
      { id: 'painting', name: 'Boya / Badana Hizmetleri', searchStrategy: 'Armut.com, Marshall/Jotun Usta Listeleri, Google Maps, Facebook, Sahibinden', targetAudience: 'Boyacılar' },
      { id: 'furniture_maker', name: 'Mobilya Ustası', searchStrategy: 'Modoko/Masko Firma Listeleri, Google Maps, Instagram (#mobilya), Sahibinden', targetAudience: 'Mobilyacılar' },
      { id: 'glass_balcony', name: 'Cam Balkon / PVC', searchStrategy: 'Google Maps, Armut.com, Yerel Yapı Market Rehberleri, Facebook', targetAudience: 'PVC bayileri' },
      { id: 'contractor', name: 'Müteahhitlik', searchStrategy: 'Müteahhitler Birliği Üyeleri, Sahibinden (Projeler), LinkedIn, Google Maps, Zingat', targetAudience: 'Müteahhitler' }
    ]
  },
  {
    id: 'events',
    name: 'Etkinlik & Organizasyon',
    icon: 'PartyPopper',
    subSectors: [
      { id: 'wedding_planner', name: 'Düğün Planlayıcısı', searchStrategy: 'Düğün.com, Instagram, Pinterest, LinkedIn (Event Planner), Google Maps, GigSalad', targetAudience: 'Organizasyon şirketleri' },
      { id: 'birthday', name: 'Doğum Günü Organizasyonu', searchStrategy: 'Instagram (#doğumgünü), Armut.com, Parti Malzemesi Satan Yerler, Google Maps', targetAudience: 'Parti evi sahipleri' },
      { id: 'corporate_events', name: 'Kurumsal Etkinlik Firmaları', searchStrategy: 'LinkedIn (Event Managers), Etkinlik Yönetimi Dernekleri, Google Maps, Kongre Büroları, Xing', targetAudience: 'Etkinlik yöneticileri' },
      { id: 'dj_sound', name: 'DJ / Ses Işık Sistemleri', searchStrategy: 'Armut.com, Müzisyen Forumları, Instagram, Google Maps, Soundcloud', targetAudience: 'Ses ışık firmaları' },
      { id: 'catering', name: 'Catering Firmaları', searchStrategy: 'Yemeksepeti (Kurumsal), Google Maps, LinkedIn, Düğün.com, Armut.com', targetAudience: 'Catering şirketleri' }
    ]
  },
  {
    id: 'personal_dev',
    name: 'Kişisel Gelişim & Terapi',
    icon: 'Brain',
    subSectors: [
      { id: 'life_coach', name: 'Yaşam Koçu', searchStrategy: 'ICF (Uluslararası Koçluk Federasyonu) Üye Listesi, LinkedIn, Instagram, Armut.com, Medium', targetAudience: 'Yaşam koçları' },
      { id: 'family_therapy', name: 'Aile Terapisti', searchStrategy: 'DoktorTakvimi, Psikologlar Derneği, Google Maps, LinkedIn, TavsiyeEdiyorum.com', targetAudience: 'Aile danışmanları' },
      { id: 'nlp', name: 'NLP / Mindfulness Uzmanı', searchStrategy: 'LinkedIn, Udemy (Eğitmenler), Instagram, Kişisel Gelişim Merkezleri', targetAudience: 'NLP uzmanları' },
      { id: 'couples_therapy', name: 'Çift Terapisti', searchStrategy: 'DoktorTakvimi, Armut.com, Google Maps, Psikoloji Portalları', targetAudience: 'Psikologlar' },
      { id: 'psychologist', name: 'Psikolog', searchStrategy: 'Türk Psikologlar Derneği, DoktorTakvimi, LinkedIn, Google Maps, Xing', targetAudience: 'Klinik psikologlar' }
    ]
  },
  {
    id: 'entertainment',
    name: 'Oyun & Eğlence',
    icon: 'Gamepad2',
    subSectors: [
      { id: 'vr_center', name: 'Oyun Salonu / VR Center', searchStrategy: 'Google Maps, Foursquare, Instagram (#vr), AVM Mağaza Listeleri, Tripadvisor', targetAudience: 'Oyun merkezi sahipleri' },
      { id: 'paintball', name: 'Paintball / Laser Tag', searchStrategy: 'Google Maps, Fırsat Siteleri (Grupanya), TripAdvisor, Facebook Grupları', targetAudience: 'Saha işletmecileri' },
      { id: 'karaoke', name: 'Karaoke Bar', searchStrategy: 'Zomato, TripAdvisor, Google Maps, Instagram, Foursquare', targetAudience: 'Mekan sahipleri' },
      { id: 'amusement_park', name: 'Eğlence Parkı', searchStrategy: 'Google Maps, TripAdvisor, Turizm Rehberleri, LinkedIn', targetAudience: 'Park yöneticileri' },
      { id: 'escape_room', name: 'Kaçış Evi', searchStrategy: 'Kaçış Oyunu İnceleme Siteleri, TripAdvisor, Google Maps, Instagram', targetAudience: 'Kaçış evi sahipleri' }
    ]
  },
  {
    id: 'fashion_custom',
    name: 'Moda & Kişiye Özel',
    icon: 'Shirt',
    subSectors: [
      { id: 'tailor', name: 'Terzi / Özel Dikim', searchStrategy: 'Google Maps (Mahalle Terzileri), Armut.com, Modaevleri Rehberi, Sahibinden', targetAudience: 'Terziler' },
      { id: 'bag_maker', name: 'Çanta / Aksesuar Üreticisi', searchStrategy: 'Instagram (#deriçanta), Etsy, Shopier, LinkedIn (Üreticiler), Modacruz', targetAudience: 'Atölye sahipleri' },
      { id: 'jewelry', name: 'Kişiye Özel Takı Tasarımı', searchStrategy: 'Instagram (#takıtasarım), Etsy, Kapalıçarşı Esnaf Listeleri, Pinterest', targetAudience: 'Tasarımcılar' },
      { id: 'fashion_consultant', name: 'Moda Danışmanı', searchStrategy: 'LinkedIn (Stil Danışmanları), Instagram, Moda Blogları, Xing', targetAudience: 'Stilistler' },
      { id: 'wedding_dress', name: 'Gelinlikçi', searchStrategy: 'Düğün.com, Instagram (#gelinlik), Google Maps (Moda Semtleri), Facebook, Pinterest', targetAudience: 'Gelinlikçiler' }
    ]
  },
  {
    id: 'general',
    name: 'Diğer İşletmeler',
    icon: 'Briefcase',
    subSectors: [
      { id: 'event_org', name: 'Etkinlik & Organizasyon', searchStrategy: 'LinkedIn, Google Maps, Sektörel Dernekler, Xing', targetAudience: 'Organizatörler' },
      { id: 'photo_studio', name: 'Fotoğraf / Video Stüdyosu', searchStrategy: 'Google Maps, Instagram, Armut.com, Sahibinden', targetAudience: 'Stüdyo sahipleri' },
      { id: 'agency', name: 'Ajans (Reklam, Sosyal Medya)', searchStrategy: 'LinkedIn (Ajanslar), Google Maps, Behance, Reklamcılar Derneği, Clutch.co', targetAudience: 'Ajans başkanları' },
      { id: 'cleaning_gen', name: 'Temizlik Hizmeti', searchStrategy: 'Armut.com, Google Maps, LinkedIn, Sarı Sayfalar', targetAudience: 'Temizlik firmaları' },
      { id: 'tech_service', name: 'Teknik Servis', searchStrategy: 'Google Maps, Marka Yetkili Servis Listeleri, Şikayetvar', targetAudience: 'Servis yetkilileri' }
    ]
  }
];