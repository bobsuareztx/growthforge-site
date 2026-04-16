import { SupportPageTemplateProps } from "@/types/templates";
export const integrationsPageData: SupportPageTemplateProps = {
  activeNavLabel: "About", eyebrow: "Integrations", title: "A clearer view of how Growthforge fits into the systems teams already rely on.", text: "Explore how Growthforge can sit alongside the tools teams already use for customer data, marketing execution, sales workflows, and reporting.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" }, disclosure: "All integration categories and examples shown here are illustrative for the prototype.", heroRightContent: null,
  framingIntro: { eyebrow: "How integrations are framed", title: "The platform should feel like it fits a real operating environment.", text: "The integrations page helps reduce perceived adoption friction by showing how Growthforge fits into a broader system, not just as a standalone product." },
  framingCards: [
    { title: "Ecosystem confidence", text: "Help visitors understand more quickly how Growthforge fits into the stack they already use." },
    { title: "Cleaner trust signal", text: "Integration visibility helps the platform feel more practical and commercially believable." },
    { title: "Lower perceived friction", text: "Reduce concern about adoption and compatibility by framing the platform inside a broader system context." },
  ],
  contentIntro: { eyebrow: "Integration categories", title: "The strongest integrations story is about fit, not just logos.", text: "Use this page to show the categories of systems Growthforge can complement while keeping the story practical and believable." },
  contentCards: [
    { tag: "CRM & data", title: "Customer and account systems", text: "Illustrative categories for syncing customer context and lifecycle data.", ctaLabel: "Explore category →", href: "/integrations" },
    { tag: "Marketing", title: "Campaign and lifecycle tools", text: "Illustrative ecosystem fit for campaign execution and nurture workflows.", ctaLabel: "Explore category →", href: "/integrations" },
    { tag: "Sales", title: "Pipeline and activity tools", text: "Illustrative compatibility for rep workflows and opportunity visibility.", ctaLabel: "Explore category →", href: "/integrations" },
    { tag: "Analytics", title: "Reporting and dashboards", text: "Illustrative categories for connecting business reporting and scorecards.", ctaLabel: "Explore category →", href: "/integrations" },
  ],
  whyIntro: { eyebrow: "Why integrations matter", title: "The platform is easier to trust when it feels easier to fit into a real stack.", text: "The integrations page helps Growthforge feel more practical, more usable, and more believable as part of a broader operating environment." },
  whyCards: [
    { title: "More practical adoption story", text: "Help visitors picture Growthforge as part of how their team already works, not as a total replacement fantasy." },
    { title: "Stronger commercial realism", text: "A clearer integrations story makes the product feel more mature without requiring excessive detail." },
    { title: "Better trust continuity", text: "The route reinforces the same practical tone already established across the rest of the site." },
  ],
  ctaBand: { eyebrow: "Integrations", title: "See how Growthforge fits into the systems your team already uses.", text: "Explore the platform or book a demo to see how Growthforge fits the broader way your team already works.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
