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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{sans.className}">
      <body className="flex flex-col w-full mx-auto max-w-screen-2xl">
        <Header />
        <main className="px-12 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
