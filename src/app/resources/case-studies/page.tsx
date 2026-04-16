import ResourceIndexTemplate from "@/templates/ResourceIndexTemplate";
import { caseStudiesIndexPageData } from "@/data/resources/caseStudiesIndex";
export const metadata = { title: "Case Studies | Growthforge", description: "Explore proof stories that connect growth operating problems to clearer outcomes and better recurring decisions.", alternates: { canonical: "/resources/case-studies" }, openGraph: { title: "Case Studies | Growthforge", description: "Explore proof stories that connect growth operating problems to clearer outcomes and better recurring decisions.", url: "/resources/case-studies" } };
export default function Page() { return <ResourceIndexTemplate {...caseStudiesIndexPageData} />; }
