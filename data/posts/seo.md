**html을 이용해 검색엔진에 잘 노출될수 있도록 만들 수 있다.
그동안 중요하게 생각하지 않았던 요소와 속성을 활용해서 검색엔진 도달률을 높일수 있다.**

## SEO에 영향을 주는 요인

> **Meta Description
> page title**
> 검색 결과 페이지(SERP) 노출 대비 클릭율
> 백링크(backlink): 다른 웹 페이지로부터 인용(링크)되는 횟수
> 도메인 권력(Domain authority): 검색 결과 페이지 순위 예측 점수
> 로딩 속도
> SSL(https) 사용여부
> 콘텐츠 양, 질, 개연성
> 사용자 경험

html로 우리가 다룰수있는건 page title과 meta description 이다.

## page title

사이트의 제목만 노출하기 보다 아래 처럼 현재 페이지에 대한 자세한 카테고리를 같이 노출하게 하면 더욱 좋다.
![](https://images.velog.io/images/sdp1123/post/1ba0e0eb-aa63-41c4-b9f1-21465595f285/KakaoTalk_20211130_062503523.png)

> 1. 본문을 가장 잘 설명하는 키워드 중심으로 설정
> 2. 페이지마다 구체적이고 고유한 키워드 사용
> 3. 반복하는 키워드는 최소화
> 4. 가능한 짧고 간결하게 작성
> 5. 구체적인 키워드는 앞으로 배치

### page title - 구분자

> 대시(-), 파이프(|), 콜론(:)을 추천.
> Page title - Site name
> Page title | Site name
> Page title : Site name

---

## Meta description

```
<html lang="ko">
<head>
    <meta charset="utf-8>
    <meta name="description" content="A description of the page">
    <meat name="viewport" content="width=device-width, initial-scale=1">
    <title>Page title - Site name</title>
</head>
</html>
```

> **lang="ko"** : 한글 컨텐츠로 되어 있는 사이트라면 ko를 기본으로 설정
> **charset="utf-8"**: 인코딩 방식으로 uft-8이 기본 설정
> **description** : 검색결과에서 페이지를 방문하지 않고도 어떤 페이지인지 알수 있도록 정보를 제공해준다.
> **viewport** : 뷰포트의 너비가 웹 사이트를 보고있는 장치와 동일하다는 것을 정의
> **title** : 페이지 제목

![](https://images.velog.io/images/sdp1123/post/5c1a99c6-2695-4006-ac89-55f403b59300/KakaoTalk_20211130_064044572.png)

위 사진처럼 당근마켓을 검색했을때, 해당 페이지에 들어가지 않고도 어떤 페이지인지 알려주는 설명이 나와있다.

### Naver 검색엔진

![](https://images.velog.io/images/sdp1123/post/c003b5c1-e626-451a-be9b-985f7ca8b786/KakaoTalk_20211130_064231867.png)

네이버에서 검색했을 때, 사이트 연관채널이 노출되게 할 수 있다.
JSON-LD 와 Microdata로 구현할 수 있다.

#### JSON-LD

```
<script type="application/ld+json">
{
 "@context": "http://schema.org",
 "@type": "Person",
 "name": "My Site Name",
 "url": "http://www.mysite.com",
 "sameAs": [
   "https://www.facebook.com/myfacebook",
   "http://blog.naver.com/myblog",
   "http://storefarm.naver.com/mystore"
 ]
}
```

이 script태그는 body태그 종료 직전에 넣는걸 권장한다.

#### Microdata

```
<span itemscope="" itemtype="http://schema.org/Organization">
<link itemprop="url" href="http://www.mysite.com">
<a itemprop="sameAs" href="https://www.facebook.com/myfacebook"></a>
<a itemprop="sameAs" href="http://blog.naver.com/myblog"></a>
<a itemprop="sameAs" href="http://storefarm.naver.com/mystore"></a>
</span>
```

---

### Facebook & Twitter 노출 결과 설정

- **Facebook**

```
<meta property="og:url" content="https://*.html">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://*.jpg">
```

- **twitter**

```
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://*.jpg">
```

head태그 안에 설정해서 페이스북과 트위터 노출 결과를 설정할 수 있다.
