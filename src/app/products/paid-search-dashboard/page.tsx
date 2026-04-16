import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { paidSearchDashboardPageData } from "@/data/products/paidSearchDashboard";

export const metadata: Metadata = {
  title: "Paid Search Dashboard | Growthforge",
  description: "Paid search dashboard view for the Growthforge demo platform.",
};

export default function Page() {
  return <ProductDetailTemplate {...paidSearchDashboardPageData} />;
}
