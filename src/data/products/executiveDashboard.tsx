import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const executiveDashboardPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "Executive Dashboard",
  title: "A clearer top-line view of growth performance.",
  text: "The Executive Dashboard is designed to bring together channel visibility, funnel context, and action signals in one leadership-ready view so teams can understand what is changing and where attention may be needed next.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["Influenced Pipeline", "$3.2M"],
        ["Qualified Leads", "1,284"],
        ["Lead-to-Opp Rate", "18.6%"],
        ["Active Recommendations", "12"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">KPI</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "See the numbers that matter without losing the story behind them.",
    text: "The Executive Dashboard works best when it helps leadership and operators review top-line movement, channel contribution, funnel health, and active priorities in one cleaner operating picture.",
  },
  capabilities: [
    { title: "Top-line growth visibility", text: "Track influenced pipeline, qualified leads, and conversion movement in one place." },
    { title: "Cross-channel context", text: "See organic, paid, and funnel signals together rather than in disconnected weekly updates." },
    { title: "Priority issue awareness", text: "Surface active alerts and recommendations so leadership sees where follow-up may be needed." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "A leadership-ready view built for recurring review, not passive reporting.",
    text: "The Executive Dashboard should help teams orient quickly, understand directional change, and connect headline performance to the deeper views across SEO, paid search, funnel movement, and recommendations.",
  },
  workflowCards: [
    { title: "Start with the top-line story", text: "Open with KPIs that summarize movement in pipeline, lead quality, and active priorities." },
    { title: "Review what shifted", text: "Use trend cards and channel context to understand what changed from the prior period." },
    { title: "Go deeper where needed", text: "Route into the deeper product views when a signal deserves closer investigation." },
  ],
  faqIntro: {
    eyebrow: "Executive dashboard FAQ",
    title: "A few quick questions this page should answer clearly.",
    text: "Keep the executive view grounded in practical buyer understanding rather than generic dashboard language.",
  },
  faqs: [
    { question: "Who is this view for?", answer: "Leadership, operators, and anyone who needs a clear top-line picture before moving into channel or funnel detail." },
    { question: "Is this meant to replace deeper reporting?", answer: "No. It is designed to orient teams quickly and route them into the more detailed views when needed." },
  ],
  ctaBand: {
    eyebrow: "Executive Dashboard",
    title: "See how executive visibility connects to the rest of the Growthforge platform.",
    text: "Book a demo to explore how top-line visibility, channel context, and action signals work together across the full product experience.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
