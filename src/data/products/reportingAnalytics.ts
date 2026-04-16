import { ProductDetailTemplateProps } from "@/types/templates";

export const reportingAnalyticsPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Products",
  eyebrow: "Reporting & Analytics",
  title: "A reporting layer that helps teams interpret growth signals more clearly across the business.",
  text: "Growthforge Reporting & Analytics helps teams reduce reporting drag, improve weekly review quality, and make decisions from a clearer shared performance picture.",
  primaryAction: { label: "Get started free →", href: "/get-started" },
  secondaryAction: { label: "Book a demo", href: "/get-started" },
  disclosure: "All dashboards, scorecards, and examples shown here are illustrative for the prototype.",
  heroRightContent: null,
  valueIntro: { eyebrow: "Core capabilities", title: "Reporting should support clearer decisions, not just more dashboards.", text: "The page works best when it explains how signals become easier to interpret across teams and recurring reviews." },
  capabilities: [
    { title: "Cross-functional reporting", text: "Bring key performance signals into one more coherent view." },
    { title: "Readable review rhythm", text: "Reduce recurring friction in weekly and monthly reporting conversations." },
    { title: "Decision support", text: "Help teams move from signal interpretation into next-action clarity more quickly." },
  ],
  workflowIntro: { eyebrow: "Workflow fit", title: "Keep reporting connected to planning, execution, and decision-making.", text: "Use Reporting & Analytics to reduce repeated explanation work and make review conversations more useful." },
  workflowCards: [
    { title: "Cleaner weekly reviews", text: "Reduce the work required to rebuild the same story every week." },
    { title: "Better shared understanding", text: "Make performance interpretation easier across marketing, sales, and rev ops." },
    { title: "Less dashboard sprawl", text: "Support clearer operating judgment without endless disconnected views." },
  ],
  faqIntro: { eyebrow: "Reporting & Analytics FAQ", title: "A few practical questions the page should answer clearly.", text: "The FAQ helps keep the reporting route grounded in buyer understanding." },
  faqs: [
    { question: "Is this only a dashboard product?", answer: "No. The page is stronger when it is framed as a reporting and decision-support layer that helps teams interpret the business more clearly." },
    { question: "Who benefits most from it?", answer: "It fits teams that want cleaner recurring review rhythm, less reporting drag, and better shared understanding across functions." },
  ],
  ctaBand: { eyebrow: "Reporting & Analytics", title: "See how Reporting & Analytics fits into the broader Growthforge system.", text: "Explore how Reporting & Analytics supports clearer signal interpretation and better recurring decisions.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
