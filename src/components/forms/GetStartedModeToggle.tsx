import React from "react";
import { GetStartedMode } from "@/types/forms";
import { getStartedModeOptions } from "@/data/forms/getStartedForm";

type GetStartedModeToggleProps = {
  value: GetStartedMode;
  onChange: (mode: GetStartedMode) => void;
};

export default function GetStartedModeToggle({ value, onChange }: GetStartedModeToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1">
      {getStartedModeOptions.map((option) => {
        const isActive = option.value === value;
        return (
          <button key={option.value} type="button" onClick={() => onChange(option.value)} className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive ? "bg-slate-950 text-white shadow" : "text-slate-600 hover:text-slate-950"}`} aria-pressed={isActive}>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
