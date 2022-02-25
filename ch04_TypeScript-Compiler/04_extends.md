# 04. extends

- extends는 보통 상속할때 쓰는 키워드

<br>

### 4.1. extends의 scehma

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

### 4.2. extends

- 파일(상대)경로명 : string
- TypeScript 2.1 New Spec

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

npm install --save-dev @tsconfig/deno


```ts
{
  "extends":"@tsconfig/deno/tsconfig.json",
}

```