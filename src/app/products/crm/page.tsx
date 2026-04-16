import { Metadata } from "next";
import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { crmPageData } from "@/data/products/crm";

export const metadata: Metadata = {
  title: "CRM | Growthforge",
  description: "A cleaner CRM for teams that need better customer context and lifecycle visibility.",
};

export default function Page() {
  return <ProductDetailTemplate {...crmPageData} />;
}
