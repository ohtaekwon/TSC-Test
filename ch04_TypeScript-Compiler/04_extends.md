# 04. extends

- extends는 보통 상속할때 쓰는 키워드

### 4.1. extends의 schema

```ts
    "extendsDefinition": {
      "properties": {
        "extends": {
          "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
          "type": "string"
        }
      }
    },

```
- 상속을 받아올 부모 설정에 path를 받아온다.

### 4.2. extends

```ts
// in PROJECT/base.json
{
  "compilerOptions":{
    "strict":true
  }
}

// in PROJECT/tsconfig.json
{
  "extends":"./base.json",
}
```

- 파일(상대)경로명 : string
- TypeScript 2.1 New Spec


### 4.3. 공식적인 tsconfig

- 터미널
`npm install --save-dev @tsconfig/deno`


- tsconfig

```ts
{
  "extends":"@tsconfig/deno/tsconfig.json",
}
```