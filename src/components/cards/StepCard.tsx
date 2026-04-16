import React from "react";

type StepCardProps = {
  index: number;
  title: string;
  text: string;
};

export default function StepCard({ index, title, text }: StepCardProps) {
  return (
    <div className="rounded-[1.9rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">{index}</div>
      <div className="text-2xl font-semibold tracking-tight text-slate-950">{title}</div>
      <div className="mt-3 text-sm leading-7 text-slate-600">{text}</div>
    </div>
  );
}
