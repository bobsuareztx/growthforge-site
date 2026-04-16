import { Metadata } from "next";
import ResourceIndexTemplate from "@/templates/ResourceIndexTemplate";
import { blogIndexPageData } from "@/data/resources/blogIndex";

export const metadata: Metadata = {
  title: "Blog | Growthforge",
  description: "Explore editorial articles and practical thinking for teams building a clearer growth operating system.",
};

export default function Page() {
  return <ResourceIndexTemplate {...blogIndexPageData} />;
}
