import React from "react";
import Link from "next/link";

type ResourceCardProps = {
  tag?: string;
  title: string;
  text: string;
  ctaLabel?: string;
  href?: string;
  meta?: React.ReactNode;
};

export default function ResourceCard({ tag, title, text, ctaLabel = "Read more →", href = "#", meta }: ResourceCardProps) {
  return (
    <div className="rounded-[1.85rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {tag ? <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{tag}</div> : null}
      <div className="mb-5 h-11 w-11 rounded-2xl bg-gradient-to-br from-orange-500/15 to-teal-500/15" />
      <div className="text-2xl font-semibold tracking-tight text-slate-950">{title}</div>
      <div className="mt-3 text-sm leading-7 text-slate-600">{text}</div>
      {meta ? <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">{meta}</div> : null}
      <Link href={href} className="mt-6 inline-flex rounded text-sm font-semibold text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
        {ctaLabel}
      </Link>
    </div>
  );
}
