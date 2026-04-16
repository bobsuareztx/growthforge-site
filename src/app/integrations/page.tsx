import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | Growthforge",
  description: "Connected inputs and integrations across the Growthforge demo platform.",
};

const integrations = [
  {
    name: "Google Ads",
    text: "Bring campaign spend, conversions, efficiency signals, and trend visibility into one clearer operating view.",
  },
  {
    name: "Google Search Console",
    text: "Connect organic visibility, ranking movement, and page-level search performance to the broader platform story.",
  },
  {
    name: "Google Analytics",
    text: "Add traffic, landing-page behavior, and engagement context that helps explain what happens after the click.",
  },
  {
    name: "CRM",
    text: "Connect lead flow, stage movement, and opportunity outcomes so channel performance can be viewed with downstream context.",
  },
  {
    name: "Forms and lead capture tools",
    text: "Track incoming demand and connect top-of-funnel volume to qualification and pipeline progression.",
  },
  {
    name: "Reporting exports",
    text: "Support recurring review workflows with a cleaner reporting layer built around interpretation and prioritization.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),linear-gradient(to_bottom,#020617,#0f172a_26%,#111827_100%)]" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
            Integrations
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connected inputs that help Growthforge create a clearer operating view
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Growthforge is presented as a sample/demo platform that connects
            performance inputs across SEO, paid search, traffic, lead flow, and
            reporting. The goal is not to overwhelm teams with setup language.
            The goal is to show how connected inputs create better visibility.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Integrations shown here are illustrative within the Growthforge prototype.
          </p>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Connected inputs
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The platform becomes more useful when the right signals are easier to see together
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
              In this prototype, integrations are framed as the inputs that shape
              the broader Growthforge story. Search performance, traffic quality,
              funnel movement, and reporting become more useful when they can be
              viewed in one connected system.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/[0.05] to-emerald-500/10 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore how connected inputs support the full Growthforge experience
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-7">
            Review the product pages, sample dashboards, and reporting views to
            see how Growthforge is designed to connect visibility, context, and
            prioritization.
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