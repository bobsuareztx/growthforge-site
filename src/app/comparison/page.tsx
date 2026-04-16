import SupportPageTemplate from "@/templates/SupportPageTemplate";
import { comparisonPageData } from "@/data/company/comparison";
export const metadata = { title: "Comparison | Growthforge", description: "See how Growthforge compares when the goal is clearer systems, more usable visibility, and less operating complexity.", alternates: { canonical: "/comparison" }, openGraph: { title: "Comparison | Growthforge", description: "See how Growthforge compares when the goal is clearer systems, more usable visibility, and less operating complexity.", url: "/comparison" } };
export default function Page() { return <SupportPageTemplate {...comparisonPageData} />; }
