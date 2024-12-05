import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Light SaaS Landing Page",
  description: "Pathway to productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
