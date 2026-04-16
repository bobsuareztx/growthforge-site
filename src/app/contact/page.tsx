import ContactPage from "@/components/pages/ContactPage";
import { contactPageData } from "@/data/topLevel/contact";
export const metadata = { title: "Contact | Growthforge", description: "Use Contact for general questions, partnerships, or other inquiries that do not fit the main start-free or demo path.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact | Growthforge", description: "Use Contact for general questions, partnerships, or other inquiries that do not fit the main start-free or demo path.", url: "/contact" } };
export default function Page() { return <ContactPage {...contactPageData} />; }
