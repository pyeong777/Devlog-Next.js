import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{sans.className}">
      <body className="scrollbar-hide">
        <div className="box-border flex flex-col w-full max-w-4xl mx-auto">
          <Header />
          <main className="px-4 sm:px-12 grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
