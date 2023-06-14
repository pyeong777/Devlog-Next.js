```jsx
$ yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]

Error: Command failed with exit code 1 (EPERM): yarn install --check-files
```

pnp가 빈번하게 오류를 많이 일으키는거 같아서 버전을 낮춰버림

## 해결

1. yarn set version classic
2. .yarnc.yml 파일 nodeLinker: node-modules 추가 후 yarn install

```jsx
nodeLinker: node-modules
yarnPath: .yarn/releases/yarn-1.22.19.cjs
```

1. yarn create 실행(google)

```jsx
yarn create sanity@latest -- --template get-started --project psex8edq --dataset production --provider google
```

## Tailwind 관련 에러

```jsx
[vite] Internal server error: [postcss] Cannot read properties of undefined (reading 'config')
  Plugin: vite:css
```

Tailwind.config.js 파일 생성 시 해결
