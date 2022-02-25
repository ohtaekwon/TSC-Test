# 06. compileOptions - typeRoots, types


<br>

### 6.1 compileOptions : type


```ts
            "typeRoots": {
              "description": "Specify multiple folders that act like `./node_modules/@types`.",
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "string"
              },
              "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
            },
            "types": {
              "description": "Specify type package names to be included without being referenced in a source file.",
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "string"
              },

```

### 6.2. @types

- TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
- 아무 설정을 안하면?
    - `node_modules/@types` 라는 모든 경로를 찾아서 사용
- `typeRoots` 를 사용하면?
    - 배열 안에 들어있는 경로들 아래서만 가져온다.
- `types` 를 사용하면?
    - 배열 안의 모듈 혹은 `./node_modules/@types/` 안의 모듈 이름에서 찾아온다.
    - [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것이다.
- `typeRoots` 와 `types` 를 같이 사용하지 않는다.