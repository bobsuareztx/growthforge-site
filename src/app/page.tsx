import React from "react";
import PageShell from "@/components/layout/PageShell";
import Button from "@/components/ui/Button";
import CTABand from "@/components/ui/CTABand";

const proofItems = [
  "Replace disconnected SEO, paid search, and funnel updates with one shared operating view",
  "Give leadership and operators the same story before the weekly review even starts",
  "Move from explaining numbers to deciding what to do next",
  "Built as a realistic product prototype with clear sample/demo framing",
];

const modules = [
  {
    title: "Executive Dashboard",
    text: "Leadership-ready visibility into top-line performance, funnel movement, and active priorities.",
    href: "/products/executive-dashboard",
  },
  {
    title: "SEO Dashboard",
    text: "Organic visibility, page performance, technical health, and content opportunity signals in one view.",
    href: "/products/seo-dashboard",
  },
  {
    title: "Paid Search Dashboard",
    text: "Campaign efficiency, spend, conversions, and optimization direction with real business context.",
    href: "/products/paid-search-dashboard",
  },
  {
    title: "Funnel & Pipeline",
    text: "Lead flow, stage conversion, bottlenecks, and pipeline context that connect acquisition to outcomes.",
    href: "/products/funnel-and-pipeline-dashboard",
  },
  {
    title: "Recommendations Center",
    text: "A clearer action-support layer for surfacing issues, opportunities, and next-step guidance.",
    href: "/products/recommendations-center",
  },
  {
    title: "Reporting Dashboard",
    text: "Channel contribution, pipeline influence, and period comparisons that support recurring review.",
    href: "/products/attribution-and-reporting-dashboard",
  },
];

const howItWorks = [
  {
    title: "Connect the right inputs",
    text: "Bring search performance, traffic signals, lead flow, and reporting context into one shared system instead of five separate screenshots.",
  },
  {
    title: "See what changed first",
    text: "Review pipeline movement, channel detail, and funnel friction before the meeting gets consumed by explanation work.",
  },
  {
    title: "Prioritize what matters",
    text: "Use the platform to separate noise from the shifts that actually deserve attention, follow-up, or budget changes.",
  },
  {
    title: "Move into action",
    text: "Turn a clearer performance picture into cleaner reviews, stronger coordination, and faster next steps across teams.",
  },
];

const caseStudies = [
  {
    title: "NorthstarCloud",
    text: "A fictional B2B SaaS example focused on reconnecting search performance to funnel quality and pipeline outcomes.",
    metric: "+28% demo conversion rate",
  },
  {
    title: "Summit Home Services",
    text: "A sample paid search turnaround story built around cleaner budget decisions and better local lead quality.",
    metric: "-19% cost per conversion",
  },
  {
    title: "Harbor & Pine",
    text: "An illustrative ecommerce growth example centered on stronger organic visibility and better page-level priorities.",
    metric: "+34% organic sessions",
  },
];

const recommendations = [
  {
    label: "High priority",
    title: "Paid Search Efficiency Drop",
    text: "Cost per conversion is rising across two major campaign groups while opportunity rate remains flat.",
  },
  {
    label: "Review soon",
    title: "SEO CTR Opportunity",
    text: "Several high-impression pages improved average position but are not converting that visibility into enough clicks.",
  },
  {
    label: "Monitor",
    title: "Funnel Qualification Weakening",
    text: "Lead volume is growing faster than qualification, which may indicate follow-up or source-quality friction.",
  },
  {
    label: "Informational",
    title: "Reporting Mix Shift",
    text: "Channel contribution has moved materially toward paid search while organic support softened in the prior period.",
  },
];

