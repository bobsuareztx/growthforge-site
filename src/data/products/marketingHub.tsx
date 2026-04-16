import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const marketingHubPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Products",
  eyebrow: "Marketing Hub",
  title: "A marketing operating layer for campaign coordination, nurture flow, and clearer performance visibility.",
  text: "Growthforge Marketing Hub helps teams coordinate campaign work more clearly, understand lifecycle movement more easily, and review performance without rebuilding the story every week.",
  primaryAction: { label: "Get started free →", href: "/get-started" },
  secondaryAction: { label: "Book a demo", href: "/get-started" },
  disclosure: "All dashboards, workflows, and examples shown here are illustrative for the prototype.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Marketing preview</div><div className="text-xl font-semibold text-white">Campaign coordination</div><div className="mt-3 text-sm leading-7 text-white/60">Plan and review campaign work with less noise and less duplication.</div></div>
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Marketing preview</div><div className="text-xl font-semibold text-white">Lifecycle clarity</div><div className="mt-3 text-sm leading-7 text-white/60">Make nurture flow and progression easier to read in context.</div></div>
    </div>
  ),
  valueIntro: { eyebrow: "Core capabilities", title: "Marketing systems should make performance easier to interpret, not harder.", text: "The Marketing Hub route works best when it explains how campaign and lifecycle work become easier to manage and easier to review." },
  capabilities: [
    { title: "Campaign coordination", text: "Support cleaner planning, launches, and recurring review rhythm." },
    { title: "Lifecycle movement", text: "Make nurture flow and stage progression more visible across the funnel." },
    { title: "Performance readability", text: "Help teams understand what the signals are saying without extra reconstruction work." },
  ],
  workflowIntro: { eyebrow: "Workflow fit", title: "Keep campaign, lifecycle, and review work connected.", text: "Use Marketing Hub to reduce fragmentation between campaign execution, funnel interpretation, and recurring reporting conversations." },
  workflowCards: [
    { title: "Cleaner review rhythm", text: "Run campaign and lifecycle reviews with less repeated explanation work." },
    { title: "Stronger downstream context", text: "Make marketing work easier for sales and rev ops to interpret later." },
    { title: "Less reporting drag", text: "Reduce the friction that comes from disconnected campaign and lifecycle views." },
  ],
  faqIntro: { eyebrow: "Marketing Hub FAQ", title: "A few practical questions the page should answer clearly.", text: "The FAQ helps keep the page useful and grounded rather than purely conceptual." },
  faqs: [
    { question: "Is this only for campaign execution?", answer: "No. The page is stronger when it is framed as a broader marketing operating layer for campaigns, lifecycle work, and performance interpretation together." },
    { question: "Who is it best for?", answer: "It is best for teams that want cleaner campaign coordination, clearer nurture visibility, and less recurring reporting friction." },
  ],
  ctaBand: { eyebrow: "Marketing Hub", title: "See how Marketing Hub fits into the broader Growthforge system.", text: "Explore how Marketing Hub supports better campaign coordination and more readable growth signals.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
