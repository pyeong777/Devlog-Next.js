import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-8">
      <Link href="/">
        <h1 className="text-xl font-bold">&#60;Pyeong devlog &#47;&#62;</h1>
      </Link>
      <div className="flex items-center">
        <nav className="hidden sm:block">
          <Link className="px-2" href="/">
            HOME
          </Link>
          <Link className="px-2" href="/blog">
            BLOG
          </Link>
          <Link className="px-2" href="/about">
            ABOUT
          </Link>
          <Link className="px-2" href="/contact">
            CONTACT
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
