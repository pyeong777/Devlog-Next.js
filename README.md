# Pyeong devlog

### Next.js로 만든 개발 블로그 입니다.

## 사용한 기술스택

<div style="display:flex">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-squre&logo=JavaScript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-squre&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/nextjs-fff?style=flat-squre&logo=Next.js&logoColor=black">
<img src="https://img.shields.io/badge/TailwindCSS-blue?style=flat-squre&logo=TailwindCSS">
<img src="https://img.shields.io/badge/html-E34F26?style=flat-squre&logo=HTML5&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=flat-squre&logo=CSS3&logoColor=black">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-squre&logo=Github&logoColor=white">
</div>

## 주요 기능

- post 카테고리 분류 기능
- 반응형 웹 디자인
- Next.js App Router 기반 클라이언트 & 서버 컴포넌트 기능 활용
- SEO 최적화
- Markdown frontmatter 기반 포스트 관리
- 포스트 유효성 검증 스크립트
- 게시글 이미지 확대 보기

## 서비스 화면

![블로그1](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/5f2ee6db-4ac0-44a2-aa39-bf3f5c18aa31)
![블로그2](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/d38e9219-1d29-4948-aa42-16f65a33155d)
![블로그3](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/0fa3b156-47a5-45d6-8b80-407d7525765d)
![devlog-4](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/aae21c69-9e46-4862-a7fc-343100b4d021)
![devlog-6](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/c077b29f-e3c2-4226-99e6-489d3a118e3e)

## 서비스 페이지

<a href="https://pyeongdevlog.vercel.app/" target="_blank">Pyeong devlog</a>

## 업데이트

### 2023-06-01

- 캐러셀 컴포넌트 삭제
- 모바일용 NavBar 추가 및 컴포넌트 분리
  -> 모바일 화면에서 메뉴 아이콘 클릭 시 모달 애니메이션 추가

### 2023-06-06

- 댓글 기능 추가(giscus사용)

### 2023-06-08

- metadata og tag 추가

### 2026-05-21

- Next.js 16, React 19 기반으로 프로젝트 업그레이드
- Yarn Berry 구성을 npm 기반으로 정리하고 Vercel 빌드 설정 고정
- 포스트 메타데이터를 JSON 파일에서 Markdown frontmatter로 이전
- 포스트 생성 및 검증 스크립트 추가
- GitHub Actions CI 추가
- 게시글 이미지 클릭 확대 기능 추가
- 쿠키 배너 hydration 오류 수정
- 모바일 화면 높이/스크롤 잘림 문제 수정
- About 프로필, 경력, 기술 스택 정보 정리
- canonical, Open Graph, Twitter card, sitemap, BlogPosting JSON-LD 등 SEO 메타데이터 보강
