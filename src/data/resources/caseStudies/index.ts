import { CaseStudyTemplateProps } from "@/types/templates";
import { northstarcloudCaseStudy } from "@/data/resources/caseStudies/northstarcloud";
const caseStudies: Record<string, CaseStudyTemplateProps> = { northstarcloud: northstarcloudCaseStudy };
export function getCaseStudyBySlug(slug: string): CaseStudyTemplateProps { const study = caseStudies[slug]; if (!study) throw new Error(`Unknown case study slug: ${slug}`); return study; }
export function getAllCaseStudySlugs(): string[] { return Object.keys(caseStudies); }
