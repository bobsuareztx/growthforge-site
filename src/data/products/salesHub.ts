import { ProductDetailTemplateProps } from "@/types/templates";

export const salesHubPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Products",
  eyebrow: "Sales Hub",
  title: "A sales system focused on follow-up rhythm, pipeline readability, and manager confidence.",
  text: "Growthforge Sales Hub helps teams keep rep activity, deal movement, and forecast conversations easier to understand without adding more review noise.",
  primaryAction: { label: "Get started free →", href: "/get-started" },
  secondaryAction: { label: "Book a demo", href: "/get-started" },
  disclosure: "All dashboards, workflows, and examples shown here are illustrative for the prototype.",
  heroRightContent: null,
  valueIntro: { eyebrow: "Core capabilities", title: "Sales systems should make pipeline reviews easier to read and easier to trust.", text: "The Sales Hub route works best when it explains how rep rhythm, pipeline visibility, and forecasting context become more usable together." },
  capabilities: [
    { title: "Pipeline visibility", text: "Make opportunity movement easier to read across the team." },
    { title: "Follow-up rhythm", text: "Support cleaner execution around rep activity and deal progress." },
    { title: "Manager context", text: "Give sales leaders a clearer operating picture in recurring reviews." },
  ],
  workflowIntro: { eyebrow: "Workflow fit", title: "Keep execution and review conversations more closely connected.", text: "Use Sales Hub to make follow-up, deal movement, and forecast interpretation easier to discuss together." },
  workflowCards: [
    { title: "Cleaner rep context", text: "Understand how follow-up and opportunity movement connect over time." },
    { title: "Stronger forecast conversations", text: "Make pipeline review more readable and less dependent on disconnected summaries." },
    { title: "Less review friction", text: "Reduce the effort required to interpret pipeline state every week." },
  ],
  faqIntro: { eyebrow: "Sales Hub FAQ", title: "A few practical questions the page should answer clearly.", text: "The FAQ keeps the route grounded in real buyer understanding." },
  faqs: [
    { question: "Is this just pipeline software?", answer: "No. The page is stronger when it is framed as a broader sales operating layer for rep rhythm, opportunity visibility, and forecasting context." },
    { question: "What kind of team is it best for?", answer: "It fits teams that want a clearer view of rep follow-up, deal movement, and recurring pipeline decisions." },
  ],
  ctaBand: { eyebrow: "Sales Hub", title: "See how Sales Hub fits into the broader Growthforge system.", text: "Explore how Sales Hub supports clearer execution, pipeline visibility, and forecast confidence.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
