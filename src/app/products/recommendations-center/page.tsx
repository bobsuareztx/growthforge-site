import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { recommendationsCenterPageData } from "@/data/products/recommendationsCenter";

export const metadata: Metadata = {
  title: "Recommendations Center | Growthforge",
  description: "Recommendations center view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...recommendationsCenterPageData} />;
}
