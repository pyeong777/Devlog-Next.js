import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-4">
      <Link href="/">
        <h1 className="text-xl">Pyeong devlog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">HOME</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/project">PROJECT</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
