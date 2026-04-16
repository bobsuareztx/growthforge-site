import React from "react";
import PageShell from "@/components/layout/PageShell";
import SectionIntro from "@/components/ui/SectionIntro";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/cards/FeatureCard";
import PrincipleCard from "@/components/cards/PrincipleCard";
import TeamCard from "@/components/cards/TeamCard";
import { AboutPageData } from "@/data/topLevel/about";

export default function AboutPage(props: AboutPageData) {
  return (
    <PageShell activeNavLabel={props.activeNavLabel ?? "About"}>
      <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(251,146,60,0.18),transparent_26%),radial-gradient(circle_at_82%_15%,rgba(14,165,233,0.16),transparent_25%),radial-gradient(circle_at_55%_82%,rgba(16,185,129,0.12),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
              {props.hero.eyebrow}
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {props.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{props.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" href={props.hero.primaryAction.href}>{props.hero.primaryAction.label}</Button>
              {props.hero.secondaryAction ? <Button variant="secondary" href={props.hero.secondaryAction.href}>{props.hero.secondaryAction.label}</Button> : null}
            </div>
            {props.hero.disclosure ? <div className="mt-6 text-sm text-slate-400">{props.hero.disclosure}</div> : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {props.hero.previewCards.map((item, index) => (
              <div key={item.title} className={`rounded-[1.75rem] border p-6 backdrop-blur-sm ${index === 0 ? 'border-sky-400/20 bg-sky-400/10' : index === 1 ? 'border-amber-400/20 bg-amber-400/10' : index === 2 ? 'border-emerald-400/20 bg-emerald-400/10' : 'border-fuchsia-400/20 bg-fuchsia-400/10'}`}>
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">About preview</div>
                <div className="text-xl font-semibold text-white">{item.title}</div>
                <div className="mt-3 text-sm leading-7 text-white/70">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...props.principlesIntro} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">{props.principles.map((item) => <PrincipleCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-orange-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...props.framingIntro} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">{props.framingCards.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><SectionIntro {...props.teamsIntro} /></div>
          <div className="grid gap-4 sm:grid-cols-2">{props.teams.map((item) => <TeamCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-sky-50/40 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro {...props.whyIntro} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">{props.whyCards.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <CTABand {...props.ctaBand} />
    </PageShell>
  );
}
