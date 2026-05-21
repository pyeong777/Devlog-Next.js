"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function MarkdownImage({ src, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="block my-6 overflow-hidden text-left"
        onClick={() => setIsOpen(true)}
        aria-label={alt}
      >
        <Image
          src={src}
          alt={alt}
          width={760}
          height={420}
          className="h-auto max-w-full transition-opacity hover:opacity-90"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute flex items-center justify-center w-10 h-10 text-2xl text-white rounded-full right-4 top-4 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-label="닫기"
          >
            ×
          </button>
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto max-w-[95vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
