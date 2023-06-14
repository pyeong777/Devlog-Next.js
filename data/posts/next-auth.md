## 1. app directory에서의 폴더 설정

아래 사진과 같이 app > api > auth > […nextauth] > rotue.ts 폴더를 만들어 줍니다.

![nextauth1](https://github.com/pyeong777/Devlog-Next.js/assets/80046065/75be3f66-7077-4167-99d5-2bb19a55883b)

## 2. route.ts 파일 설정 (구글 기준)

```jsx
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

## 3. session provider 설정

client 단에서 session 사용을 위한 컨텍스트를 만들어 주고 layout.tsx에서 랩핑해줍니다.

SessionContext.tsx

```jsx
"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode,
};

export const SessionContext = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
```

layout.tsx

```jsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <SessionContext >
          <header>
            <NavBar />
          </header>
          <main>
            {children}
          </main>
        </SessionContext >
      </body>
    </html>
  );

```

## 4. CSR 컴포넌트와 SSR 컴포넌트에서의 적용

CSR에선 useSession 훅을 사용합니다.

```jsx
const { data: session } = useSession();
```

SSR에선 getServerSession 훅을 사용합니다.

signin > page.tsx

```jsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/components/Signin"

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

//만약 로그인이 되어있는 상태여서 session이 존재한다면 무한루프를 막기위해서
//redirect를 설정해줘야 합니다.
  if (session) {
    redirect("/");
  }

//rotue.ts의 providers 옵션을 getProviders을 사용해 불러와줍니다.
  const providers = await getProviders();

  return (
    <section>
      <Signin providers={providers} />
    </section>
  );

```

Signin.tsx component

```jsx
"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import Button from ~

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function Signin({ providers }: Props) {
  return (
    <>
    //여기서 name은 'Google', id는 'google'을 나타냅니다.
      {Object.values(providers).map(({ name, id }) => (
        <Button
          key={id}
          text={`Continue With ${name}`}
          onClick={() => signIn(id)}
        />
      ))}
    </>
  );
}
```
