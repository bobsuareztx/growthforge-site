import SolutionDetailTemplate from "@/templates/SolutionDetailTemplate";
import { startupsSmbsPageData } from "@/data/solutions/startupsSmbs";
export const metadata = { title: "For Startups & SMBs | Growthforge", description: "A clearer operating path for startups and SMBs that need practical scale without heavy-system overhead.", alternates: { canonical: "/solutions/startups-smbs" }, openGraph: { title: "For Startups & SMBs | Growthforge", description: "A clearer operating path for startups and SMBs that need practical scale without heavy-system overhead.", url: "/solutions/startups-smbs" } };
export default function Page() { return <SolutionDetailTemplate {...startupsSmbsPageData} />; }
