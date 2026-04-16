import { CTAAction, SectionIntroProps } from "@/types/common";
import { FAQCardProps, FeatureCardProps } from "@/types/cards";
import { Plan } from "@/types/pricing";

export type PricingPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  packagingIntro: SectionIntroProps;
  plans: Plan[];
  buyerIntro: SectionIntroProps;
  buyerCards: FeatureCardProps[];
  trustIntro: SectionIntroProps;
  trustCards: FeatureCardProps[];
  faqIntro: SectionIntroProps;
  faqs: FAQCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const pricingPageData: PricingPageData = {
  activeNavLabel: "Pricing",
  hero: {
    eyebrow: "Pricing",
    title: "Simple pricing for teams that want a clearer growth operating system.",
    text: "Choose the plan that matches how your team works today, then expand as reporting needs, coordination complexity, and visibility requirements grow.",
    primaryAction: { label: "Get started →", href: "/get-started" },
    secondaryAction: { label: "Book a demo", href: "/get-started" },
    disclosure: "All pricing, packaging, and feature bundles shown here are illustrative for the prototype.",
    previewCards: [
      { title: "Starter", text: "For lean teams that want cleaner reporting and a simpler operating baseline." },
      { title: "Growth", text: "For scaling teams that need channel, funnel, and reporting context to work together." },
      { title: "Scale", text: "For larger or more complex environments that need guided packaging and broader coordination support." },
      { title: "Clear next step", text: "Self-serve interest where possible, guided conversations where complexity is higher." },
    ],
  },
  packagingIntro: {
    eyebrow: "Plans",
    title: "Three straightforward ways to buy Growthforge.",
    text: "The product packaging is designed to feel commercially believable and easy to understand without forcing the page to explain every edge case before a buyer can see the options.",
  },
  plans: [
    {
      name: "Starter",
      audience: "For lean teams getting organized",
      price: "$49",
      billingNote: "/seat/mo",
      description: "A lighter starting point for smaller teams that want one place to review the basics.",
      features: ["Core CRM records", "Basic lifecycle visibility", "Starter reporting dashboards", "Standard integrations"],
      primaryCta: "Get started",
      secondaryCta: "Book a demo",
    },
    {
      name: "Growth",
      audience: "For scaling teams that need cross-functional clarity",
      price: "$99",
      billingNote: "/seat/mo",
      description: "The main Growthforge plan for teams that want stronger channel, funnel, and reporting coordination.",
      features: ["Full CRM, marketing, sales, and reporting", "Deeper lifecycle visibility", "Cross-functional dashboards", "Advanced workflow support"],
      primaryCta: "Start growth plan",
      secondaryCta: "Book a demo",
      highlighted: true,
    },
    {
      name: "Scale",
      audience: "For larger or more complex operating environments",
      price: "Custom",
      billingNote: "pricing",
      description: "A guided commercial path for teams that need broader controls, deeper reporting, and custom packaging.",
      features: ["Expanded admin controls", "Advanced reporting", "Broader coordination support", "Custom packaging"],
      primaryCta: "Talk to sales",
      secondaryCta: "Book a demo",
    },
  ],
  buyerIntro: {
    eyebrow: "What buyers need",
    title: "The goal is simple: make fit easier to understand.",
    text: "A strong pricing page should help visitors understand which plan is likely right for them, what they get, and whether the next step is self-serve or a conversation.",
  },
  buyerCards: [
    { title: "Clearer fit signals", text: "See quickly whether you are a lighter, scaling, or more complex use case." },
    { title: "Stronger commercial trust", text: "Direct pricing makes the product feel more real and easier to evaluate." },
    { title: "Better next-step routing", text: "Let buyers move naturally into self-serve exploration or a guided sales conversation." },
  ],
  trustIntro: {
    eyebrow: "Commercial trust",
    title: "Specific enough to feel real. Simple enough to stay readable.",
    text: "The pricing layer should support trust without collapsing into a wall of billing logic, fine print, or fake enterprise complexity.",
  },
  trustCards: [
    { title: "No fake complexity", text: "Avoid packaging that feels bigger or more complicated than the product story actually requires." },
    { title: "Enough structure to sell", text: "Illustrative prices, plan names, and package boundaries do the main trust-building work." },
    { title: "Aligned with the product", text: "The commercial model should reflect the same platform logic the rest of the site already communicates." },
  ],
  faqIntro: {
    eyebrow: "Pricing FAQ",
    title: "A few practical questions the page should answer clearly.",
    text: "These are the questions most buyers want answered before deciding whether to keep exploring or book time with a human.",
  },
  faqs: [
    { question: "Is the pricing on this site real?", answer: "No. Pricing, packaging, and features shown here are illustrative for the prototype." },
    { question: "Can teams expand later?", answer: "Yes. The pricing model is framed so teams can grow into broader capability as operating complexity increases." },
    { question: "Is there a guided sales path?", answer: "Yes. The Scale plan is the clearest example of a path that would typically involve a conversation." },
    { question: "Are integrations or support included?", answer: "Support and integrations are represented at an illustrative level to make the packaging feel realistic without overbuilding the page." },
  ],
  whyIntro: {
    eyebrow: "Why this pricing model",
    title: "The page should feel more direct than theoretical.",
    text: "The best pricing pages help buyers understand the decision in front of them instead of explaining the philosophy of pricing for half the scroll.",
  },
  whyCards: [
    { title: "Faster clarity", text: "Visitors should be able to understand the offer in a glance before they start comparing details." },
    { title: "More believable packaging", text: "Simple, concrete plan names and visible pricing strengthen the commercial story quickly." },
    { title: "Cleaner conversion path", text: "A direct page makes it easier for interested buyers to choose between self-serve exploration and a demo." },
  ],
  ctaBand: {
    eyebrow: "Pricing",
    title: "Choose the plan that fits now, then grow from there.",
    text: "Explore the packages, compare fit, and book a demo if you want a guided walkthrough of how Growthforge could support your team.",
    primaryAction: { label: "Get started →", href: "/get-started" },
    secondaryAction: { label: "Book a demo", href: "/get-started" },
  },
};
