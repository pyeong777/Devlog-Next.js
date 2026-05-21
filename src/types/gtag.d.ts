type GtagConsentValue = "granted" | "denied";

declare function gtag(
  command: "config",
  targetId: string,
  config?: {
    page_path?: string;
    page_title?: string;
    page_location?: string;
    send_page_view?: boolean;
  }
): void;

declare function gtag(
  command: "consent",
  consentArg: "default" | "update" | string,
  consentParams: {
    analytics_storage?: GtagConsentValue;
    ad_storage?: GtagConsentValue;
    [key: string]: GtagConsentValue | undefined;
  }
): void;
