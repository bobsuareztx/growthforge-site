import { Metadata } from "next";
import GetStartedPage from "@/components/pages/GetStartedPage";
import { getStartedPageData } from "@/data/topLevel/getStarted";

export const metadata: Metadata = {
  title: "Get Started | Growthforge",
  description: "Start free or book a demo to see how Growthforge fits your team’s needs.",
};

export default function Page() {
  return <GetStartedPage {...getStartedPageData} />;
}
