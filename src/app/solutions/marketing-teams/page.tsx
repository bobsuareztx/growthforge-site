import SolutionDetailTemplate from "@/templates/SolutionDetailTemplate";
import { marketingTeamsPageData } from "@/data/solutions/marketingTeams";
export const metadata = { title: "For Marketing Teams | Growthforge", description: "A clearer operating path for marketing teams that need stronger campaign coordination, lifecycle clarity, and better reporting rhythm.", alternates: { canonical: "/solutions/marketing-teams" }, openGraph: { title: "For Marketing Teams | Growthforge", description: "A clearer operating path for marketing teams that need stronger campaign coordination, lifecycle clarity, and better reporting rhythm.", url: "/solutions/marketing-teams" } };
export default function Page() { return <SolutionDetailTemplate {...marketingTeamsPageData} />; }
