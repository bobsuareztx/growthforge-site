import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide | Growthforge",
  description: "The Growth Visibility Playbook for the Growthforge demo platform.",
};

const playbookSections = [
  {
    title: "Why fragmentation grows over time",
    text: "Teams add tools, channels, and reporting layers as complexity increases. Each addition solves a local problem while often making the total picture harder to interpret.",
  },
  {
    title: "Why channel visibility is not enough",
    text: "Channel dashboards are useful, but growth decisions often depend on what happens across channels, pages, funnel stages, and reporting periods together.",
  },
  {
    title: "Why funnel context changes the conversation",
    text: "Traffic and lead volume can look healthy while downstream performance weakens. Funnel visibility helps explain what top-line performance alone cannot.",
  },
  {
    title: "Why reporting should support decisions, not only updates",
    text: "The most useful reporting does more than summarize activity. It helps stakeholders understand what changed, why it matters, and where follow-up may be needed.",
  },
  {
    title: "Why prioritization matters as much as visibility",
    text: "Even when teams can see the data, they still need help deciding what deserves attention first. Signals, alerts, and recommendation layers help create a more usable review process.",
  },
];

const takeaways = [
  "More dashboards do not automatically create more clarity.",
  "Channel, funnel, and reporting context work better together.",
  "Executive visibility improves when interpretation becomes easier.",
  "Prioritization is a core part of performance review.",
  "A connected operating layer can reduce reporting friction.",
];

function PlaybookCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),linear-gradient(to_bottom,#020617,#0f172a_26%,#111827_100%)]" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            Guide
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Growth Visibility Playbook
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            A practical guide to understanding why growth reporting becomes
            fragmented, how teams can create a clearer operating view, and where
            channel, funnel, and executive visibility start to work better
            together.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            This guide is presented as sample educational content within the
            Growthforge prototype.
          </p>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
              Introduction
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Most teams do not lack data. They lack a connected way to interpret it.
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
              Growth reporting often starts simply. One dashboard covers paid
              search. Another tracks organic traffic. Lead totals live somewhere
              else. Executive reporting is assembled at the end. Over time, each
              piece becomes harder to connect. The result is not a data shortage.
              It is a visibility problem. This guide explains how that happens
              and what a clearer operating model can look like.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
              The Playbook
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Five ideas behind a clearer growth operating view
            </h2>
          </div>

          <div className="grid gap-4">
            {playbookSections.map((section) => (
              <PlaybookCard
                key={section.title}
                title={section.title}
                text={section.text}
              />
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">
              Key Takeaways
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              A clearer growth picture usually comes from connection, not more reporting volume.
            </h2>
          </div>

          <div className="grid gap-3">
            {takeaways.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-slate-900/70 px-5 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/[0.05] to-emerald-500/10 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            See how these ideas come to life inside the Growthforge platform
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-7">
            Book a demo to explore the dashboards, reporting views, and
            action-support layers that turn this guide from theory into a product
            experience.
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