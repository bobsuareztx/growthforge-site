import React from "react";
import { ResourceIndexTemplateProps } from "@/types/templates";
export const caseStudiesIndexPageData: ResourceIndexTemplateProps = {
  activeNavLabel: "Resources", eyebrow: "Case Studies", title: "Proof stories that connect operating problems to believable outcomes.", text: "Explore case studies that show how clearer systems can reduce reporting drag, improve coordination, and support better recurring decisions.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" }, disclosure: "All companies, metrics, and case-study examples shown here are illustrative for the prototype.", heroRightContent: null,
  featuredIntro: { eyebrow: "Featured case study", title: "Start with a proof story about reporting drag, review quality, and cross-functional visibility.", text: "The case-studies branch works best when it connects believable operating challenges to believable outcomes." },
  featuredItem: { tag: "Featured proof story", title: "How NorthstarCloud reduced reporting drag and improved weekly decision clarity.", text: "A proof story showing how a clearer operating system helped a growing team reduce reporting friction and improve recurring review quality.", ctaLabel: "Read case study →", href: "/resources/case-studies/northstarcloud", meta: <><span>Revenue operations</span><span>•</span><span>Case study</span></> },
  gridIntro: { eyebrow: "Proof library", title: "Case studies that make the value easier to picture in practice.", text: "Use the proof branch to show what clearer systems can change in recurring review quality, visibility, and decision support." },
  gridItems: [
    { tag: "Marketing", title: "How Brightside improved campaign review clarity", text: "A proof story about making campaign reporting easier to interpret across the team.", ctaLabel: "Read case study →", href: "/resources/case-studies" },
    { tag: "Sales", title: "How Pinebridge made pipeline review more readable", text: "A story about reducing sales-review friction and improving forecast context.", ctaLabel: "Read case study →", href: "/resources/case-studies" },
    { tag: "Rev Ops", title: "How Emberlane aligned lifecycle and reporting views", text: "A proof story about building a more coherent cross-functional operating picture.", ctaLabel: "Read case study →", href: "/resources/case-studies" },
    { tag: "SMB", title: "How Rivetstack scaled without outgrowing its system too early", text: "A case study about practical scale and avoiding premature complexity.", ctaLabel: "Read case study →", href: "/resources/case-studies" },
  ],
  whyIntro: { eyebrow: "Why case studies matter", title: "The proof branch shows how the product story can translate into believable outcomes.", text: "It gives visitors examples of how clearer systems can improve coordination, visibility, and recurring decision-making in practice." },
  whyCards: [
    { title: "Proof and credibility", text: "Use case studies to turn broad product value into more concrete, outcome-oriented stories." },
    { title: "Operational realism", text: "The strongest proof stories focus on recurring problems that teams can recognize from their own work." },
    { title: "A stronger resource system", text: "Case studies help the resource branch feel more complete and commercially believable." },
  ],
  ctaBand: { eyebrow: "Case Studies", title: "Explore more proof stories on clearer operating systems.", text: "See how teams improved reporting clarity, coordination, and recurring review quality with a more usable system picture.", primaryAction: { label: "Explore resources →", href: "/resources" }, secondaryAction: { label: "Explore the platform", href: "/products" } },
};
