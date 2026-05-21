---
title: 블로그 구글 검색에 뜨게 하기 with Next.js 13
description: google-site-verification metadata 설정
date: '2023-06-07'
category: seo
path: googlesearch
featured: true
image: /images/posts/googlesearch.png
---
Next.js로 개발 블로그를 만든 후 “구글 검색엔 잘 나올까?” 하고 검색을 해봤지만 안타깝게도 검색결과가 나오지 않았다. 아무도 안봐주면 의미가 없지 않을까..? 한번 나오게 해보자🙌

1. 우선 Google Search Console에 들어가서 주소를 입력합니다.

![searchconsole](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/f2c3f6ff-48f7-41ec-9e73-61efa9880a05)

2. 2번째 HTML태그 항목을 클릭해 “google-site-verification=CODE” 부분을 복사를 해줍니다.

![check2](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/e8b419c3-939c-40c4-a528-0ce6250fcd35)

3. app 디렉토리의 layout.tsx에서 verification 속성을 추가해줘서 복사한 코드를 입력해 줍니다.

```jsx
export const metadata = {
  title: {
    default: "Pyeong devlog",
    template: "Pyeong devlog | %s",
  },
  description: "Pyeong 개발 블로그",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "your code",
  },
};
```

4. 사이트맵을 만들어줘야 합니다. app 디렉토리에 sitemap.ts 파일을 만들고 아래와 같이 추가해 줍니다. 저는 about, contact를 제외한 모든 페이지를 추가했습니다.

```jsx
import { getAllPosts } from "@/service/posts";

export default async function sitemap() {
  const baseUrl = "https://pyeongdevlog.vercel.app";

  const posts = await getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.path}`,
    lastModified: post.date,
  }));
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    ...postUrls,
  ];
}
```

한번 확인을 해 봅시다. 로컬 환경에서 주소 뒤에 /sitemap.xml 을 붙여서 확인해 봅니다.
![xmlpng](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/36a54313-6fd6-40eb-b3a3-9b5ebcf0d8c4)

모든 페이지가 잘 나오는걸 확인할 수 있습니다.

5. app 디렉토리에 robots.txt를 추가해 줍니다.

```jsx
User-Agent: *
Allow: /

Sitemap: https://pyeongdevlog.vercel.app/sitemap.xml
```

6. 이렇게 추가해주고 난 뒤에 Google Search Console에서 Sitemaps 항목으로 들어갑니다.

![sitemappage](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/e330914e-661a-4ebb-9d73-2321c28ddfba)

새 사이트맵 추가에서 sitemap.xml을 입력해 제출해 줍니다.

아직 등록한지 얼마 안지나서 가져올 수 없는 상태로 뜨는데 2~3일정도 기다려 봐야겠네요..

제발 잘 되기를😞
