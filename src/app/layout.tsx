import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Rubato Design - Tasarım Ajansı",
    template: "%s | Rubato Design",
  },
  description:
    "360 derece reklam ve tanıtım hizmetleri. Ambalaj tasarımı, logotype, katalog, key visual, tabela ve motion graphic.",
  keywords: [
    "tasarım ajansı",
    "ambalaj tasarımı",
    "grafik tasarım",
    "logo tasarımı",
    "İstanbul tasarım",
    "rubato design",
  ],
  openGraph: {
    title: "Rubato Design - Tasarım Ajansı",
    description: "360 derece reklam ve tanıtım hizmetleri",
    url: "https://rubatodesign.com.tr",
    siteName: "Rubato Design",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex">
        <Sidebar />
        <main className="flex-1 ml-0 lg:ml-[320px]">{children}</main>
      </body>
    </html>
  );
}
