import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ variant = "primary", href = "#", children, className = "" }: ButtonProps) {
  const styles: Record<ButtonVariant, string> = {
    primary:
      "rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    secondary:
      "rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    ghost:
      "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  };

  return (
    <Link href={href} className={`${styles[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
