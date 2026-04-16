import React from "react";
import { FeatureCardProps } from "@/types/cards";

export default function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-orange-500/15 to-teal-500/15" />
      <div className="text-xl font-semibold tracking-tight text-slate-950">{title}</div>
      <div className="mt-3 text-sm leading-7 text-slate-600">{text}</div>
    </div>
  );
}
