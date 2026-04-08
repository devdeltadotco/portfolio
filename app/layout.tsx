import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevDelta | Launch your MVP in 100 hours",
  description:
    "DevDelta is a fast-moving product studio for founders who need an MVP launched with clarity, speed, and senior execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full bg-background antialiased`}
      lang="en"
    >
      <body className="min-h-full bg-background text-ink">{children}</body>
    </html>
  );
}
