import ProductDetailTemplate from "@/templates/ProductDetailTemplate";
import { reportingAnalyticsPageData } from "@/data/products/reportingAnalytics";
export const metadata = { title: "Reporting & Analytics | Growthforge", description: "A reporting layer that helps teams interpret growth signals more clearly across the business.", alternates: { canonical: "/products/reporting-analytics" }, openGraph: { title: "Reporting & Analytics | Growthforge", description: "A reporting layer that helps teams interpret growth signals more clearly across the business.", url: "/products/reporting-analytics" } };
export default function Page() { return <ProductDetailTemplate {...reportingAnalyticsPageData} />; }
