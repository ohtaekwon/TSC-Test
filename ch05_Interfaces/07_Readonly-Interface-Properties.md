# 07. Readonly Interface Properties

### 7.1. Readonly

```ts
interface Person8{
  name:string;
  age?:number;
  readonly gender:string;
}

const p81:Person8={
  name:"oh tae kwon",
  gender: "male",
};

// 오류가 발생한다.
p81.gender="female"; 

```

#### 7.2. readonly 가 제거된 경우

```ts
interface Person8{
  name:string;
  age?:number;
  gender:string;
}

const p81:Person8={
  name:"oh tae kwon",
  gender: "male",
};

// 오류가 발생하지 않는다.
p81.gender="female";
```

- 따라서, 한번 만들어지고 바뀌지 않는 값이라면 항상 `readonly`를 붙여주는 것이 좋다.