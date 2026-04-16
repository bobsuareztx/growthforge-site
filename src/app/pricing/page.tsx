import { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { pricingPageData } from "@/data/topLevel/pricing";

export const metadata: Metadata = {
  title: "Pricing | Growthforge",
  description: "Explore Growthforge pricing and find the plan that fits your team.",
};

export default function Page() {
  return <PricingPage {...pricingPageData} />;
}
