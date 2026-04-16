import { CTAAction, SectionIntroProps } from "@/types/common";
import { FAQCardProps, FeatureCardProps, StepItem } from "@/types/cards";

export type GetStartedPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  stepsIntro: SectionIntroProps;
  steps: StepItem[];
  valueIntro: SectionIntroProps;
  valueCards: FeatureCardProps[];
  principleIntro: SectionIntroProps;
  principleCards: FeatureCardProps[];
  faqIntro: SectionIntroProps;
  faqs: FAQCardProps[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const getStartedPageData: GetStartedPageData = {
  activeNavLabel: "Pricing",
  hero: { eyebrow: "Get Started", title: "Take the next step without guessing what happens after you click.", text: "Start with a lighter path or request a guided demo.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" }, disclosure: "All onboarding, trial, and demo details shown here are illustrative for the prototype.", previewCards: [ { title: "Clearer next-step logic", text: "Understand whether you should start free or request a guided walkthrough." }, { title: "Lower conversion friction", text: "Know what happens next before you commit to the next step." }, { title: "Practical buyer support", text: "Answer the questions that often sit between interest and action." }, { title: "Commercial completeness", text: "Make the site feel more like a real buying experience." } ] },
  stepsIntro: { eyebrow: "Next-step logic", title: "A good conversion page explains what happens after the click.", text: "The purpose of this page is to reduce uncertainty, explain the path forward, and help visitors choose the right next step." },
  steps: [
    { title: "Choose the right path", text: "Start with a lighter self-serve motion or request a guided demo." },
    { title: "Share a little context", text: "Use the form to tell us who you are, what kind of team you have, and what you want to accomplish." },
    { title: "Move forward with clarity", text: "Use the next step that best fits your team’s operating reality." },
  ],
  valueIntro: { eyebrow: "Why this page matters", title: "The conversion layer should make action feel easier, not more confusing.", text: "A strong get-started page helps visitors understand the difference between a free start and a guided conversation." },
  valueCards: [
    { title: "Lower friction", text: "Visitors are more likely to act when they understand the path forward." },
    { title: "Stronger trust", text: "Explaining the next step makes the conversion path feel more deliberate and believable." },
    { title: "Better commercial continuity", text: "Connect the product story, pricing story, and action path into a more complete buying experience." },
  ],
  principleIntro: { eyebrow: "Conversion design principle", title: "The page works best when it stays clear and proportional to the rest of the build.", text: "The conversion layer should feel polished and trustworthy without pretending a full production onboarding architecture already exists behind it." },
  principleCards: [
    { title: "No fake onboarding complexity", text: "Avoid over-describing backend workflow that does not need to exist yet." },
    { title: "Enough specificity to support action", text: "Give visitors a clear sense of what a trial or demo means." },
    { title: "Aligned with the commercial layer", text: "The page feels more credible because it follows naturally from pricing." },
  ],
  faqIntro: { eyebrow: "Get-started FAQ", title: "A few practical questions the conversion page should answer clearly.", text: "A strong conversion page anticipates hesitation between interest and action." },
  faqs: [
    { question: "Should I start free or book a demo?", answer: "Start free if your team wants a lighter path. Book a demo if you want a more tailored walkthrough." },
    { question: "What should I expect from a demo?", answer: "The demo is positioned as a guided walkthrough of how Growthforge could fit your current operating environment." },
    { question: "Why make this a separate page?", answer: "Because conversion has a different job from product and pricing pages." },
  ],
  whyIntro: { eyebrow: "Why Growthforge", title: "The strongest next step is the one that feels clear, practical, and believable.", text: "This page works best when it helps visitors move forward with confidence." },
  whyCards: [
    { title: "Clearer action path", text: "Help visitors choose the right mode of engagement without guessing what happens next." },
    { title: "More natural conversion experience", text: "Turn product and pricing interest into a practical next step that feels thought through." },
    { title: "Stronger buying continuity", text: "Support a more complete site experience from discovery through action." },
  ],
  ctaBand: { eyebrow: "Get Started", title: "Move forward with a next step that feels clear, practical, and believable.", text: "Choose the path that best matches your team’s needs today and start with more confidence.", primaryAction: { label: "Get started free →", href: "/get-started" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
