import { SupportPageTemplateProps } from "@/types/templates";
export const careersPageData: SupportPageTemplateProps = {
  activeNavLabel: "About", eyebrow: "Careers", title: "A lighter-weight careers page that supports employer credibility without overpowering the product story.", text: "Explore how Growthforge presents hiring in a way that feels real, useful, and proportional to the rest of the site.", primaryAction: { label: "View roles", href: "/careers" }, secondaryAction: { label: "Explore the platform →", href: "/products" }, disclosure: "All roles, team descriptions, and hiring details shown here are illustrative for the prototype.", heroRightContent: null,
  framingIntro: { eyebrow: "How careers is framed", title: "The careers page should add realism without becoming the main story.", text: "The route works best when it gives the company a more concrete shape while still keeping the product and operating point of view at the center." },
  framingCards: [
    { title: "Lighter-weight credibility", text: "The route helps the company feel more concrete without trying to become a huge recruiting destination." },
    { title: "Cleaner employer context", text: "Visitors can understand the kind of team and working style Growthforge is trying to represent more quickly." },
    { title: "Practical hiring signal", text: "A few role examples make the route feel active and believable without a full talent system." },
  ],
  contentIntro: { eyebrow: "Role examples", title: "The strongest careers story reflects the kind of team the product implies.", text: "Use role examples to make Growthforge feel more like a real operating company without overbuilding the page beyond what the site needs right now." },
  contentCards: [
    { tag: "Open role", title: "Senior Product Marketing Manager", text: "Illustrative role focused on messaging clarity and go-to-market coordination.", ctaLabel: "View role →", href: "/careers" },
    { tag: "Open role", title: "Lifecycle Marketing Manager", text: "Illustrative role focused on campaign operations and nurture systems.", ctaLabel: "View role →", href: "/careers" },
    { tag: "Open role", title: "Revenue Operations Manager", text: "Illustrative role focused on handoff logic, reporting structure, and recurring decision support.", ctaLabel: "View role →", href: "/careers" },
    { tag: "Open role", title: "Account Executive", text: "Illustrative role focused on pipeline movement and practical customer context.", ctaLabel: "View role →", href: "/careers" },
  ],
  whyIntro: { eyebrow: "Why careers matters", title: "A careers page can add realism when it stays focused and proportionate.", text: "The route helps the company feel more tangible without distracting from the core story about the product and the operating problems it solves." },
  whyCards: [
    { title: "More believable company presence", text: "The route makes the company feel more like a real operating business without requiring excessive corporate detail." },
    { title: "Better trust continuity", text: "The careers page reinforces the same practical and restrained tone used everywhere else on the site." },
    { title: "A stronger company layer", text: "It rounds out the public site without turning the company story into something bigger than it needs to be." },
  ],
  ctaBand: { eyebrow: "Careers", title: "See how Growthforge presents hiring without losing focus on the platform story.", text: "Explore open roles or go back to the product story to see how Growthforge fits the way teams work.", primaryAction: { label: "View roles", href: "/careers" }, secondaryAction: { label: "Explore the platform →", href: "/products" } },
};
