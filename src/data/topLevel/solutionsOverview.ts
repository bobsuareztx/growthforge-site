import React from "react";
import { CTAAction, SectionIntroProps } from "@/types/common";
import { FeatureCardProps } from "@/types/cards";

export type SolutionsOverviewPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  audienceIntro: SectionIntroProps;
  audiences: Array<{ title: string; text: string; ctaLabel?: string; href?: string; meta?: React.ReactNode; }>;
  branchIntro: SectionIntroProps;
  branchCards: FeatureCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const solutionsOverviewData: SolutionsOverviewPageData = {
  activeNavLabel: "Solutions",
  hero: { eyebrow: "Solutions", title: "Audience-specific paths into one clearer growth operating system.", text: "Find the Growthforge path that best fits your team, whether you are focused on marketing, sales, revenue operations, or practical scale as a lean business.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" }, disclosure: "All team examples, workflows, and solution paths shown here are illustrative for the prototype.", previewCards: [ { title: "For Marketing Teams", text: "Campaign coordination, lifecycle clarity, and cleaner reporting rhythm." }, { title: "For Sales Teams", text: "Pipeline rhythm, follow-up visibility, and stronger manager-level confidence." }, { title: "For Revenue Operations", text: "Cross-functional alignment and clearer decisions." }, { title: "For Startups & SMBs", text: "Practical growth structure without unnecessary complexity." } ] },
  audienceIntro: { eyebrow: "Solutions family", title: "Choose the path that matches how your team actually works.", text: "Each solution page is tailored to a different operating context so teams can start where their biggest clarity gap exists." },
  audiences: [
    { title: "For Marketing Teams", text: "A clearer operating layer for campaign coordination, nurture systems, and more readable performance interpretation.", ctaLabel: "Explore marketing-team solution →", href: "/solutions/marketing-teams" },
    { title: "For Sales Teams", text: "A cleaner way to support rep rhythm, pipeline visibility, and stronger manager-level review confidence.", ctaLabel: "Explore sales-team solution →", href: "/solutions/sales-teams" },
    { title: "For Revenue Operations", text: "A stronger cross-functional operating view for teams trying to connect lifecycle, handoffs, and reporting logic.", ctaLabel: "Explore rev-ops solution →", href: "/solutions/revenue-operations" },
    { title: "For Startups & SMBs", text: "A more practical system for lean teams that need clarity and momentum without a heavyweight setup.", ctaLabel: "Explore startup & SMB solution →", href: "/solutions/startups-smbs" },
  ],
  branchIntro: { eyebrow: "How Growthforge helps", title: "The right solution path depends on where your team needs more operating clarity most.", text: "Growthforge is easier to understand when the product is framed in the context of the team using it." },
  branchCards: [
    { title: "Audience-first navigation", text: "Visitors can identify by team type and operating challenge before moving deeper into the branch." },
    { title: "Clearer solution framing", text: "Growthforge adapts to different operating contexts without repeating the full product story every time." },
    { title: "Stronger branch coherence", text: "The solutions parent page helps the whole branch feel more focused, useful, and believable." },
  ],
  whyIntro: { eyebrow: "Why Growthforge", title: "The value is different for each team, but the need for clarity is consistent.", text: "Whether the team is focused on campaigns, pipeline, operations, or practical scale, the benefit comes from making the system easier to read and easier to act on." },
  whyCards: [
    { title: "More useful team context", text: "Help each function understand the part of the operating picture that matters most to them." },
    { title: "Better recurring decisions", text: "Reduce the amount of interpretive work required before the team can decide what to do next." },
    { title: "A clearer route into the product", text: "Make it easier for visitors to see where to start based on their operating reality." },
  ],
  ctaBand: { eyebrow: "Solutions", title: "Find the clearest Growthforge path for your team.", text: "Explore the solution that best matches how your team works today and where you need more clarity first.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
