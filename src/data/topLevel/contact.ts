import { CTAAction, SectionIntroProps } from "@/types/common";
import { FeatureCardProps } from "@/types/cards";
export type ContactPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  pathsIntro: SectionIntroProps;
  paths: FeatureCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};
export const contactPageData: ContactPageData = {
  activeNavLabel: "About",
  hero: { eyebrow: "Contact", title: "Get in touch without guessing where your question belongs.", text: "Use Contact for general questions, partnerships, or other inquiries that do not fit the main start-free or demo path.", primaryAction: { label: "Book a demo", href: "/get-started" }, secondaryAction: { label: "Explore the platform →", href: "/products" }, disclosure: "Contact details and support paths shown here are illustrative for the prototype.", previewCards: [ { title: "General questions", text: "A path for inquiries that do not fit product or pricing exploration directly." }, { title: "Partnerships", text: "A path for conversations that are not the same as a buyer or demo request." }, { title: "Support routing", text: "A clearer way to distinguish general contact from primary conversion actions." }, { title: "Site completeness", text: "An optional route that can make the public site feel more complete if needed." } ] },
  pathsIntro: { eyebrow: "Contact paths", title: "Use Contact when the question is broader than the main conversion flow.", text: "If a dedicated Contact page exists, it should serve a clearly different purpose from Get Started so the site stays focused and useful." },
  paths: [
    { title: "General inquiries", text: "For questions that do not fit product exploration or pricing directly." },
    { title: "Partnerships and other conversations", text: "For conversations that are distinct from starting free or requesting a demo." },
    { title: "Clearer route separation", text: "Keep general inquiries separate from the main buying flow so each path feels more intentional." },
  ],
  whyIntro: { eyebrow: "Why Contact is optional", title: "Contact only helps if it serves a meaningfully different purpose.", text: "If Get Started already covers the main action path, Contact should exist only when it adds clarity for a distinct kind of visitor need." },
  whyCards: [
    { title: "Useful if distinct", text: "The route is strongest when it clearly serves general inquiries, partnerships, or other non-demo questions." },
    { title: "Unnecessary if duplicative", text: "If it simply repeats the Get Started path, it may add more navigation than value." },
    { title: "A product decision, not an architecture need", text: "The site can work well either with or without Contact depending on what kind of public presence you want." },
  ],
  ctaBand: { eyebrow: "Contact", title: "Use the path that best matches what you need next.", text: "Book a demo for product exploration or use Contact only when the question is meaningfully broader than the main conversion flow.", primaryAction: { label: "Book a demo", href: "/get-started" }, secondaryAction: { label: "Explore the platform →", href: "/products" } },
};
