"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useSyncExternalStore } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_CONSENT_EVENT = "cookie_consent_changed";

function getConsentSnapshot() {
  return getLocalStorage<boolean | null>(COOKIE_CONSENT_KEY, null);
}

function getServerSnapshot() {
  return null;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
  };
}

function updateAnalyticsConsent(cookieConsent: boolean) {
  const newValue = cookieConsent ? "granted" : "denied";

  if (typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: newValue,
    });
  }
}

function saveConsent(cookieConsent: boolean) {
  updateAnalyticsConsent(cookieConsent);
  setLocalStorage(COOKIE_CONSENT_KEY, cookieConsent, 24);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export default function CookieBanner() {
  const cookieConsent = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerSnapshot
  );

  if (cookieConsent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between max-w-screen-sm gap-4 px-3 py-3 mx-auto my-10 bg-gray-700 rounded-lg shadow md:px-4 sm:flex-row">
      <div className="text-center text-white">
        <Link href="/info/cookies">
          We use <span className="font-bold text-sky-400">cookies</span> on our
          site.
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 border border-gray-500 rounded-md"
          onClick={() => saveConsent(false)}
        >
          거부
        </button>
        <button
          className="px-5 py-2 text-white bg-gray-900 rounded-md"
          onClick={() => saveConsent(true)}
        >
          쿠키 허용
        </button>
      </div>
    </div>
  );
}
