# 13. never

<br>

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
- 하지만, never에는 그 어떤 것도 할당할 수 없다.
- any 조차도 never 에게 할당 할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.


```ts
let a : string = 'hello';

if (typeof a !== 'string'){
  // 아무것도 할당할 수 없는 상태 : never
  a;

}
```

- 위의 결과에서는 a는 아무것도 출력할 수 없는 상태로 never가 나온다.

```ts
declare const a : string | number;

if (typeof a !== 'string'){
  a;
}
```
- 위의 결과에서 a string과 number의 union형태이기 때문에 `(string + number) - string` 인 상태이기 때문에 `number` 의 형태로 선언이 된다.


<br>
