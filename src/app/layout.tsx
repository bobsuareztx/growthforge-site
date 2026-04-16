import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Growthforge",
  description: "Growthforge starter marketing site.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
