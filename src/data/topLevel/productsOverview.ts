import React from "react";
import { CTAAction, SectionIntroProps } from "@/types/common";
import { FeatureCardProps } from "@/types/cards";

export type ProductsOverviewPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  modulesIntro: SectionIntroProps;
  modules: Array<{ title: string; text: string; ctaLabel?: string; href?: string; meta?: React.ReactNode; }>;
  systemIntro: SectionIntroProps;
  systemCards: FeatureCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const productsOverviewData: ProductsOverviewPageData = {
  activeNavLabel: "Product",
  hero: {
    eyebrow: "Product",
    title: "Explore the six connected dashboards that make Growthforge feel like one coherent operating system.",
    text: "The product family is designed around six views that work better together: Executive, SEO, Paid Search, Funnel & Pipeline, Recommendations, and Attribution & Reporting.",
    primaryAction: { label: "Book a Demo", href: "/get-started" },
    secondaryAction: { label: "View Executive Dashboard", href: "/products/executive-dashboard" },
    disclosure: "All dashboards, workflows, modules, and examples shown here are illustrative for the prototype.",
    previewCards: [
      { title: "Executive Dashboard", text: "Leadership-ready visibility into top-line growth signals, funnel movement, and active priorities." },
      { title: "SEO Dashboard", text: "Organic visibility, page performance, technical health, and opportunity signals in one connected view." },
      { title: "Paid Search Dashboard", text: "Campaign spend, conversions, efficiency, and optimization direction with real business context." },
      { title: "Funnel & Pipeline", text: "Lead flow, stage movement, and pipeline context that connect channel performance to downstream outcomes." },
    ],
  },
  modulesIntro: { eyebrow: "Product family", title: "Choose the dashboard view that matches where your team needs more clarity first.", text: "Each page focuses on a specific part of the operating system while still connecting back to the broader Growthforge story." },
  modules: [
    { title: "Executive Dashboard", text: "A leadership-ready view that brings together top-line growth signals, funnel movement, and active recommendations.", ctaLabel: "View Executive Dashboard →", href: "/products/executive-dashboard" },
    { title: "SEO Dashboard", text: "A connected organic-performance view for ranking movement, top pages, technical health, and content opportunity signals.", ctaLabel: "View SEO Dashboard →", href: "/products/seo-dashboard" },
    { title: "Paid Search Dashboard", text: "A campaign-performance view for spend, conversions, efficiency metrics, and optimization direction.", ctaLabel: "View Paid Search Dashboard →", href: "/products/paid-search-dashboard" },
    { title: "Funnel & Pipeline Dashboard", text: "A downstream-performance view that links lead volume, stage conversion, bottlenecks, and pipeline impact.", ctaLabel: "View Funnel & Pipeline →", href: "/products/funnel-and-pipeline-dashboard" },
    { title: "Recommendations Center", text: "An action-support layer that organizes issues, opportunities, and suggested next steps in one review flow.", ctaLabel: "View Recommendations Center →", href: "/products/recommendations-center" },
    { title: "Attribution & Reporting Dashboard", text: "A cleaner reporting layer for contribution, pipeline influence, period comparisons, and executive visibility.", ctaLabel: "View Reporting Dashboard →", href: "/products/attribution-and-reporting-dashboard" },
  ],
  systemIntro: { eyebrow: "How the system works", title: "The dashboards are strongest when they reinforce one another instead of behaving like disconnected reporting tools.", text: "Growthforge is easier to understand when executive visibility, channel detail, funnel movement, and reporting logic work together as one operating picture." },
  systemCards: [
    { title: "Executive to channel flow", text: "Start with the top-line story, then move into the deeper dashboard when a signal deserves closer review." },
    { title: "Channel to funnel context", text: "Connect SEO and paid search performance to qualification, progression, and pipeline movement downstream." },
    { title: "Reporting into prioritization", text: "Use recommendations and reporting views to support cleaner recurring decisions instead of more stitching work." },
  ],
  whyIntro: { eyebrow: "Why Growthforge", title: "The value comes from making the operating picture easier to read, not just adding more interfaces.", text: "Growthforge works best for teams that want stronger recurring review rhythm, more practical coordination, and less friction across search, funnel, and reporting work." },
  whyCards: [
    { title: "Clearer visibility", text: "Make the performance story easier to understand across leadership, operators, and specialists." },
    { title: "Better recurring reviews", text: "Reduce the explanation work required before the team can actually decide what to do next." },
    { title: "More practical coordination", text: "Support cleaner handoffs, clearer priorities, and less fragmented performance review across functions." },
  ],
  ctaBand: { eyebrow: "Product", title: "See how the modules work together as one connected growth system.", text: "Explore the part of the product family that best matches your team’s current operating challenge, then follow the threads into the rest of the system.", primaryAction: { label: "Book a Demo", href: "/get-started" }, secondaryAction: { label: "Explore Resources", href: "/resources" } },
};
