import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const paidSearchDashboardPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "Paid Search Dashboard",
  title: "Campaign performance, efficiency signals, and optimization direction in one clearer view.",
  text: "The Paid Search Dashboard is designed to help teams go beyond raw spend reporting and review campaign performance in a more decision-ready way. It brings together spend, conversions, efficiency metrics, theme-level behavior, and optimization signals.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["Total Spend", "$18.4K"],
        ["Conversions", "146"],
        ["Cost per Conversion", "$126"],
        ["ROAS", "3.8x"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Paid search</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "A paid search view built for performance review, not just channel monitoring.",
    text: "Campaign dashboards often answer narrow questions about spend and clicks but make it harder to connect efficiency, conversion quality, and optimization priorities. Growthforge is designed to give teams a cleaner operating view of paid search performance.",
  },
  capabilities: [
    { title: "Spend and conversion context", text: "Track budget, outcomes, and directional movement together instead of piecing the story together manually." },
    { title: "Efficiency metrics that matter", text: "Review CPC, conversion rate, CPA, impression share, and return on ad spend in one place." },
    { title: "Optimization signals", text: "Surface rising CPC pressure, wasted spend patterns, and budget-shift opportunities faster." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "Campaign data that is easier to interpret and easier to act on.",
    text: "The Paid Search Dashboard should help teams understand what is working, where efficiency is slipping, and which areas may deserve closer optimization attention.",
  },
  workflowCards: [
    { title: "Compare spend vs results", text: "Review efficiency and output together so directional changes are easier to interpret." },
    { title: "Inspect themes and query clusters", text: "See which search themes are driving results and which are dragging efficiency." },
    { title: "Prioritize budget and landing-page fixes", text: "Use recommendation signals to guide bids, budget shifts, and relevance work." },
  ],
  faqIntro: {
    eyebrow: "Paid search dashboard FAQ",
    title: "A few practical questions this page should answer clearly.",
    text: "Keep the paid search page grounded in business context rather than generic campaign jargon.",
  },
  faqs: [
    { question: "Is this just for media buyers?", answer: "No. It is also useful for growth leaders and reporting-heavy teams that need a clearer understanding of paid search efficiency." },
    { question: "Does it only show spend?", answer: "No. It is designed to connect spend, conversions, efficiency metrics, themes, and optimization signals." },
  ],
  ctaBand: {
    eyebrow: "Paid Search Dashboard",
    title: "See paid search performance as part of the full growth picture.",
    text: "Book a demo to explore how the Paid Search Dashboard connects with executive visibility, SEO, funnel movement, attribution, and recommendations.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
