import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { seoDashboardPageData } from "@/data/products/seoDashboard";

export const metadata: Metadata = {
  title: "SEO Dashboard | Growthforge",
  description: "SEO dashboard view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...seoDashboardPageData} />;
}
