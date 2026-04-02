import { Metadata } from "next";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "Manifestomuz",
  description: "Rubato Design olarak tasarımın sınırlarını aşan bir ekibiz. 360 derece reklam ve tanıtım hizmetleri sunuyoruz.",
};

const values = [
  {
    title: "Üretkenlikte Sınırsızlık",
    text: "Her projeyi benzersiz kılmak için üretkenliğimizin sınırlarını zorluyoruz. Etkili çözümlerle, etkileyici deneyimler üretmenin uğraşını veriyoruz.",
  },
  {
    title: "Müşteri Odaklılık",
    text: "Müşterilerimizin başarısı, bizim başarımızdır. Müşteri ihtiyaçlarına odaklanır, hedeflerine ulaşmalarına yardımcı olmak için el birliğiyle çalışırız.",
  },
  {
    title: "Teknolojiye Hakimiyet",
    text: "Zamanın hızla değişimine ayak uydurmak için sürekli gelişen teknolojiyi yakından takip eder. Teknolojinin gelişimiyle hizmet kalitemizi geliştiririz.",
  },
  {
    title: "İşbirliği ve Ekip Çalışması",
    text: "En iyi sonuçları elde etmek için işbirliğine önem veririz. Birlikte çalışmak, büyük başarıları mümkün kılar.",
  },
  {
    title: "Kalite Tutkusu",
    text: "Her projede yüksek kaliteyi hedefleriz. Detaylara özen gösterir, üretimin her aşamasında kaliteyi sağlamak için çaba harcarız.",
  },
  {
    title: "Sürekli Gelişim ve Adaptasyon",
    text: "Tüketici davranışları, piyasalar ve teknoloji sürekli değişir. Dünyanın değişen trendlerini takip eder, sürekli öğreniriz. Daha iyi hizmet sunmak için sürekli gelişim çabasındayız.",
  },
  {
    title: "Stratejik Düşünce",
    text: "Her proje bir stratejiyle başlar. Müşterilerimizin hedeflerini gerçekleştirmek için, stratejik düşünceyi işimizin temel taşı biliriz.",
  },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen px-6 py-16 md:px-16 lg:px-24 max-w-4xl">
      <h2 className="text-4xl font-black mb-8 text-center">MANİFESTOMUZ</h2>

      <p className="text-center text-lg leading-relaxed mb-16">
        Biz, tasarımın sınırlarını aşan bir ekibiz. Müşterilerimize sıradanlığın
        ötesinde deneyimler sunmak için buradayız. 360 derece reklam ve tanıtım
        hizmetleri sunarak, her proje ve her müşteri için fark üretme vizyonu ile
        yola çıktık. İşte bu vizyonun taşıyıcısı olarak, aşağıdaki ilkeleri
        benimsiyoruz
      </p>

      <div className="space-y-12">
        {values.map((v) => (
          <div key={v.title} className="text-center">
            <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
            <p className="text-base leading-relaxed text-brand-dark/80">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-base leading-relaxed text-brand-dark/80">
        <p>
          Biz, markaların daha güçlü ve etkili bir şekilde iletişim kurmasına
          yardımcı oluyoruz. Her projede, müşterilerimizin beklentilerini aşmayı
          hedefleriz. 360 derece reklam ve tanıtım hizmetlerimizle
          müşterilerimize, işbirliği yaptığımız ekip üyelerimize ve parçası
          olduğumuz topluma değer katmaya devam edeceğiz.
        </p>
      </div>

      <footer className="py-6 text-center text-sm text-brand-dark/60 mt-16">
        &copy; Rubato Design
      </footer>
      <BackToTop />
    </div>
  );
}
