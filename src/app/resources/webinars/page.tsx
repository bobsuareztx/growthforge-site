import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | Growthforge",
  description: "Sample webinar content for the Growthforge demo platform.",
};

const featuredWebinar = {
  tag: "Featured webinar",
  title: "From Reporting Drag to Decision Clarity",
  text: "A sample session on how teams can reduce fragmented reporting, create a clearer operating view, and improve recurring growth reviews across channels and funnel stages.",
  ctaLabel: "Watch webinar",
  href: "/resources/webinars",
};

const webinars = [
  {
    tag: "On-demand",
    title: "Connecting SEO, Paid Search, and Funnel Context",
    text: "A sample webinar focused on why isolated channel views make growth decisions harder than they need to be.",
    ctaLabel: "View session",
    href: "/resources/webinars",
  },
  {
    tag: "On-demand",
    title: "What Executive Reporting Actually Needs",
    text: "A practical session on making reporting easier to interpret for leadership without losing operational detail.",
    ctaLabel: "Watch webinar",
    href: "/resources/webinars",
  },
  {
    tag: "Recorded session",
    title: "The Weekly Growth Review Framework",
    text: "A walkthrough of a recurring review model for channel performance, funnel movement, and next-step prioritization.",
    ctaLabel: "Open session",
    href: "/resources/webinars",
  },
  {
    tag: "On-demand",
    title: "Why Channel Dashboards Still Leave Teams Guessing",
    text: "A closer look at the limitations of disconnected reporting and how clearer systems improve decision support.",
    ctaLabel: "Watch webinar",
    href: "/resources/webinars",
  },
  {
    tag: "Recorded session",
    title: "Clearer Visibility for Revenue Operations",
    text: "A sample educational session on how reporting, qualification, and pipeline context work better when viewed together.",
    ctaLabel: "View webinar",
    href: "/resources/webinars",
  },
  {
    tag: "On-demand",
    title: "Reducing Reporting Friction Across Teams",
    text: "A session on simplifying recurring performance reviews so teams spend less time stitching and more time deciding.",
    ctaLabel: "Watch session",
    href: "/resources/webinars",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),linear-gradient(to_bottom,#020617,#0f172a_26%,#111827_100%)]" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
            Webinars
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sample webinars for clearer growth reporting and decision support
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            This section presents sample webinar content within the Growthforge
            prototype. It is designed to make the platform world feel more
            complete, more educational, and more useful for teams exploring
            clearer growth visibility.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Webinar content shown here is illustrative and part of the sample/demo
            site experience.
          </p>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Featured Session
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Start with a flagship session on reducing reporting drag
            </h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 lg:p-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              {featuredWebinar.tag}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {featuredWebinar.title}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              {featuredWebinar.text}
            </p>
            <a
              href={featuredWebinar.href}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              {featuredWebinar.ctaLabel}
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Session Library
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Educational sessions designed to deepen the Growthforge story
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
              These sample webinars reinforce the educational side of the
              platform: connected reporting, stronger visibility, better
              prioritization, and more practical recurring decision-making.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {webinars.map((item) => (
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
                  className="mt-5 inline-flex text-sm font-medium text-blue-300 transition hover:text-blue-200"
                >
                  {item.ctaLabel} →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/[0.05] to-emerald-500/10 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore the broader Growthforge resource experience
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-7">
            Browse resources, review sample educational content, or book a demo
            to see how Growthforge connects visibility, reporting, and
            prioritization in one clearer platform story.
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