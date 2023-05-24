## yarn berry + next.js + typescript 프로젝트 생성 시 import & module or type declarations 오류가 뜨는 경우

해결법

> 1. yarn set version berry
> 2. Create .yarnrc.yml file and add yarnPath: .yarn/releases/yarn-3.3.1.cjs
> 3. yarn
> 4. Install editor SDK(vscode in my case) with yarn dlx @yarnpkg/sdks vscode
> 5. Reload window with command + shift + p then 'Developer: Reload Window'

위 방법으로도 해결되지 않을경우 ->
**타입스크립트 버전을 4.4.4로 변경하면 된다.
**

참고 - https://github.com/yarnpkg/berry/issues/3722

> yarn remove typescript
> rm -rf .yarn/sdks/typescript
> yarn add -D typescript@4.4.4
> yarn dlx @yarnpkg/sdks vscode

삽질하느라 휴일 반납 :(
