import React from "react";
import { ResourceIndexTemplateProps } from "@/types/templates";
export const guidesAndEbooksPageData: ResourceIndexTemplateProps = {
  activeNavLabel: "Resources", eyebrow: "Guides & Ebooks", title: "Longer-form practical resources for teams that want more depth, structure, and usable frameworks.", text: "Explore longer-form learning resources designed to help teams build stronger review rhythm, clearer systems, and more repeatable growth decision-making.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" }, disclosure: "All guides, ebooks, and learning examples shown here are illustrative for the prototype.", heroRightContent: null,
  featuredIntro: { eyebrow: "Featured guide", title: "Start with a structured resource for building a cleaner growth operating system.", text: "The guides branch works best when it emphasizes depth, instruction, and practical frameworks teams can revisit." },
  featuredItem: { tag: "Featured guide", title: "The cleaner growth operating system workbook", text: "A structured guide showing how teams can improve reporting rhythm, campaign interpretation, and cross-functional visibility.", ctaLabel: "Read guide →", href: "/resources/guides-ebooks", meta: <><span>Workbook</span><span>•</span><span>Long-form</span></> },
  gridIntro: { eyebrow: "Guide library", title: "Long-form resources for teams that want more than a quick article.", text: "Use the guides branch to go deeper into recurring review quality, lifecycle interpretation, campaign clarity, and practical scale." },
  gridItems: [
    { tag: "Workbook", title: "Weekly growth review workbook", text: "A practical resource for building a better recurring review rhythm.", ctaLabel: "Read guide →", href: "/resources/guides-ebooks" },
    { tag: "Playbook", title: "Campaign clarity playbook", text: "A guide to cleaner campaign structure and better review conversations.", ctaLabel: "Read playbook →", href: "/resources/guides-ebooks" },
    { tag: "Guide", title: "Lifecycle interpretation guide", text: "A longer-form resource on reading nurture flow and progression more clearly.", ctaLabel: "Read guide →", href: "/resources/guides-ebooks" },
    { tag: "Ebook", title: "Scaling without operating sprawl", text: "A practical resource for lean teams that need clearer systems as they grow.", ctaLabel: "Read ebook →", href: "/resources/guides-ebooks" },
  ],
  whyIntro: { eyebrow: "Why guides matter", title: "The guides branch is for depth, structure, and practical learning.", text: "It gives visitors a place to spend more time with a topic and move from surface understanding into more repeatable frameworks." },
  whyCards: [
    { title: "Structured learning", text: "Use guides when the visitor needs more depth and more continuity than a single article can provide." },
    { title: "Reusable frameworks", text: "Long-form resources are strongest when they help teams return to the same operating problem with more clarity later." },
    { title: "A stronger resource system", text: "Guides and ebooks make the resource branch feel more useful for deeper learning, not just discovery." },
  ],
  ctaBand: { eyebrow: "Guides & Ebooks", title: "Explore longer-form resources for building clearer systems.", text: "Go deeper into recurring review quality, lifecycle interpretation, campaign clarity, and practical scale.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
