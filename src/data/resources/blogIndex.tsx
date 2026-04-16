import React from "react";
import { ResourceIndexTemplateProps } from "@/types/templates";

export const blogIndexPageData: ResourceIndexTemplateProps = {
  activeNavLabel: "Resources",
  eyebrow: "Blog",
  title: "Ideas, analysis, and practical thinking for teams building a clearer growth system.",
  text: "Explore editorial content designed to help teams think more clearly about campaigns, lifecycle flow, pipeline movement, and recurring decisions.",
  primaryAction: { label: "Explore resources →", href: "/resources" },
  secondaryAction: { label: "Explore the platform", href: "/products" },
  disclosure: "All articles, categories, and editorial examples shown here are illustrative for the prototype.",
  heroRightContent: null,
  featuredIntro: { eyebrow: "Featured article", title: "Start with a sharper view into how growth systems actually drift over time.", text: "The blog branch works best when it combines practical analysis with a clear editorial point of view." },
  featuredItem: { tag: "Featured article", title: "Why reporting breaks slowly — and why most teams notice too late.", text: "A practical article on how reporting friction accumulates gradually until the operating picture becomes harder to trust and harder to use.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly", meta: <><span>Growth operations</span><span>•</span><span>8 min read</span></> },
  gridIntro: { eyebrow: "Latest articles", title: "Editorial thinking for teams that want a cleaner way to interpret growth work.", text: "Use the blog branch to explore analysis, practical perspective, and common operating patterns." },
  gridItems: [
    { tag: "Demand Gen", title: "What a cleaner campaign system actually looks like", text: "A practical article on building campaign structure that is easier to run and easier to review.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly", meta: <><span>6 min read</span></> },
    { tag: "Lifecycle", title: "Where nurture programs lose momentum", text: "A piece on why lifecycle systems often look more complete than they really are.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly", meta: <><span>7 min read</span></> },
    { tag: "Sales", title: "The real cost of slow follow-up", text: "An article on how follow-up discipline affects pipeline interpretation.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly", meta: <><span>5 min read</span></> },
    { tag: "Reporting", title: "How teams end up rebuilding the same dashboard story every week", text: "A look at why recurring reporting friction is often a structural operating problem.", ctaLabel: "Read article →", href: "/resources/blog/why-reporting-breaks-slowly", meta: <><span>9 min read</span></> },
  ],
  whyIntro: { eyebrow: "Why the blog matters", title: "The blog branch is for perspective, interpretation, and practical operating insight.", text: "It gives visitors a place to explore how growth systems work in practice." },
  whyCards: [
    { title: "Editorial perspective", text: "Use the blog to explore patterns, tradeoffs, and recurring operating problems." },
    { title: "Practical analysis", text: "Articles are strongest when they connect real operating problems to clearer decision-making." },
    { title: "A stronger resource system", text: "The blog helps the resource branch feel like a real content system instead of a flat list." },
  ],
  ctaBand: { eyebrow: "Blog", title: "Explore more thinking on clearer growth systems.", text: "Read articles that help teams interpret campaigns, lifecycle flow, reporting, and recurring decisions with more clarity.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
