import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { executiveDashboardPageData } from "@/data/products/executiveDashboard";

export const metadata: Metadata = {
  title: "Executive Dashboard | Growthforge",
  description: "Executive dashboard view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...executiveDashboardPageData} />;
}
