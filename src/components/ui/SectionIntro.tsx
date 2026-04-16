import React from "react";
import { SectionIntroProps } from "@/types/common";

export default function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}
