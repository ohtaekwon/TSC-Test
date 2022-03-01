# 03. compileOnSave

### 3.1. compileOnSave Schema

```ts
{...,
    "compileOnSaveDefinition": {
      "properties": {
        "compileOnSave": {
          "description": "Enable Compile-on-Save for this project.",
          "type": "boolean"
        }
      }
    }
  },
  ...,
}
```

### 3.2. compileOnSave 사용법

```ts
"compileOnSave": true,
```

- ture일때, 이것은 파일을 save하면, compile한다는 의미이다. 


### 3.3. compileOnSave 

- true / false (default fasle)
- 누가??
    - Visual Studio 2015 with TypeScript 1.8.4 이상
    - atom-typescript 플러그인
        - https://github.com/TypeStrong/atom-typescript#compile-on-save