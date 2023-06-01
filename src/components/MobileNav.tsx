"use client";

import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isShow, setIsShow] = useState(false);

  const handleClickToggle = () => {
    setIsShow((prop) => {
      if (prop) {
        document.body.style.overflow = "overlay";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !prop;
    });
  };
  return (
    <>
      <button className="sm:hidden" onClick={handleClickToggle}>
        <AiOutlineMenu size={24} />
      </button>

      <div
        onClick={handleClickToggle}
        className={`fixed top-0 left-0 z-10 w-full h-full px-12 py-8 duration-300 ease-in-out transform bg-neutral-200 opacity-95 sm:hidden ${
          isShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button>
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-8 text-2xl font-bold">
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
      </div>
    </>
  );
}
