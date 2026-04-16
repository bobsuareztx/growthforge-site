import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { funnelPipelineDashboardPageData } from "@/data/products/funnelPipelineDashboard";

export const metadata: Metadata = {
  title: "Funnel & Pipeline Dashboard | Growthforge",
  description: "Funnel and pipeline dashboard view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...funnelPipelineDashboardPageData} />;
}
