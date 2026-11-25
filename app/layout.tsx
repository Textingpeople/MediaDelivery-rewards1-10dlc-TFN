import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loyaltyperkshub.com"),
  title: "Loyalty Perks Hub — Employee Recognition & Rewards",
  description: "Loyalty Perks Hub is an employee recognition and rewards platform employers use to celebrate milestones, peer shout-outs and team wins.",
  keywords: "employee recognition, employee rewards, workplace culture, team engagement, peer shout-outs",
  openGraph: {
    title: "Loyalty Perks Hub — Employee Recognition & Rewards",
    description: "Loyalty Perks Hub is an employee recognition and rewards platform employers use to celebrate milestones, peer shout-outs and team wins.",
    url: "https://loyaltyperkshub.com",
    siteName: "Loyalty Perks Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Loyalty Perks Hub — Employee Recognition & Rewards",
    description: "Loyalty Perks Hub is an employee recognition and rewards platform employers use to celebrate milestones, peer shout-outs and team wins.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
