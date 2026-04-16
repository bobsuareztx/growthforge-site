import React from "react";
import Link from "next/link";
import GrowthforgeLogo from "@/components/layout/GrowthforgeLogo";
import Button from "@/components/ui/Button";

type SiteHeaderProps = {
  activeNavLabel?: string;
};

export default function SiteHeader({ activeNavLabel = "Product" }: SiteHeaderProps) {
  const nav = ["Product", "Solutions", "Pricing", "Case Studies", "Resources", "About"] as const;
  const hrefMap: Record<(typeof nav)[number], string> = {
    Product: "/products",
    Solutions: "/solutions",
    Pricing: "/pricing",
    "Case Studies": "/resources/case-studies",
    Resources: "/resources",
    About: "/about",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <GrowthforgeLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item}
              href={hrefMap[item]}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                (item === activeNavLabel || (item === "Product" && activeNavLabel === "Products")) ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" href="/products">Explore the Platform</Button>
          <Button variant="primary" href="/get-started">Book a Demo</Button>
        </div>
      </div>
    </header>
  );
}
