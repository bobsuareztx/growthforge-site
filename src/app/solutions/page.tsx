import { Metadata } from "next";
import SolutionsOverviewPage from "@/components/pages/SolutionsOverviewPage";
import { solutionsOverviewData } from "@/data/topLevel/solutionsOverview";

export const metadata: Metadata = {
  title: "Solutions | Growthforge",
  description: "Find the right Growthforge solution path for your team.",
};

export default function Page() {
  return <SolutionsOverviewPage {...solutionsOverviewData} />;
}
