# Tailwind-scrollbar-hide

개발 블로그 UI에 스크롤바가 없으면 좋겠다고 생각이 들어서 적용한 라이브러리이다.

```jsx
# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide

# Using pnpm
pnpm add tailwind-scrollbar-hide
```

설치 후 tailwind.config.js 파일을 수정해주자

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-color": "#12B886",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"), << 이부분을 추가 해주자
  ],
};
```

간단하게 적용하면 끝이다 🙌

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{sans.className}">
      <body className="scrollbar-hide">
        <div className="box-border flex flex-col w-full max-w-4xl mx-auto">
          <Header />
          <main className="px-4 sm:px-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );

```

[https://www.npmjs.com/package/tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)