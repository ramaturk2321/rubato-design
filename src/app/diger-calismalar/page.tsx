import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Diğer Çalışmalar",
  description: "Rubato Design diğer tasarım çalışmaları. Fuar standı, araç giydirme ve özel projeler.",
};

export default function DigerPage() {
  return <CategoryPage category="diger" />;
}
