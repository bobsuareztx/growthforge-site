import React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type PageShellProps = {
  activeNavLabel?: string;
  children: React.ReactNode;
};

export default function PageShell({ activeNavLabel = "Products", children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader activeNavLabel={activeNavLabel} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
