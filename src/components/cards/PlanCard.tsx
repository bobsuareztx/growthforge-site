import React from "react";
import Link from "next/link";
import { Plan } from "@/types/pricing";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${plan.highlighted ? "border-violet-300 bg-gradient-to-b from-violet-50 to-white shadow-xl" : plan.name === "Starter" ? "border-sky-200 bg-sky-50/40" : "border-emerald-200 bg-emerald-50/35"}`}>
      {plan.highlighted ? <div className="mb-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">Most practical starting point</div> : null}
      <div className="text-sm font-medium text-slate-500">{plan.audience}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{plan.name}</div>
      <div className="mt-5 flex items-end gap-2">
        <div className="text-5xl font-semibold tracking-tight text-slate-950">{plan.price}</div>
        <div className="pb-2 text-sm text-slate-500">{plan.billingNote}</div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{plan.description}</p>
      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm leading-7 text-slate-700">
            <span className={`mt-2 h-2 w-2 rounded-full ${plan.highlighted ? 'bg-violet-500' : plan.name === 'Starter' ? 'bg-sky-500' : 'bg-emerald-500'}`} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/get-started" className={`rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${plan.highlighted ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-950 hover:bg-slate-100"}`}>
          {plan.primaryCta}
        </Link>
        {plan.secondaryCta ? <Link href="/get-started" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">{plan.secondaryCta}</Link> : null}
      </div>
    </div>
  );
}
