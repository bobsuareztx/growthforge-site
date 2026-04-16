import React from "react";
import PageShell from "@/components/layout/PageShell";
import CTABand from "@/components/ui/CTABand";
import ResourceCard from "@/components/cards/ResourceCard";
import { BlogPostTemplateProps } from "@/types/templates";

export default function BlogPostTemplate(props: BlogPostTemplateProps) {
  return (
    <PageShell activeNavLabel={props.activeNavLabel ?? "Resources"}>
      <article>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.18),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(0,201,167,0.12),transparent_24%)]" /><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" /><div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85">{props.eyebrow}</div><h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">{props.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{props.description}</p><div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300"><span>{props.author}</span><span>•</span><span>{props.publishedAt}</span><span>•</span><span>{props.readTime}</span></div></div><div>{props.heroRightContent}</div></div></section>
        <section className="bg-white px-6 py-24 lg:px-8"><div className="mx-auto max-w-3xl space-y-16">{props.bodySections.map((section) => <section key={section.heading}><h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{section.heading}</h2><div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></section>)}</div></section>
      </article>
      <section className="bg-slate-50 px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><div className="mb-4 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">Related reading</div><h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Keep exploring the resource system.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Move from perspective into related articles, proof stories, and deeper content paths.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{props.relatedItems.map((item) => <ResourceCard key={item.title} {...item} />)}</div></div></section>
      <CTABand {...props.ctaBand} />
    </PageShell>
  );
}
