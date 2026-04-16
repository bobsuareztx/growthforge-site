import React from "react";
import PageShell from "@/components/layout/PageShell";
import SectionIntro from "@/components/ui/SectionIntro";
import CTABand from "@/components/ui/CTABand";
import Button from "@/components/ui/Button";
import ResourceHubOverviewCard from "@/components/cards/ResourceHubOverviewCard";
import FeatureCard from "@/components/cards/FeatureCard";
import { ResourcesHubPageData } from "@/data/topLevel/resourcesHub";

export default function ResourcesHubPage(props: ResourcesHubPageData) {
  return (
    <PageShell activeNavLabel={props.activeNavLabel ?? "Resources"}>
      <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.18),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(0,201,167,0.12),transparent_24%)]" /><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" /><div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85">{props.hero.eyebrow}</div><h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">{props.hero.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{props.hero.text}</p><div className="mt-10 flex flex-wrap gap-4"><Button variant="primary" href={props.hero.primaryAction.href}>{props.hero.primaryAction.label}</Button>{props.hero.secondaryAction ? <Button variant="secondary" href={props.hero.secondaryAction.href}>{props.hero.secondaryAction.label}</Button> : null}</div>{props.hero.disclosure ? <div className="mt-6 text-sm text-slate-400">{props.hero.disclosure}</div> : null}</div><div className="grid gap-4 sm:grid-cols-2">{props.hero.previewCards.map((item) => <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">Resource preview</div><div className="text-xl font-semibold text-white">{item.title}</div><div className="mt-3 text-sm leading-7 text-white/60">{item.text}</div></div>)}</div></div></section>
      <section className="bg-white px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro {...props.branchesIntro} /><div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{props.branches.map((item) => <ResourceHubOverviewCard key={item.title} {...item} />)}</div></div></section>
      <section className="bg-slate-50 px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro {...props.branchLogicIntro} /><div className="mt-14 grid gap-5 md:grid-cols-3">{props.branchLogicCards.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div></section>
      <section className="bg-white px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro {...props.whyIntro} /><div className="mt-14 grid gap-5 md:grid-cols-3">{props.whyCards.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div></section>
      <CTABand {...props.ctaBand} />
    </PageShell>
  );
}
