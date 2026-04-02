import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Tabela & Totem Tasarımları",
  description: "Rubato Design tabela ve totem tasarım çalışmaları. Mağaza cephe ve tabela tasarımı.",
};

export default function TabelaPage() {
  return <CategoryPage category="tabela" />;
}
