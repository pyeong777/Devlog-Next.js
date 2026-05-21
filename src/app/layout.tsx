import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { Metadata } from "next";
import {
  authorName,
  authorUrl,
  defaultOgImage,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/siteMetadata";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `${siteName} | %s`,
  },
  description: siteDescription,
  keywords: ["개발 블로그", "Next.js", "React", "PDF Toolkit", "접근성 PDF"],
  authors: [{ name: authorName, url: authorUrl }],
  creator: authorName,
  publisher: authorName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: "eTnvbkwj_4WwczBiML0PIcRuXvA7Mu3MQ8etSZU__pc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName,
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: defaultOgImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={sans.className}>
      <body className="scrollbar-hide">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-FMLGZTY14X" />
        <div className="box-border flex flex-col w-full min-h-dvh max-w-4xl mx-auto">
          <Header />
          <main className="px-4 sm:px-12 grow">
            {children} <CookieBanner />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
