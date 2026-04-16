import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { salesHubPageData } from "@/data/products/salesHub";
export const metadata = { title: "Sales Hub | Growthforge", description: "A sales system focused on follow-up rhythm, pipeline readability, and manager confidence.", alternates: { canonical: "/products/sales-hub" }, openGraph: { title: "Sales Hub | Growthforge", description: "A sales system focused on follow-up rhythm, pipeline readability, and manager confidence.", url: "/products/sales-hub" } };
export default function Page() { return <ProductDetailTemplate {...salesHubPageData} />; }
