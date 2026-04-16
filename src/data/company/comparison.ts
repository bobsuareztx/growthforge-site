import { SupportPageTemplateProps } from "@/types/templates";
export const comparisonPageData: SupportPageTemplateProps = {
  activeNavLabel: "About", eyebrow: "Comparison", title: "A clearer way to position Growthforge against heavier, more fragmented alternatives.", text: "Use this page to help buyers understand where Growthforge fits when they are comparing it with heavyweight suites, fragmented point tools, or patchwork reporting setups.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" }, disclosure: "All comparison examples and positioning details shown here are illustrative for the prototype.", heroRightContent: null,
  framingIntro: { eyebrow: "How comparison is framed", title: "The strongest comparison story is about fit, tradeoffs, and operating practicality.", text: "The comparison page should not overclaim. It should help buyers understand what kind of system Growthforge is trying to be and why that might fit their needs better." },
  framingCards: [
    { title: "Clearer buyer context", text: "Help visitors understand where Growthforge fits and what kind of tradeoffs it makes on purpose." },
    { title: "Cleaner category positioning", text: "The route helps the platform feel more intentional and more believable." },
    { title: "Reduced ambiguity", text: "Help buyers make sense of fit without forcing the site to overclaim or sound theatrical." },
  ],
  contentIntro: { eyebrow: "Comparison paths", title: "Different buyers compare in different ways.", text: "Use comparison paths to frame Growthforge against the kinds of alternatives buyers are actually considering, without turning the route into a feature grid arms race." },
  contentCards: [
    { tag: "Use case", title: "Compared with heavyweight suites", text: "For buyers who want clearer coordination without excessive implementation burden or organizational overhead.", ctaLabel: "Explore path →", href: "/comparison" },
    { tag: "Use case", title: "Compared with fragmented point tools", text: "For teams that want a more coherent operating layer instead of stitching too many narrow systems together.", ctaLabel: "Explore path →", href: "/comparison" },
    { tag: "Use case", title: "Compared with reporting-only tools", text: "For buyers who need execution context and recurring decision support, not just dashboards.", ctaLabel: "Explore path →", href: "/comparison" },
    { tag: "Use case", title: "Compared with early-stage patchwork stacks", text: "For teams that have outgrown lightweight setups but do not want a heavyweight system too soon.", ctaLabel: "Explore path →", href: "/comparison" },
  ],
  whyIntro: { eyebrow: "Why comparison matters", title: "Comparison should make fit easier to understand, not just make claims louder.", text: "The strongest comparison page helps visitors see how Growthforge differs in practical terms and why that difference may matter to how they actually operate." },
  whyCards: [
    { title: "More useful buyer framing", text: "Give visitors a better sense of whether Growthforge is closer to the kind of system they actually need." },
    { title: "Stronger trust", text: "Comparison can build credibility when it stays measured, specific, and aligned with the product’s real positioning." },
    { title: "A more deliberate platform story", text: "The route helps the whole site feel more intentional about where the product fits in the broader market." },
  ],
  ctaBand: { eyebrow: "Comparison", title: "See how Growthforge compares when the goal is clearer systems, not more complexity.", text: "Explore the platform or book a demo to see how Growthforge fits your team’s operating needs in practice.", primaryAction: { label: "Explore the platform →", href: "/products" }, secondaryAction: { label: "Book a demo", href: "/get-started" } },
};
