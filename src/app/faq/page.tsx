import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Growthforge",
  description: "Frequently asked questions about the Growthforge demo platform.",
};

const productQuestions = [
  {
    q: "What is Growthforge?",
    a: "Growthforge is a sample/demo growth platform concept designed to unify SEO, paid search, funnel visibility, reporting, and recommendations in one connected product experience.",
  },
  {
    q: "Is Growthforge a software product, a service, or both?",
    a: "In this prototype, Growthforge is positioned primarily as a software platform, with optional support and strategic review layers where relevant.",
  },
  {
    q: "Who is Growthforge for?",
    a: "Growthforge is designed for teams that manage search performance, lead flow, reporting, and growth visibility and want a clearer operating view across all of it.",
  },
  {
    q: "Is it meant for executives or operators?",
    a: "Both. The product is designed to support leadership visibility while still being useful for teams doing day-to-day performance review and optimization work.",
  },
  {
    q: "Does it only focus on SEO and paid search?",
    a: "No. SEO and paid search are central parts of the product story, but Growthforge also connects those channels to funnel movement, reporting context, pipeline influence, and recommendations.",
  },
];

const pricingQuestions = [
  {
    q: "Is the pricing on this site real?",
    a: "No. All pricing shown on the Growthforge website is sample/demo pricing created for prototype purposes.",
  },
  {
    q: "How are the plans structured?",
    a: "The plans are organized around visibility depth, reporting needs, and operating complexity, from lighter-weight visibility to broader executive and attribution-oriented reporting.",
  },
  {
    q: "Can teams upgrade later?",
    a: "Yes. In the Growthforge prototype, plans are presented as expandable as reporting needs and organizational complexity increase.",
  },
  {
    q: "Do all plans include SEO and paid search views?",
    a: "Yes. Those are treated as core parts of the platform experience across the pricing model shown on the site.",
  },
  {
    q: "Are support options included?",
    a: "Some support is implied in the plan structure, while additional onboarding, reporting alignment, and strategic review options are shown separately as illustrative add-ons.",
  },
];

const setupQuestions = [
  {
    q: "Does Growthforge replace all existing tools?",
    a: "Not necessarily. In this prototype, Growthforge is presented as a connected visibility and reporting layer rather than a claim to replace every underlying system.",
  },
  {
    q: "Is setup meant to be technical?",
    a: "The site positions setup in a simple, business-friendly way. The emphasis is on connected inputs and clearer visibility, not on heavy implementation language.",
  },
  {
    q: "How do teams use the platform day to day?",
    a: "The intended flow is to start with high-level visibility, review channel and funnel movement, surface issues and opportunities, and then use the recommendations layer to support prioritization.",
  },
  {
    q: "Can different stakeholders use different parts of the platform?",
    a: "Yes. The product is designed so leadership, channel owners, and reporting-heavy teams can all work from the same broader picture while focusing on the views most relevant to them.",
  },
  {
    q: "Is this meant for large teams only?",
    a: "No. The platform is especially useful anywhere reporting fragmentation and cross-channel complexity are starting to outgrow the current setup.",
  },
];

const reportingQuestions = [
  {
    q: "Are the dashboards on this site real?",
    a: "They are illustrative product views created for demo and prototype purposes.",
  },
  {
    q: "Are the metrics and case studies real?",
    a: "No. All product data, campaign metrics, dashboard values, and case studies shown across the Growthforge site are fictional unless explicitly replaced later.",
  },
  {
    q: "What kind of data does Growthforge bring together?",
    a: "In the prototype, the product is shown bringing together search performance data, campaign data, landing-page and traffic signals, lead and funnel stage data, and reporting snapshots.",
  },
  {
    q: "How is reporting different from normal dashboards?",
    a: "Growthforge is positioned as more connected and more decision-oriented. The reporting story is designed to link channels, funnel movement, contribution, and priorities more clearly.",
  },
  {
    q: "Does the product help with next steps, or only reporting?",
    a: "It is presented as doing both. The Recommendations Center and related alert layers are meant to help teams move from observation into prioritization.",
  },
];

function QuestionSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
      <div className="mb-6">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-[24px] border border-white/10 bg-slate-900/70 p-5"
          >
            <h3 className="text-lg font-medium text-white">{item.q}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),linear-gradient(to_bottom,#020617,#0f172a_26%,#111827_100%)]" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
            FAQ
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frequently asked questions about Growthforge
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Growthforge is presented as a sample/demo growth platform concept.
            This page answers common questions about the product, pricing,
            setup, reporting, and how the platform is intended to work across
            the broader site experience.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Illustrative product interface and sample/demo data are used
            throughout the site.
          </p>
        </div>

        <div className="grid gap-6">
          <QuestionSection
            eyebrow="Product Questions"
            title="What teams often want to know first"
            items={productQuestions}
          />

          <QuestionSection
            eyebrow="Pricing Questions"
            title="Common questions about plans and packaging"
            items={pricingQuestions}
          />

          <QuestionSection
            eyebrow="Setup and Use"
            title="What using Growthforge is intended to feel like"
            items={setupQuestions}
          />

          <QuestionSection
            eyebrow="Reporting and Data"
            title="Questions about dashboards, reporting, and sample data"
            items={reportingQuestions}
          />
        </div>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/[0.05] to-blue-500/10 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Still have questions? Explore the platform or book a closer look.
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-7">
            Review the product pages, explore the sample dashboards, or book a
            demo to see how the Growthforge experience is designed to work
            across channels, funnel visibility, reporting, and recommendations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/get-started"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Book a Demo
            </a>
            <a
              href="/products"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore the Platform
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}