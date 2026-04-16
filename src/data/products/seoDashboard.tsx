import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const seoDashboardPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "SEO Dashboard",
  title: "Organic visibility, page performance, and opportunity signals in one clearer view.",
  text: "The SEO Dashboard is designed to help teams move beyond isolated ranking checks and fragmented reporting. It brings together visibility movement, top-page performance, technical health signals, and content opportunities in one connected screen.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["Ranking Movement", "+11.8%"],
        ["Page-One Keywords", "318"],
        ["Top Gaining Queries", "27"],
        ["Technical Alerts", "5"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">SEO signal</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "A more usable SEO view for teams that need context, not just position tracking.",
    text: "Many SEO dashboards answer narrow questions well but make it harder to connect visibility changes to page performance, technical issues, and practical next steps. Growthforge is designed to bring those pieces together.",
  },
  capabilities: [
    { title: "Visibility movement", text: "Track ranking shifts across priority terms, pages, and non-brand themes with trend context." },
    { title: "Top pages and opportunities", text: "See which landing pages are carrying performance and which pages need closer review." },
    { title: "Technical health and action signals", text: "Surface crawl, speed, indexation, and metadata issues that may affect outcomes." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "Move from monitoring to optimization with less friction.",
    text: "The SEO Dashboard should help teams review what changed, understand why it matters, and decide where optimization attention may be best spent next.",
  },
  workflowCards: [
    { title: "Review ranking movement", text: "Start with visibility trend context instead of isolated ranking snapshots." },
    { title: "Inspect pages and issues", text: "Connect page performance to technical health and opportunity signals." },
    { title: "Prioritize next actions", text: "Use recommendations to focus on the changes most likely to improve visibility and outcomes." },
  ],
  faqIntro: {
    eyebrow: "SEO dashboard FAQ",
    title: "A few practical questions this page should answer clearly.",
    text: "Keep the SEO page grounded in practical decision support rather than generic organic reporting language.",
  },
  faqs: [
    { question: "Is this only a rankings screen?", answer: "No. It is designed as a connected SEO operating view that includes pages, technical health, and opportunity context." },
    { question: "Does it help prioritize next steps?", answer: "Yes. The dashboard is built to surface not only what changed, but also what may deserve action next." },
  ],
  ctaBand: {
    eyebrow: "SEO Dashboard",
    title: "Explore the SEO view inside the broader Growthforge platform.",
    text: "Book a demo to see how the SEO Dashboard connects with executive visibility, paid search performance, funnel context, attribution, and recommendations.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
