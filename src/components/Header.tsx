import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Pyeong devlog</h1>
      </Link>
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/project">PROJECT</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
