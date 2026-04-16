import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Ebooks | Growthforge",
  description:
    "Sample guides and ebooks for the Growthforge demo platform.",
};

const featuredGuide = {
  tag: "Featured guide",
  title: "The Growth Visibility Playbook",
  text: "A practical guide to understanding why growth reporting becomes fragmented, how teams can create a clearer operating view, and where channel, funnel, and executive visibility start to work better together.",
  ctaLabel: "Read guide",
  href: "/guide",
};

const guideCards = [
  {
    tag: "Guide",
    title: "Building a Clearer Growth Operating View",
    text: "A foundational walkthrough of how teams can reduce fragmentation across dashboards, reports, and recurring updates.",
    ctaLabel: "Open guide",
    href: "/guide",
  },
  {
    tag: "Ebook",
    title: "Connecting SEO, Paid Search, and Funnel Context",
    text: "A longer-form resource on how channel performance becomes more useful when interpreted alongside lead flow and downstream movement.",
    ctaLabel: "Read ebook",
    href: "/guide",
  },
  {
    tag: "Guide",
    title: "What Executive Reporting Actually Needs",
    text: "A practical resource on making performance reporting easier to interpret, discuss, and act on.",
    ctaLabel: "Open guide",
    href: "/guide",
  },
  {
    tag: "Ebook",
    title: "Why Channel Dashboards Still Leave Teams Guessing",
    text: "A closer look at the limits of isolated reporting and why context matters for recurring decision-making.",
    ctaLabel: "Read ebook",
    href: "/guide",
  },
  {
    tag: "Guide",
    title: "The Weekly Growth Review Framework",
    text: "A sample structure for reviewing channel performance, funnel movement, reporting shifts, and next-step priorities.",
    ctaLabel: "Open framework",
    href: "/guide",
  },
  {
    tag: "Ebook",
    title: "From Reporting Drag to Decision Clarity",
    text: "A sample educational asset focused on reducing manual reporting friction and improving shared visibility across teams.",
    ctaLabel: "Read ebook",
    href: "/guide",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),linear-gradient(to_bottom,#020617,#0f172a_26%,#111827_100%)]" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            Guides &amp; Ebooks
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sample guides and ebooks for clearer growth visibility
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            This section brings together longer-form educational content within
            the Growthforge prototype. The goal is to make the platform world
            feel more complete, more useful, and more grounded in practical
            learning.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Resources shown here are illustrative and part of the sample/demo
            site experience.
          </p>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
              Featured Resource
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Start with a flagship resource that explains the Growthforge point
              of view
            </h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 lg:p-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              {featuredGuide.tag}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {featuredGuide.title}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              {featuredGuide.text}
            </p>
            <a
              href={featuredGuide.href}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              {featuredGuide.ctaLabel}
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
              Library
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Longer-form resources designed to make the Growthforge world feel
              complete and useful
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
              These sample assets are meant to reinforce the educational side of
              the platform story: clearer reporting, stronger visibility, better
              prioritization, and more connected decision-making.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guideCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  {item.ctaLabel} →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/[0.05] to-emerald-500/10 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore the ideas behind the Growthforge platform
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-7">
            Browse the broader resources section, open the guide, or book a demo
            to see how Growthforge connects visibility, reporting, and
            prioritization in one clearer experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/resources"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Explore Resources
            </a>
            <a
              href="/get-started"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a Demo
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}