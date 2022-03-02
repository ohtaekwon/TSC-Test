# 05. file, include, exclude


### 5.1. Schema - file, include, exclude

```ts
    "filesDefinition": {
      "properties": {
        "files": {
          "description": "If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string" // string의 배열
          }
        }
      }
    },
    "excludeDefinition": {
      "properties": {
        "exclude": {
          "description": "Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        }
      }
    },
    "includeDefinition": {
      "properties": {
        "include": {
          "description": "Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        }
      }
    },
```

### 5.2. file, include, exclude

- 셋다 설정이 없으면, 전부다 컴파일 하려고 한다.
- files
    - 상대 혹은 절대 경로의 리스트 배열이다.
    - `exclude 보다 쎄다`
- include, exclude
    - glob 패턴(마치 .gitignore)
    - include
        - `exclude 보다 약하다.`
        - `*` 같은걸 사용하면, .ts/ .tsx/ .d.ts 만 include (allowJS)
    - exclude
        - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, `<outDir>` )를 default로 제외한다.
        - `<outDir>` 은 항상 제외한다.(include에 있어도)

