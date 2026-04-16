import React from "react";
import { ResourceIndexTemplateProps } from "@/types/templates";
export const webinarsPageData: ResourceIndexTemplateProps = {
  activeNavLabel: "Resources", eyebrow: "Webinars", title: "Sessions, walkthroughs, and recorded conversations for teams that want more guided learning.", text: "Explore session-led content designed to help teams understand how clearer growth systems work in practice and how recurring decisions can improve over time.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" }, disclosure: "All sessions, presenters, and webinar examples shown here are illustrative for the prototype.", heroRightContent: null,
  featuredIntro: { eyebrow: "Featured webinar", title: "Start with a session on building a cleaner weekly growth review.", text: "The webinars branch works best when it emphasizes guided learning, walkthroughs, and practical discussion in a session format." },
  featuredItem: { tag: "Featured session", title: "How to run a cleaner weekly growth review without rebuilding the story every time.", text: "A featured session focused on improving reporting rhythm, operating clarity, and decision quality across growth teams.", ctaLabel: "Watch session →", href: "/resources/webinars", meta: <><span>Recorded webinar</span><span>•</span><span>45 min</span></> },
  gridIntro: { eyebrow: "Session library", title: "Guided sessions for teams that want more context, examples, and walkthroughs.", text: "Use the webinars branch when it helps to learn through a structured conversation rather than reading alone." },
  gridItems: [
    { tag: "Recorded webinar", title: "How to interpret pipeline signals with less noise", text: "A session on building a cleaner view of pipeline movement and forecast confidence.", ctaLabel: "Watch session →", href: "/resources/webinars" },
    { tag: "Workshop", title: "The lifecycle review workshop", text: "A practical session on how nurture programs, timing, and handoffs affect downstream interpretation.", ctaLabel: "Watch workshop →", href: "/resources/webinars" },
    { tag: "Recorded webinar", title: "What a clearer reporting system looks like", text: "A walkthrough of how operators can reduce reporting friction and improve recurring decision flow.", ctaLabel: "Watch session →", href: "/resources/webinars" },
    { tag: "Panel session", title: "How lean teams scale without adding unnecessary complexity", text: "A conversation on building an operating system that supports growth without becoming harder to manage too early.", ctaLabel: "Watch panel →", href: "/resources/webinars" },
  ],
  whyIntro: { eyebrow: "Why webinars matter", title: "The webinars branch is for guided learning, discussion, and context-rich walkthroughs.", text: "It gives visitors a way to explore the same operating ideas in a more conversational and structured format." },
  whyCards: [
    { title: "Guided learning", text: "Use webinars when the visitor benefits from explanation, pacing, and more context around the ideas." },
    { title: "Practical walkthroughs", text: "Session-led content works best when it helps teams picture how the system might actually be used." },
    { title: "A stronger resource system", text: "Webinars make the resource branch feel more complete for visitors who learn best through guided formats." },
  ],
  ctaBand: { eyebrow: "Webinars", title: "Explore session-led learning for clearer growth systems.", text: "Watch recorded sessions, workshops, and walkthroughs designed to make recurring operating decisions easier to understand.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
