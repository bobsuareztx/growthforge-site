import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { attributionReportingDashboardPageData } from "@/data/products/attributionReportingDashboard";

export const metadata: Metadata = {
  title: "Attribution & Reporting Dashboard | Growthforge",
  description: "Attribution and reporting dashboard view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...attributionReportingDashboardPageData} />;
}
