import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const attributionReportingDashboardPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "Attribution & Reporting Dashboard",
  title: "A clearer reporting layer for channel contribution, pipeline influence, and executive visibility.",
  text: "The Attribution & Reporting Dashboard is designed to help teams move beyond fragmented updates and create a more connected view of performance. It brings together channel contribution, business impact, period comparisons, and executive-ready summaries.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["Organic Contribution", "38%"],
        ["Paid Search Contribution", "31%"],
        ["Influenced Pipeline", "$3.2M"],
        ["Opportunities Influenced", "154"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Reporting</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "A reporting experience designed to reduce stitching, simplify interpretation, and improve visibility.",
    text: "Reporting is often where disconnected systems become most visible. Growthforge is designed to make that process easier by giving teams a more connected reporting view from the start.",
  },
  capabilities: [
    { title: "Channel contribution context", text: "Understand how major channels are contributing across the growth picture rather than only in isolation." },
    { title: "Business impact visibility", text: "Connect performance reporting to influenced pipeline, opportunity creation, and revenue-oriented questions." },
    { title: "Period comparisons", text: "See what changed from one reporting period to the next without rebuilding the analysis by hand." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "Give leadership a reporting view that is easier to read, easier to trust, and easier to act on.",
    text: "The reporting page should help teams create a more coherent story around what changed, what matters, and where follow-up may be needed next.",
  },
  workflowCards: [
    { title: "Start with contribution mix", text: "Review how organic, paid, referral, and assisted channels are shaping the growth picture." },
    { title: "Connect to pipeline and revenue", text: "Bring the performance story into opportunity and business-impact context." },
    { title: "Use comparison views", text: "Support recurring review by making period-over-period movement easier to interpret." },
  ],
  faqIntro: {
    eyebrow: "Reporting dashboard FAQ",
    title: "A few practical questions this page should answer clearly.",
    text: "Keep the reporting page grounded in interpretation and recurring business usefulness.",
  },
  faqs: [
    { question: "Is this just another reporting export?", answer: "No. It is designed as a connected reporting layer that brings channels, funnel movement, and business impact together more clearly." },
    { question: "Can leadership use this view directly?", answer: "Yes. The page is intentionally structured to support leadership-level review without losing the signal operators need." },
  ],
  ctaBand: {
    eyebrow: "Attribution & Reporting Dashboard",
    title: "Explore the reporting view inside the full Growthforge platform.",
    text: "Book a demo to see how the Attribution & Reporting Dashboard connects with executive visibility, SEO, paid search, funnel performance, and recommendations.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
