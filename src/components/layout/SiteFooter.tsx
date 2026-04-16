import React from "react";
import Link from "next/link";
import GrowthforgeLogo from "@/components/layout/GrowthforgeLogo";

export default function SiteFooter() {
  const groups = [
    ["Product", [
      ["Products Overview", "/products"],
      ["Executive Dashboard", "/products/executive-dashboard"],
      ["SEO Dashboard", "/products/seo-dashboard"],
      ["Paid Search Dashboard", "/products/paid-search-dashboard"],
      ["Funnel & Pipeline", "/products/funnel-and-pipeline-dashboard"],
      ["Recommendations", "/products/recommendations-center"],
      ["Reporting", "/products/attribution-and-reporting-dashboard"],
    ]],
    ["Solutions", [
      ["Solutions Overview", "/solutions"],
      ["Marketing Teams", "/solutions/marketing-teams"],
      ["Sales Teams", "/solutions/sales-teams"],
      ["Revenue Operations", "/solutions/revenue-operations"],
      ["Startups & SMBs", "/solutions/startups-smbs"],
    ]],
    ["Resources", [
      ["Resources Hub", "/resources"],
      ["Case Studies", "/resources/case-studies"],
      ["Guides & Ebooks", "/resources/guides-and-ebooks"],
      ["Webinars", "/resources/webinars"],
      ["Guide", "/guide"],
      ["FAQ", "/faq"],
    ]],
    ["Company", [
      ["Home", "/"],
      ["About", "/about"],
      ["Pricing", "/pricing"],
      ["Contact", "/contact"],
      ["Comparison", "/comparison"],
      ["Integrations", "/integrations"],
      ["Book a Demo", "/get-started"],
    ]],
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-slate-900 px-6 py-16 text-white/55 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_repeat(4,0.9fr)]">
        <div>
          <GrowthforgeLogo small />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
            Growthforge is a sample/demo growth platform concept designed to unify SEO, paid search, funnel visibility,
            reporting, and recommendations in one clearer operating system.
          </p>
        </div>

        {groups.map(([heading, links]) => (
          <div key={heading}>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/35">{heading}</div>
            <div className="space-y-3 text-sm">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block rounded text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35">
        <div>© 2026 Growthforge. Illustrative product interface, fictional companies, and sample data used throughout.</div>
        <div className="flex gap-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
