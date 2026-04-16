import { CaseStudyTemplateProps } from "@/types/templates";
export const northstarcloudCaseStudy: CaseStudyTemplateProps = {
  activeNavLabel: "Resources", eyebrow: "Case Study", title: "How NorthstarCloud reduced reporting drag and improved weekly decision clarity.", description: "A proof story showing how a clearer operating system helped a growing team reduce recurring reporting friction, improve cross-functional visibility, and make review meetings more useful.", companyLabel: "NorthstarCloud", industryLabel: "B2B SaaS", heroRightContent: null,
  summaryMetrics: [
    { label: "Reporting prep time", value: "-32%" },
    { label: "Weekly review duration", value: "-24%" },
    { label: "Cross-team visibility", value: "+ clearer" },
    { label: "Decision confidence", value: "+ stronger" },
  ],
  narrativeSections: [
    { heading: "The starting problem", paragraphs: ["NorthstarCloud did not think of itself as having a reporting crisis. The team had dashboards, recurring meetings, and clear enough tooling on paper. The deeper problem was that each weekly review required too much reconstruction work before anyone could talk about next actions.", "Campaign performance, pipeline interpretation, and lifecycle movement all had to be explained again and again from slightly different team perspectives."] },
    { heading: "What changed", paragraphs: ["The operating picture was simplified so that the same core business signals became easier to read together across functions. Instead of adding more reporting surface area, the emphasis shifted toward clearer relationships between work, movement, and interpretation.", "That made meetings shorter, but more importantly, it made them more useful."] },
    { heading: "Why it worked", paragraphs: ["The improvement came less from a single dashboard and more from reducing the amount of recurring explanation work required to understand what was happening. Once the shared operating picture became cleaner, reporting became easier to trust and easier to use.", "The value showed up in better weekly rhythm, better cross-functional understanding, and stronger decision-making confidence."] },
  ],
  outcomes: [
    { title: "Cleaner recurring review rhythm", text: "The team spent less time reconstructing what happened and more time discussing what to do next." },
    { title: "Stronger cross-functional understanding", text: "Marketing, sales, and operating stakeholders worked from a clearer shared performance picture." },
    { title: "More usable reporting system", text: "The reporting layer became more trustworthy because the underlying operating structure became easier to interpret." },
  ],
  relatedItems: [
    { tag: "Blog", title: "Why reporting breaks slowly — and why most teams notice too late", text: "A related article on the structural causes behind reporting drift.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly" },
    { tag: "Case Study", title: "How Brightside improved campaign review clarity", text: "Another proof story focused on reducing interpretation friction in recurring review cycles.", ctaLabel: "Read case study →", href: "/resources/case-studies" },
    { tag: "Guide", title: "Weekly growth review workbook", text: "A practical workbook related to the same kind of recurring review improvement.", ctaLabel: "Read guide →", href: "/resources/guides-ebooks" },
  ],
  ctaBand: { eyebrow: "Case Study", title: "Explore more proof stories on clearer operating systems.", text: "See how teams improved reporting clarity, coordination, and recurring review quality with a more usable system picture.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
