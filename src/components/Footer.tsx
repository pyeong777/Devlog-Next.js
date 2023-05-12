import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 text-sm text-center border border-t-gray-300">
      <p className="py-2">깃허브</p>
      <Link href="/" className="py-2">
        <p>Pyeong devlog</p>
      </Link>
      <p className="py-2">daepyeongseo All rights reserved</p>
    </footer>
  );
}
