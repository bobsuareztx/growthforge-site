import { CTAAction, SectionIntroProps } from "@/types/common";
import { FeatureCardProps, PrincipleCardItem, TeamCardItem } from "@/types/cards";

export type AboutPageData = {
  activeNavLabel?: string;
  hero: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; disclosure?: string; previewCards: Array<{ title: string; text: string }>; };
  principlesIntro: SectionIntroProps;
  principles: PrincipleCardItem[];
  framingIntro: SectionIntroProps;
  framingCards: FeatureCardProps[];
  teamsIntro: SectionIntroProps;
  teams: TeamCardItem[];
  whyIntro: SectionIntroProps;
  whyCards: FeatureCardProps[];
  ctaBand: { eyebrow: string; title: string; text: string; primaryAction: CTAAction; secondaryAction?: CTAAction; };
};

export const aboutPageData: AboutPageData = {
  activeNavLabel: "About",
  hero: {
    eyebrow: "About",
    title: "Growthforge is built for teams that are tired of running growth through disconnected systems.",
    text: "Growthforge is a sample/demo software company built around a straightforward belief: growth work gets better when teams can see performance, pipeline movement, and next-step priorities in one clearer operating picture. Instead of jumping between channel dashboards, spreadsheet rollups, and repeated explanation work, the product is designed to give operators and leadership a shared view they can actually use.",
    primaryAction: { label: "Explore the platform →", href: "/products" },
    secondaryAction: { label: "Book a demo", href: "/get-started" },
    disclosure: "Company story, team references, and examples on this page are illustrative for the prototype.",
    previewCards: [
      { title: "Why it exists", text: "To reduce the time teams spend stitching together updates before they can make a decision." },
      { title: "What it replaces", text: "Disconnected reporting loops, repeated explanation work, and fragmented channel-to-funnel reviews." },
      { title: "Who it helps", text: "Operators, revenue teams, and leadership groups that need the same performance story before a meeting begins." },
      { title: "How it should feel", text: "Practical, specific, and product-led rather than inflated, vague, or agency-like." },
    ],
  },
  principlesIntro: {
    eyebrow: "What Growthforge believes",
    title: "A clearer operating picture makes better recurring decisions possible.",
    text: "The strongest version of the company story is simple: fewer disconnected systems, less reporting drag, and more useful decisions across functions.",
  },
  principles: [
    { title: "Clarity should come first", text: "Teams should not need three dashboards, two exports, and a meeting recap before they can understand what changed." },
    { title: "Software should reduce explanation work", text: "A good operating system makes the performance story easier to read before anyone has to defend it in a meeting." },
    { title: "Practical trust beats category hype", text: "The brand works best when it sounds specific, credible, and useful instead of oversized or overly abstract." },
  ],
  framingIntro: {
    eyebrow: "How the company is framed",
    title: "Growthforge is presented as a focused software company with a practical point of view.",
    text: "This About page should sound like a real company speaking plainly about the product it is building, not a page explaining what an About page is supposed to accomplish.",
  },
  framingCards: [
    { title: "Product-first orientation", text: "The company is centered on building a clearer operating system for growth, not packaging services around disconnected tools." },
    { title: "Cross-functional usefulness", text: "The story gets stronger when marketing, sales, and leadership can all see how the same operating picture helps them work better together." },
    { title: "Deliberate restraint", text: "Growthforge does not need fake scale, fake history, or inflated claims to feel credible. A precise product story does more for trust." },
  ],
  teamsIntro: {
    eyebrow: "Who the company is for",
    title: "Built for teams that need clearer coordination, not just more software.",
    text: "The product story becomes more believable when it reflects the real operating environments the platform is meant to support.",
  },
  teams: [
    { title: "Demand generation teams", text: "Teams that need search, funnel, and reporting work to connect more cleanly from week to week." },
    { title: "Sales and pipeline teams", text: "Teams that need stronger visibility into qualification, follow-up rhythm, and downstream movement instead of isolated lead counts." },
    { title: "Revenue operations", text: "Operators who need a more coherent picture across lifecycle handoffs, recurring reporting, and pipeline interpretation." },
    { title: "Lean growth teams", text: "Startups and SMBs that want more practical visibility before they take on enterprise-scale operational overhead." },
  ],
  whyIntro: {
    eyebrow: "Why Growthforge",
    title: "The product should make cross-functional growth work easier to run.",
    text: "Growthforge is designed for teams that want fewer disconnected reviews, stronger recurring alignment, and a more practical way to connect marketing performance to business outcomes.",
  },
  whyCards: [
    { title: "Clearer shared context", text: "Help teams work from the same business picture instead of rebuilding it function by function." },
    { title: "Better weekly and monthly reviews", text: "Make recurring performance reviews easier to run, easier to interpret, and more useful once they begin." },
    { title: "More practical growth operations", text: "Support cleaner coordination without forcing teams into software or reporting complexity they do not need." },
  ],
  ctaBand: {
    eyebrow: "About Growthforge",
    title: "A clearer company story for a product built around clearer systems.",
    text: "Explore the platform or book a demo to see how Growthforge is designed to reduce reporting drag and create a more useful operating picture.",
    primaryAction: { label: "Explore the platform →", href: "/products" },
    secondaryAction: { label: "Book a demo", href: "/get-started" },
  },
};
