import React from "react";
import { CTAAction, SectionIntroProps } from "@/types/common";
import { FeatureCardProps } from "@/types/cards";

export type ResourcesHubPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  branchesIntro: SectionIntroProps;
  branches: Array<{ title: string; text: string; ctaLabel?: string; href?: string; meta?: React.ReactNode; }>;
  branchLogicIntro: SectionIntroProps;
  branchLogicCards: FeatureCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const resourcesHubData: ResourcesHubPageData = {
  activeNavLabel: "Resources",
  hero: { eyebrow: "Resources", title: "Articles, proof, guides, and sessions organized into one clearer resource system.", text: "Explore the Growthforge resource system to learn through editorial thinking, proof stories, longer-form frameworks, and session-led walkthroughs.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" }, disclosure: "All articles, case studies, guides, webinars, and examples shown here are illustrative for the prototype.", previewCards: [ { title: "Blog", text: "Editorial thinking, practical explainers, and growth-system perspective." }, { title: "Case Studies", text: "Proof stories that connect operating problems to outcomes." }, { title: "Guides & Ebooks", text: "Longer-form instructional assets." }, { title: "Webinars", text: "Session-led learning for guided walkthroughs." } ] },
  branchesIntro: { eyebrow: "Resource family", title: "Choose the type of resource that best fits what you need right now.", text: "Each branch of the resource system supports a different kind of learning." },
  branches: [
    { title: "Blog", text: "Editorial articles and practical thinking for teams building a clearer growth operating system.", ctaLabel: "Explore blog →", href: "/resources/blog" },
    { title: "Case Studies", text: "Proof stories that connect platform value to realistic operating challenges and outcomes.", ctaLabel: "Explore case studies →", href: "/resources/case-studies" },
    { title: "Guides & Ebooks", text: "Long-form resources for visitors who want deeper instruction and more structured learning assets.", ctaLabel: "Explore guides & ebooks →", href: "/resources/guides-and-ebooks" },
    { title: "Webinars", text: "Session-based content for teams that want guided walkthroughs and recorded discussions.", ctaLabel: "Explore webinars →", href: "/resources/webinars" },
  ],
  branchLogicIntro: { eyebrow: "How the resource system works", title: "Different questions call for different kinds of content.", text: "Use the resource system to move between perspective, proof, deeper frameworks, and guided learning." },
  branchLogicCards: [
    { title: "Content-type clarity", text: "Visitors can understand what kind of resource they need before moving deeper into a branch." },
    { title: "Cleaner resource navigation", text: "The parent page routes visitors more intelligently because each resource type has a distinct role." },
    { title: "A stronger content system", text: "The full resource branch feels more complete when articles, proof, guides, and webinars each have a clear place." },
  ],
  whyIntro: { eyebrow: "Why resources matter", title: "The resource system should help visitors keep learning, not just keep clicking.", text: "The strongest resource systems make it easier to find the right depth, the right format, and the right next step in understanding." },
  whyCards: [
    { title: "More ways to learn", text: "Support visitors who want perspective, proof, detailed frameworks, or guided sessions depending on context." },
    { title: "A stronger site ecosystem", text: "Resources make the site feel more useful, more believable, and more complete as a platform brand." },
    { title: "A clearer route into action", text: "Good resources help visitors understand the product and then move toward a more practical next step." },
  ],
  ctaBand: { eyebrow: "Resources", title: "Find the Growthforge content path that fits what you need right now.", text: "Explore articles, proof stories, guides, and sessions designed to make recurring growth decisions easier to understand.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
