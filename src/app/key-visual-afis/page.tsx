import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Key Visual & Afiş Tasarımları",
  description: "Rubato Design key visual ve afiş tasarım çalışmaları. Etkileyici görsel iletişim tasarımları.",
};

export default function KeyVisualPage() {
  return <CategoryPage category="key-visual" />;
}
