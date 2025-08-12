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
  title: "Stewart Software - MVPs & Custom Apps for Startups",
  description:
    "Stewart Software turns ideas into launch-ready products. We design and build scalable MVPs and custom software for startups and small businesses, with a focus on speed, quality, and user experience.",
  keywords: [
    "custom software",
    "MVP development",
    "startup app development",
    "product development",
    "software prototyping",
    "full-stack development",
    "web app development",
    "SaaS development",
    "freelance software engineer",
    "business software solutions",
  ],
  authors: [{ name: "Stewart Software" }],
  creator: "Stewart Software",
  publisher: "Stewart Software",
  openGraph: {
    title: "Launch Your Product with Stewart Software",
    description:
      "MVPs and custom software built fast, built right, and built for growth.",
    type: "website",
    siteName: "Stewart Software",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
