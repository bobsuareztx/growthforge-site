import { Metadata } from "next";
import ResourcesHubPage from "@/components/pages/ResourcesHubPage";
import { resourcesHubData } from "@/data/topLevel/resourcesHub";

export const metadata: Metadata = {
  title: "Resources | Growthforge",
  description: "Explore articles, case studies, guides, ebooks, and webinars.",
};

export default function Page() {
  return <ResourcesHubPage {...resourcesHubData} />;
}
