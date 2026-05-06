import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tattu London | Modern Asian Rooftop Dining in Central London",
  description:
    "Experience Tattu London, a modern Asian restaurant and bar located at The Now Building Rooftop, Denmark Street. Discover elevated dining, signature cocktails, private hire, and immersive interiors.",
  keywords: [
    "Tattu London",
    "modern Asian restaurant London",
    "Chinese restaurant London",
    "rooftop dining London",
    "luxury restaurant London",
    "Denmark Street restaurant",
    "Tattu menu",
    "private dining London",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tattu London | Modern Asian Rooftop Dining in Central London",
    description:
      "Experience Tattu London, a modern Asian restaurant and bar located at The Now Building Rooftop, Denmark Street.",
    url: "https://tattu.co.uk/locations/tattu-london/",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattu London | Modern Asian Rooftop Dining in Central London",
    description:
      "Experience Tattu London, a modern Asian restaurant and bar located at The Now Building Rooftop, Denmark Street.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-tattu-black text-white">
        {children}
      </body>
    </html>
  );
}