export default function Page() {
  return (
    <PageShell activeNavLabel="Product">
      <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,63,94,0.22),transparent_26%),radial-gradient(circle_at_84%_14%,rgba(14,165,233,0.18),transparent_26%),radial-gradient(circle_at_52%_82%,rgba(16,185,129,0.14),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
              Home
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Replace disconnected reporting with one system your entire team can use.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Growthforge brings SEO, paid search, funnel visibility, reporting context, and recommendations into one product experience so teams spend less time stitching together updates and more time making better decisions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" href="/get-started">Book a Demo</Button>
              <Button variant="secondary" href="/products">Explore the Platform</Button>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Built for operators, revenue teams, and leadership reviews. All dashboards, metrics, and customer examples shown here are illustrative for the prototype.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">Executive view</div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Influenced Pipeline", "$3.2M"],
                  ["Qualified Leads", "1,284"],
                  ["Lead-to-Opp Rate", "18.6%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="text-sm text-white/55">{label}</div>
                    <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">SEO</div>
              <div className="text-xl font-semibold text-white">Organic visibility with context</div>
              <div className="mt-3 text-sm leading-7 text-white/60">Ranking movement, top pages, technical health, and content opportunity signals in one connected view.</div>
            </div>
            <div className="rounded-[1.75rem] border border-fuchsia-400/15 bg-gradient-to-br from-fuchsia-400/10 to-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Paid Search</div>
              <div className="text-xl font-semibold text-white">Campaign efficiency beyond spend</div>
              <div className="mt-3 text-sm leading-7 text-white/60">Review spend, conversions, efficiency metrics, and optimization direction with real business context.</div>
            </div>
            <div className="rounded-[1.75rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Funnel</div>
              <div className="text-xl font-semibold text-white">Lead flow tied to outcomes</div>
              <div className="mt-3 text-sm leading-7 text-white/60">See how acquisition turns into qualification, opportunities, and pipeline with less reporting drag.</div>
            </div>
            <div className="rounded-[1.75rem] border border-amber-400/15 bg-gradient-to-br from-amber-400/10 to-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Recommendations</div>
              <div className="text-xl font-semibold text-white">Signals that help teams prioritize</div>
              <div className="mt-3 text-sm leading-7 text-white/60">Surface issues, opportunities, and suggested actions in one review flow instead of scattered updates.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofItems.map((item) => (
            <div key={item} className="rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">The platform</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Six connected dashboards. One clearer operating picture.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Growthforge works best when executive visibility, channel detail, funnel movement, and reporting logic reinforce one another instead of competing for attention.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module, index) => (
              <a key={module.title} href={module.href} className={`rounded-[1.75rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${index % 3 === 0 ? 'border-sky-200 bg-sky-50/50' : index % 3 === 1 ? 'border-fuchsia-200 bg-fuchsia-50/40' : 'border-emerald-200 bg-emerald-50/40'}`}>
                <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Module</div>
                <div className="text-2xl font-semibold text-slate-950">{module.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{module.text}</div>
                <div className="mt-5 text-sm font-semibold text-slate-950">Open view →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">How it works</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">A simpler path from fragmented reporting to better decisions.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">The platform is designed to help teams connect inputs, understand movement, and prioritize action with less explanation work between every step.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((item, index) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">{index + 1}</div>
                <div className="text-xl font-semibold text-slate-950">{item.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-700">Sample case studies</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Illustrative examples that make the product easier to picture in practice.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">These examples use fictional companies, fictional metrics, and sample product views to show how Growthforge could support recurring decision-making across different operating contexts.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item, index) => (
              <div key={item.title} className={`rounded-[1.75rem] border p-6 shadow-sm ${index === 0 ? 'border-rose-200 bg-rose-50/60' : index === 1 ? 'border-amber-200 bg-amber-50/60' : 'border-sky-200 bg-sky-50/60'}`}>
                <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Illustrative example</div>
                <div className="text-2xl font-semibold text-slate-950">{item.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{item.text}</div>
                <div className="mt-5 text-sm font-semibold text-slate-950">{item.metric}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="secondary" href="/resources/case-studies" className="!border-slate-200 !bg-slate-950 !text-white hover:!bg-slate-800">View Sample Case Studies</Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Recommendations Center</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Move beyond passive reporting with recommendations worth reviewing.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Growthforge is designed to surface what changed, what may matter, and what may deserve attention first instead of leaving those decisions buried inside disconnected dashboards.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommendations.map((item, index) => (
              <div key={item.title} className={`rounded-[1.75rem] border p-6 shadow-sm ${index === 0 ? 'border-rose-200 bg-white' : index === 1 ? 'border-violet-200 bg-white' : index === 2 ? 'border-amber-200 bg-white' : 'border-sky-200 bg-white'}`}>
                <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                <div className="text-xl font-semibold text-slate-950">{item.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Growthforge"
        title="See your growth picture more clearly. Act on it faster."
        text="Explore the platform, review the sample product experience, and see how a more connected operating system can support smarter recurring decisions."
        primaryAction={{ label: "Book a Demo", href: "/get-started" }}
        secondaryAction={{ label: "Explore the Platform", href: "/products" }}
      />
    </PageShell>
  );
}
