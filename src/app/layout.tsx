import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-stack software engineer building production web platforms — offline-first pharmacy POS, supply chain and marketplace platforms. Vue/Nuxt & Next.js. Open to US / EU roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kofiboateng.online"),
  alternates: { canonical: "/" },
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Full-stack engineer",
    "Software engineer",
    "Vue",
    "Nuxt",
    "Next.js",
    "TypeScript",
    "Prince Kofi Boateng",
    "Rigelis",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description,
    url: "/",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    creator: "@Kofi__Babone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-body">
        {children}
      </body>
    </html>
  );
}
