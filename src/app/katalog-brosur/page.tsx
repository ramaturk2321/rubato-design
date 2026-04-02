import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Katalog & Broşür Tasarımları",
  description: "Rubato Design katalog ve broşür tasarım çalışmaları. Kurumsal katalog ve broşür tasarımı.",
};

export default function KatalogPage() {
  return <CategoryPage category="katalog" />;
}
