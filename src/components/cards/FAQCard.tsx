import React from "react";
import { FAQCardProps } from "@/types/cards";

export default function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xl font-semibold tracking-tight text-slate-950">{question}</div>
      <div className="mt-3 text-sm leading-7 text-slate-600">{answer}</div>
    </div>
  );
}
