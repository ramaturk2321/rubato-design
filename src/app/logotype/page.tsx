import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Logotype Tasarımları",
  description: "Rubato Design logo ve marka kimliği tasarım çalışmaları. Profesyonel logotype tasarımı hizmetleri.",
};

export default function LogotypePage() {
  return <CategoryPage category="logotype" />;
}
