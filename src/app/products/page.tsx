import { Metadata } from "next";
import ProductsOverviewPage from "@/components/pages/ProductsOverviewPage";
import { productsOverviewData } from "@/data/topLevel/productsOverview";

export const metadata: Metadata = {
  title: "Products | Growthforge",
  description: "Explore the Growthforge product system.",
};

export default function Page() {
  return <ProductsOverviewPage {...productsOverviewData} />;
}
