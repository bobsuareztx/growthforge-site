import CaseStudyTemplate from "@/templates/CaseStudyTemplate";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/data/resources/caseStudies";
export function generateStaticParams() { return getAllCaseStudySlugs().map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const study = getCaseStudyBySlug(params.slug); return { title: `${study.title} | Growthforge`, description: study.description, alternates: { canonical: `/resources/case-studies/${params.slug}` }, openGraph: { title: `${study.title} | Growthforge`, description: study.description, url: `/resources/case-studies/${params.slug}` } }; }
export default function Page({ params }: { params: { slug: string } }) { const study = getCaseStudyBySlug(params.slug); return <CaseStudyTemplate {...study} />; }
