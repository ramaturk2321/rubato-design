import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Motion Graphic & Video",
  description: "Rubato Design motion graphic ve video prodüksiyon çalışmaları. Reklam filmi ve animasyon.",
};

export default function MotionPage() {
  return <CategoryPage category="motion" />;
}
