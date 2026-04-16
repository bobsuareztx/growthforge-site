import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const recommendationsCenterPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Product",
  eyebrow: "Recommendations Center",
  title: "Signals, alerts, and suggested actions organized into a clearer next-step view.",
  text: "The Recommendations Center is designed to help teams move from reporting to prioritization. It brings together opportunity signals, risk alerts, and suggested actions from across SEO, paid search, funnel performance, and reporting context.",
  primaryAction: { label: "Book a Demo", href: "/get-started" },
  secondaryAction: { label: "Explore the Platform", href: "/products" },
  disclosure: "Illustrative interface and sample/demo data shown throughout.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        ["High Priority Items", "4"],
        ["Opportunity Signals", "7"],
        ["Risk Alerts", "5"],
        ["Suggested Actions", "9"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Action layer</div>
          <div className="text-sm text-white/65">{label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
        </div>
      ))}
    </div>
  ),
  valueIntro: {
    eyebrow: "What this view does",
    title: "A central place to review what changed, what matters, and what may be worth doing next.",
    text: "Important signals can stay buried inside channel-specific dashboards, recurring reports, or scattered team conversations. Growthforge is designed to surface those signals in one action-support layer.",
  },
  capabilities: [
    { title: "Priority queue", text: "Start with the issues and opportunities most likely to deserve immediate attention." },
    { title: "Opportunity and risk balance", text: "Surface positive growth signals alongside declines, friction points, and caution areas." },
    { title: "Suggested next steps", text: "Translate signals into a more practical review plan for teams that need to prioritize quickly." },
  ],
  workflowIntro: {
    eyebrow: "Inside the dashboard",
    title: "Help teams move from observation to prioritization with less friction.",
    text: "The Recommendations Center should support faster review by bringing issues, opportunities, owners, and likely next actions into one cleaner operating flow.",
  },
  workflowCards: [
    { title: "Review the priority queue", text: "Orient quickly by starting with what is most urgent or most likely to matter now." },
    { title: "Separate opportunities from risks", text: "Keep the platform proactive by surfacing areas ready to improve, not only problems." },
    { title: "Turn signals into a plan", text: "Use suggested actions to guide what should be reviewed, discussed, and prioritized next." },
  ],
  faqIntro: {
    eyebrow: "Recommendations FAQ",
    title: "A few practical questions this page should answer clearly.",
    text: "Keep the recommendations layer grounded in review usefulness rather than generic AI hype language.",
  },
  faqs: [
    { question: "Are these recommendations automatic decisions?", answer: "No. They are designed to support faster review and better prioritization, not replace human judgment." },
    { question: "Does this only surface problems?", answer: "No. It also highlights opportunity signals that may be ready to improve with timely action." },
  ],
  ctaBand: {
    eyebrow: "Recommendations Center",
    title: "See how Growthforge helps teams move from reporting to prioritization.",
    text: "Book a demo to explore how the Recommendations Center connects with executive visibility, SEO, paid search, funnel performance, and reporting.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "Explore the Platform", href: "/products" },
  },
};
