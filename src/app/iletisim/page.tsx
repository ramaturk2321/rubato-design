import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Rubato Design ile iletişime geçin. 0216 379 07 08 | WhatsApp: 535 664 77 52",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-16 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
        {/* Map */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5!2d29.25!3d40.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU1JzQ4LjAiTiAyOcKwMTUnMDAuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />

          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-2">Hizmetlerimiz hakkında görüşmek için.</p>
          <p className="text-xl font-black mb-6">BİZİ ARAYIN!</p>

          <a
            href="tel:02163790708"
            className="text-2xl font-bold underline hover:text-brand-dark/70 transition-colors mb-3 block"
          >
            0216 379 07 08
          </a>

          <a
            href="https://wa.me/905356647752"
            className="text-2xl font-bold underline hover:text-brand-dark/70 transition-colors block"
          >
            Whatsapp 535 664 77 52
          </a>
        </div>
      </div>

      <footer className="py-6 text-center text-sm text-brand-dark/60 mt-16">
        &copy; Rubato Design
      </footer>
      <BackToTop />
    </div>
  );
}
