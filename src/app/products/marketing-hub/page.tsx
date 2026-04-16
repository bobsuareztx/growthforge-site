import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { marketingHubPageData } from "@/data/products/marketingHub";
export const metadata = { title: "Marketing Hub | Growthforge", description: "A marketing operating layer for campaign coordination, nurture flow, and clearer performance visibility.", alternates: { canonical: "/products/marketing-hub" }, openGraph: { title: "Marketing Hub | Growthforge", description: "A marketing operating layer for campaign coordination, nurture flow, and clearer performance visibility.", url: "/products/marketing-hub" } };
export default function Page() { return <ProductDetailTemplate {...marketingHubPageData} />; }
