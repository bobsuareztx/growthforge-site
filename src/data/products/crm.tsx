import React from "react";
import { ProductDetailTemplateProps } from "@/types/templates";

export const crmPageData: ProductDetailTemplateProps = {
  activeNavLabel: "Products",
  eyebrow: "CRM",
  title: "A cleaner CRM for teams that need better customer and account visibility.",
  text: "Growthforge CRM helps teams keep customer context, lifecycle movement, and account visibility easier to understand across the business.",
  primaryAction: { label: "Get started free →", href: "/get-started" },
  secondaryAction: { label: "Book a demo", href: "/get-started" },
  disclosure: "All dashboards, workflows, and examples shown here are illustrative for the prototype.",
  heroRightContent: (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">CRM preview</div><div className="text-xl font-semibold text-white">Account visibility</div><div className="mt-3 text-sm leading-7 text-white/60">Keep the customer record easier to read and easier to use.</div></div>
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">CRM preview</div><div className="text-xl font-semibold text-white">Lifecycle clarity</div><div className="mt-3 text-sm leading-7 text-white/60">Track movement across the customer journey without rebuilding the story each week.</div></div>
    </div>
  ),
  valueIntro: { eyebrow: "Core capabilities", title: "CRM should improve operating clarity, not just store records.", text: "The CRM page works best when it explains how customer and account context become more usable across teams." },
  capabilities: [
    { title: "Account and customer context", text: "Keep the relationship picture easier to understand across the lifecycle." },
    { title: "Lifecycle visibility", text: "Make movement through the customer journey more readable without scattered notes and exports." },
    { title: "Shared operating record", text: "Support a more coherent source of truth for marketing, sales, and revenue operations." },
  ],
  workflowIntro: { eyebrow: "Workflow fit", title: "The CRM route stays focused on real operating usefulness.", text: "Use CRM to support cleaner handoffs, clearer customer history, and more usable context in recurring reviews." },
  workflowCards: [
    { title: "Cleaner handoffs", text: "Support better transitions between teams by making the customer record easier to trust." },
    { title: "Less manual reconstruction", text: "Reduce the need to restate account history every time a team reviews progress." },
    { title: "Stronger decisions", text: "Give teams a clearer operating picture so account-level decisions happen with more context." },
  ],
  faqIntro: { eyebrow: "CRM FAQ", title: "A few practical questions the CRM page should answer clearly.", text: "The FAQ section keeps the page grounded in buyer understanding rather than purely conceptual product language." },
  faqs: [
    { question: "Is this CRM meant only for sales teams?", answer: "No. It works best as a shared customer and account context layer for marketing, sales, and revenue operations." },
    { question: "What kind of team is it best for?", answer: "It fits teams that want better customer visibility, cleaner lifecycle context, and less friction in recurring operating reviews." },
  ],
  ctaBand: { eyebrow: "CRM", title: "See how CRM fits into the broader Growthforge system.", text: "Explore how CRM supports a clearer relationship picture across marketing, sales, and reporting work.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
