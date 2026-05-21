export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (typeof gtag === "function") {
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
