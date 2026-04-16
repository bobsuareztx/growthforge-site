import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { aboutPageData } from "@/data/topLevel/about";

export const metadata: Metadata = {
  title: "About | Growthforge",
  description: "Learn how Growthforge thinks about clearer systems and practical growth operations.",
};

export default function Page() {
  return <AboutPage {...aboutPageData} />;
}
