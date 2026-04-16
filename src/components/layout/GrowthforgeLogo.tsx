import React from "react";

export default function GrowthforgeLogo({ small = false }: { small?: boolean }) {
  const size = small ? 32 : 40;
  const suffix = small ? "s" : "l";

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className="shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id={`gf-logo-mark-${suffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4F1F" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id={`gf-logo-teal-${suffix}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00897B" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <rect width="44" height="44" rx="11" fill={`url(#gf-logo-mark-${suffix})`} />
        <path d="M8 34 Q22 20 36 14" stroke={`url(#gf-logo-teal-${suffix})`} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.95" />
        <rect x="9" y="26" width="5" height="10" rx="2" fill="white" opacity="0.95" />
        <rect x="17" y="20" width="5" height="16" rx="2" fill="white" opacity="0.95" />
        <rect x="25" y="14" width="5" height="22" rx="2" fill="white" opacity="0.95" />
        <circle cx="37" cy="12" r="2.5" fill={`url(#gf-logo-teal-${suffix})`} />
      </svg>
      <div className="font-semibold tracking-tight text-white">
        <span className={small ? "text-base" : "text-[1.15rem]"}>Growth</span>
        <span className={small ? "text-base text-teal-400" : "text-[1.15rem] text-teal-400"}>forge</span>
      </div>
    </div>
  );
}
