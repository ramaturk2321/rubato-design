export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  tags: string[];
  image: string;
}

export type Category =
  | "ambalaj"
  | "logotype"
  | "katalog"
  | "key-visual"
  | "tabela"
  | "motion"
  | "diger";

export const categories: { slug: string; label: string; category: Category }[] = [
  { slug: "/", label: "AMBALAJ", category: "ambalaj" },
  { slug: "/logotype", label: "LOGOTYPE", category: "logotype" },
  { slug: "/katalog-brosur", label: "KATALOG & BROŞÜR", category: "katalog" },
  { slug: "/key-visual-afis", label: "KEY VISUAL & AFİŞ", category: "key-visual" },
  { slug: "/tabela-totem", label: "TABELA & TOTEM", category: "tabela" },
  { slug: "/motion-graphic-video", label: "MOTION GRAPHIC & VIDEO", category: "motion" },
  { slug: "/diger-calismalar", label: "DİĞER ÇALIŞMALAR", category: "diger" },
];

export const projects: Project[] = [
  // === AMBALAJ ===
  {
    id: "liya-marka",
    title: "LİYA MASTERPIECES",
    subtitle: "MARKA KONSEPTİ",
    category: "ambalaj",
    tags: ["Marka Konsepti", "Grafik Tasarım", "Sanat Yönetimi", "İllüstrasyon"],
    image: "/projects/liya-masterpieces.jpg",
  },
  {
    id: "damore",
    title: "D'AMORE SPECIAL",
    subtitle: "MARKA KONSEPTİ",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "Marka Kimliği"],
    image: "/projects/damore.jpg",
  },
  {
    id: "glutensiz-fabrika",
    title: "GLÜTENSİZ FABRİKA",
    subtitle: "AMBALAJ TASARIMI & MARKA KİMLİĞİ",
    category: "ambalaj",
    tags: ["Markalama", "Sanat Yönetimi", "Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/glutensiz-fabrika.jpg",
  },
  {
    id: "doruk-cities",
    title: "CITIES OF LOVE SERİSİ",
    subtitle: "DORUK",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon", "Fotoğrafçılık", "Sanat Yönetimi"],
    image: "/projects/doruk-cities.jpg",
  },
  {
    id: "doruk-love",
    title: "LOVE COLLECTION HEDİYELİK ÇİKOLATA",
    subtitle: "DORUK",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı"],
    image: "/projects/doruk-love.jpg",
  },
  {
    id: "doruk-sticks",
    title: "CHOCOLATE STICKS",
    subtitle: "DORUK",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon", "Fotoğrafçılık", "Sanat Yönetimi"],
    image: "/projects/doruk-sticks.jpg",
  },
  {
    id: "doruk-rocher",
    title: "ROCHER CHOCOLATE",
    subtitle: "DORUK",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon", "Fotoğrafçılık", "Sanat Yönetimi"],
    image: "/projects/doruk-rocher.jpg",
  },
  {
    id: "doruk-corn",
    title: "ROCHER CORN FLAKES",
    subtitle: "DORUK",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/doruk-corn.jpg",
  },
  {
    id: "doruk-semsiye",
    title: "ŞEMSİYE ÇİKOLATA",
    subtitle: "DORUK ÇİKOLATA",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı"],
    image: "/projects/doruk-semsiye.jpg",
  },
  {
    id: "doruk-kuvertur",
    title: "KUVERTÜR ÇİKOLATA SERİSİ",
    subtitle: "DORUK ÇİKOLATA",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/doruk-kuvertur.jpg",
  },
  {
    id: "arife-krem",
    title: "KREM ŞANTİ",
    subtitle: "ARİFE",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon", "Fotoğrafçılık"],
    image: "/projects/arife-krem.jpg",
  },
  {
    id: "arife-pasta",
    title: "PASTA KREMASI",
    subtitle: "ARİFE",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon", "Fotoğrafçılık"],
    image: "/projects/arife-pasta.jpg",
  },
  {
    id: "doruk-tablet",
    title: "TABLET ÇİKOLATA SERİSİ",
    subtitle: "DORUK ÇİKOLATA",
    category: "ambalaj",
    tags: ["Ambalaj Tasarımı", "İllüstrasyon"],
    image: "/projects/doruk-tablet.jpg",
  },
  {
    id: "arife-damla",
    title: "DAMLA & PUL ÇİKOLATA",
    subtitle: "ARİFE",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/arife-damla.jpg",
  },
  {
    id: "ferr-corba",
    title: "HAZIR ÇORBA SERİSİ",
    subtitle: "FERR",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Fotoğrafçılık", "Metin Yazarlığı"],
    image: "/projects/ferr-corba.jpg",
  },
  {
    id: "yemen-baharat",
    title: "YEDİ TÜRLÜ BAHARAT",
    subtitle: "YEMEN BAHARAT",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/yemen-baharat.jpg",
  },
  {
    id: "haket-map",
    title: "PP MAP",
    subtitle: "HAKET",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Markalama", "Ambalaj Tasarımı"],
    image: "/projects/haket-map.jpg",
  },
  {
    id: "poliner-tel",
    title: "OVMA TELİ",
    subtitle: "POLİNER",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/poliner-tel.jpg",
  },
  {
    id: "goynuk-peynir",
    title: "SÜZME PEYNİR",
    subtitle: "GÖYNÜK",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/goynuk-peynir.jpg",
  },
  {
    id: "kemal-manti",
    title: "ÜÇGEN MANTI",
    subtitle: "YUFKACI KEMAL USTA",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Markalama"],
    image: "/projects/kemal-manti.jpg",
  },
  {
    id: "goynuk-yogurt",
    title: "YOĞURT",
    subtitle: "GÖYNÜK",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/goynuk-yogurt.jpg",
  },
  {
    id: "goynuk-tereyag",
    title: "TEREYAĞI",
    subtitle: "GÖYNÜK",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/goynuk-tereyag.jpg",
  },
  {
    id: "haktat-zeytin",
    title: "YEŞİL ZEYTİN SERİSİ",
    subtitle: "HAKTAT",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/haktat-zeytin.jpg",
  },
  {
    id: "yurda-misir",
    title: "MISIR KONSERVE",
    subtitle: "YURDA",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/yurda-misir.jpg",
  },
  {
    id: "sultanzade-domates",
    title: "DOMATES PÜRESİ",
    subtitle: "SULTANZADE",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Markalama", "Fotoğrafçılık"],
    image: "/projects/sultanzade-domates.jpg",
  },
  {
    id: "poliner-sunger",
    title: "OLUKLU BULAŞIK SÜNGERİ",
    subtitle: "POLİNER",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/poliner-sunger.jpg",
  },
  {
    id: "yurda-salca",
    title: "DOMATES, BİBER SALÇALARI",
    subtitle: "YURDA",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Metin Yazarlığı", "Fotoğrafçılık"],
    image: "/projects/yurda-salca.jpg",
  },
  {
    id: "goynuk-sut",
    title: "UHT & GÜNLÜK SÜT",
    subtitle: "GÖYNÜK",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Fotoğrafçılık", "Sanat Yönetimi"],
    image: "/projects/goynuk-sut.jpg",
  },
  {
    id: "pristino-ambalaj",
    title: "AMBALAJ KONSEPT",
    subtitle: "PRISTINO",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı"],
    image: "/projects/pristino-ambalaj.jpg",
  },
  {
    id: "yurda-tursu",
    title: "KAVANOZ TURŞULAR",
    subtitle: "YURDA",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Fotoğrafçılık"],
    image: "/projects/yurda-tursu.jpg",
  },
  {
    id: "gomi-cop",
    title: "ÇÖP TORBALARI",
    subtitle: "GOMİ",
    category: "ambalaj",
    tags: ["Grafik Tasarım", "Ambalaj Tasarımı", "Markalama"],
    image: "/projects/gomi-cop.jpg",
  },

  // === LOGOTYPE ===
  {
    id: "logo-halinin",
    title: "HALININ BİRİ",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Marka Kimliği"],
    image: "/projects/logo-halinin.jpg",
  },
  {
    id: "logo-noveer",
    title: "NOVEER ALIŞVERİŞ MERKEZİ",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Marka Kimliği"],
    image: "/projects/logo-noveer.jpg",
  },
  {
    id: "logo-goktemiz",
    title: "GÖKTEMİZ İNŞAAT",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Kurumsal Kimlik"],
    image: "/projects/logo-goktemiz.jpg",
  },
  {
    id: "logo-koralla",
    title: "KORALLA",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Ambalaj"],
    image: "/projects/logo-koralla.jpg",
  },
  {
    id: "logo-keyfet",
    title: "KEYFET",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Marka Kimliği"],
    image: "/projects/logo-keyfet.jpg",
  },
  {
    id: "logo-harmoni",
    title: "NEW HARMONİ BAHÇE MOBİLYALARI",
    subtitle: "LOGOTYPE",
    category: "logotype",
    tags: ["Logo Tasarımı", "Marka Kimliği"],
    image: "/projects/logo-harmoni.jpg",
  },

  // === KATALOG & BROŞÜR ===
  {
    id: "katalog-doruk",
    title: "DORUK ÇİKOLATA KATALOG",
    subtitle: "KATALOG",
    category: "katalog",
    tags: ["Katalog Tasarımı", "Grafik Tasarım", "Fotoğrafçılık"],
    image: "/projects/katalog-doruk.jpg",
  },
  {
    id: "katalog-goynuk",
    title: "GÖYNÜK SÜT ÜRÜNLERİ KATALOG",
    subtitle: "KATALOG",
    category: "katalog",
    tags: ["Katalog Tasarımı", "Grafik Tasarım"],
    image: "/projects/katalog-goynuk.jpg",
  },

  // === KEY VISUAL & AFİŞ ===
  {
    id: "kv-doruk",
    title: "DORUK ÇİKOLATA KEY VISUAL",
    subtitle: "KEY VISUAL",
    category: "key-visual",
    tags: ["Key Visual", "Sanat Yönetimi", "Fotoğrafçılık"],
    image: "/projects/kv-doruk.jpg",
  },
  {
    id: "kv-yurda",
    title: "YURDA KEY VISUAL",
    subtitle: "KEY VISUAL",
    category: "key-visual",
    tags: ["Key Visual", "Grafik Tasarım"],
    image: "/projects/kv-yurda.jpg",
  },

  // === TABELA & TOTEM ===
  {
    id: "tabela-noveer",
    title: "NOVEER AVM TABELA",
    subtitle: "TABELA",
    category: "tabela",
    tags: ["Tabela Tasarımı", "Cephe Tasarımı"],
    image: "/projects/tabela-noveer.jpg",
  },
  {
    id: "tabela-halinin",
    title: "HALININ BİRİ TOTEM",
    subtitle: "TOTEM",
    category: "tabela",
    tags: ["Totem Tasarımı", "Cephe Tasarımı"],
    image: "/projects/tabela-halinin.jpg",
  },

  // === MOTION GRAPHIC & VIDEO ===
  {
    id: "motion-doruk",
    title: "DORUK ÇİKOLATA REKLAM FİLMİ",
    subtitle: "MOTION GRAPHIC",
    category: "motion",
    tags: ["Motion Graphic", "Video Prodüksiyon", "Sanat Yönetimi"],
    image: "/projects/motion-doruk.jpg",
  },

  // === DİĞER ÇALIŞMALAR ===
  {
    id: "diger-fuar",
    title: "FUAR STANDI TASARIMLARI",
    subtitle: "DİĞER",
    category: "diger",
    tags: ["Fuar Standı", "3D Tasarım", "Uygulama"],
    image: "/projects/diger-fuar.jpg",
  },
  {
    id: "diger-arac",
    title: "ARAÇ GİYDİRME",
    subtitle: "DİĞER",
    category: "diger",
    tags: ["Araç Giydirme", "Grafik Tasarım"],
    image: "/projects/diger-arac.jpg",
  },
];

export function getProjectsByCategory(category: Category): Project[] {
  return projects.filter((p) => p.category === category);
}
