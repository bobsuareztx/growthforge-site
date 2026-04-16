import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const funnelPipelineDashboardPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "Funnel & Pipeline Dashboard",
  title: "Lead movement, conversion friction, and pipeline context in one connected view.",
  text: "The Funnel & Pipeline Dashboard is designed to help teams understand what happens after traffic and lead capture. It brings together source-level lead volume, stage conversion rates, funnel leakage signals, and pipeline influence.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["Qualified Leads", "822"],
        ["Lead-to-MQL Rate", "34%"],
        ["SQL-to-Opp Rate", "18.6%"],
        ["Influenced Pipeline", "$2.4M"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Funnel signal</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "A clearer way to see how acquisition turns into qualified pipeline.",
    text: "Many teams can report on traffic and leads, but have less visibility into how those leads progress through the funnel. Growthforge is designed to make that movement easier to review.",
  },
  capabilities: [
    { title: "Lead volume by source", text: "See where leads are entering the funnel and how the mix is shifting over time." },
    { title: "Stage conversion and bottlenecks", text: "Track progression health and surface where leads slow down, fall out, or lose business value." },
    { title: "Pipeline influence context", text: "Connect funnel movement to opportunity creation and the downstream outcomes leadership cares about." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "Link acquisition performance to downstream business outcomes.",
    text: "The Funnel & Pipeline Dashboard should help teams connect source quality, stage conversion, and pipeline influence in one cleaner operating view.",
  },
  workflowCards: [
    { title: "Start with source mix", text: "Review where leads are entering the funnel and how quality varies by source." },
    { title: "Inspect stage movement", text: "Use stage conversion and leakage signals to see where friction may be building." },
    { title: "Connect to pipeline impact", text: "Bring the funnel story into leadership conversation with opportunity and pipeline context." },
  ],
  faqIntro: {
    eyebrow: "Funnel dashboard FAQ",
    title: "A few practical questions this page should answer clearly.",
    text: "Keep the funnel page focused on business usefulness rather than abstract lifecycle terminology.",
  },
  faqs: [
    { question: "Is this only about lead counts?", answer: "No. It is designed to connect lead volume to stage conversion, bottlenecks, and influenced pipeline." },
    { question: "Can leadership use this view too?", answer: "Yes. The pipeline context makes the page useful for both operators and revenue-oriented leadership discussions." },
  ],
  ctaBand: {
    eyebrow: "Funnel & Pipeline Dashboard",
    title: "See how Growthforge connects acquisition, conversion, and pipeline visibility.",
    text: "Book a demo to explore how the Funnel & Pipeline Dashboard works alongside executive visibility, SEO, paid search, attribution, and recommendations.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
