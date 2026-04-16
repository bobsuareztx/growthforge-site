import SupportPageTemplate from "@/templates/SupportPageTemplate";
import { careersPageData } from "@/data/company/careers";
export const metadata = { title: "Careers | Growthforge", description: "Explore how Growthforge presents hiring in a way that feels practical, believable, and aligned with the rest of the site.", alternates: { canonical: "/careers" }, openGraph: { title: "Careers | Growthforge", description: "Explore how Growthforge presents hiring in a way that feels practical, believable, and aligned with the rest of the site.", url: "/careers" } };
export default function Page() { return <SupportPageTemplate {...careersPageData} />; }
