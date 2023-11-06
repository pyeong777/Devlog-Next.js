import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { Metadata } from "next";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pyeong devlog",
    template: "Pyeong devlog | %s",
  },
  description: "Pyeong 개발 블로그",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "eTnvbkwj_4WwczBiML0PIcRuXvA7Mu3MQ8etSZU__pc",
  },
  openGraph: {
    title: "Pyeong devlog",
    description: "Pyeong 개발 블로그",
    type: "website",
    locale: "ko_KR",
    url: "https://pyeongdevlog.vercel.app/",
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: "/images/ogImage.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-FMLGZTY14X" />
      <body className="scrollbar-hide">
        <div className="box-border flex flex-col w-full max-w-4xl mx-auto">
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
