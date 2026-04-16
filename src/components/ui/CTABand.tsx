import React from "react";
import Button from "@/components/ui/Button";
import { CTAAction } from "@/types/common";

type CTABandProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
};

export default function CTABand({ eyebrow, title, text, primaryAction, secondaryAction }: CTABandProps) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-sky-500/15 via-fuchsia-500/8 to-emerald-500/15 p-8 shadow-2xl shadow-black/20 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {eyebrow}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href={primaryAction.href}>{primaryAction.label}</Button>
            {secondaryAction ? <Button variant="secondary" href={secondaryAction.href}>{secondaryAction.label}</Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
