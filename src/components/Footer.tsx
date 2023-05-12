import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>깃허브</p>
      <Link href="/">
        <p>Pyeong devlog</p>
      </Link>
      <p>daepyeongseo All rights reserved</p>
    </footer>
  );
}
