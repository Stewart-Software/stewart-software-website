import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { STRUCTURED_DATA } from "@/structuredData";

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
    images: [
      {
        url: "/logos/opengraph_1200x630.png", // social share image
        width: 1200,
        height: 630,
        alt: "Stewart Software - Custom Software Development",
      },
    ],
  },
  icons: {
    icon: "/logos/logo_32x32.ico",
    shortcut: "/logos/stewartSoftwareLogoSmall.png",
    apple: "/logos/logo_180x180.png",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
