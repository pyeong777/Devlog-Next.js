import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-4 text-sm text-center border-t border-t-gray-300">
      <p className="py-2">
        <a href="https://github.com/pyeong777" target="_blank">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </p>
      <Link href="/" className="py-2">
        <p>Pyeong devlog</p>
      </Link>
      <address className="py-2">&copy;daepyeongseo All rights reserved</address>
    </footer>
  );
}
