import SolutionDetailTemplate from "@/templates/SolutionDetailTemplate";
import { salesTeamsPageData } from "@/data/solutions/salesTeams";
export const metadata = { title: "For Sales Teams | Growthforge", description: "A clearer operating path for sales teams that need better follow-up rhythm, pipeline visibility, and forecast confidence.", alternates: { canonical: "/solutions/sales-teams" }, openGraph: { title: "For Sales Teams | Growthforge", description: "A clearer operating path for sales teams that need better follow-up rhythm, pipeline visibility, and forecast confidence.", url: "/solutions/sales-teams" } };
export default function Page() { return <SolutionDetailTemplate {...salesTeamsPageData} />; }
