import React from "react";
import Link from "next/link";

type ResourceFeaturedCardProps = {
  tag?: string;
  title: string;
  text: string;
  ctaLabel?: string;
  href?: string;
  meta?: React.ReactNode;
};

export default function ResourceFeaturedCard({ tag, title, text, ctaLabel = "Read more →", href = "#", meta }: ResourceFeaturedCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {tag ? <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{tag}</div> : null}
      <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500/15 to-teal-500/15" />
      <div className="text-3xl font-semibold tracking-tight text-slate-950">{title}</div>
      <div className="mt-4 text-sm leading-7 text-slate-600">{text}</div>
      {meta ? <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">{meta}</div> : null}
      <Link href={href} className="mt-6 inline-flex rounded text-sm font-semibold text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
        {ctaLabel}
      </Link>
    </div>
  );
}
