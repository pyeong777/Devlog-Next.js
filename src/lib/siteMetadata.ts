export const siteUrl = "https://pyeongdevlog.vercel.app";
export const siteName = "Pyeong devlog";
export const siteDescription = "서대평의 주니어 개발자 기술 블로그";
export const authorName = "서대평";
export const authorUrl = "https://github.com/pyeong777";
export const defaultOgImage = "/images/ogImage.png";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
