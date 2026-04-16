import SolutionDetailTemplate from "@/templates/SolutionDetailTemplate";
import { revenueOperationsPageData } from "@/data/solutions/revenueOperations";
export const metadata = { title: "For Revenue Operations | Growthforge", description: "A clearer operating path for revenue operations teams that need stronger alignment across lifecycle, handoffs, reporting, and decisions.", alternates: { canonical: "/solutions/revenue-operations" }, openGraph: { title: "For Revenue Operations | Growthforge", description: "A clearer operating path for revenue operations teams that need stronger alignment across lifecycle, handoffs, reporting, and decisions.", url: "/solutions/revenue-operations" } };
export default function Page() { return <SolutionDetailTemplate {...revenueOperationsPageData} />; }
