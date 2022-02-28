# 02. Structural Type System vs. Nomial Type System

<br/>

### 2.1. structural type system 

- 구조가 같으면, 같은 타입이라고 취급하는 방식을 일컫는다.

```ts
// interface
interface IPerson {
  name:string;
  age:number;
  speak():string;
}

// typeAlias
type PersonType={
  name:string;
  age:number;
  speak():string;
};

// 위는 같은 구조이기 때문에 서로 대입할 수 있다.
let personInterface : IPerson = {} as any;
let personType : PersonType= {} as any;

personInterface = personType;
personType = personInterface;
```
<br/>

### 2.2. nominal type system 

- 구조가 같아도 이름이 다르면, 다른 타입이다.

```ts
// Nomial Type System
type PersonID = string & {readonly brand:unique symbol};
// PersonID 타입은 string타입이지만,
// {readonly brand:unique symbol} 형태를 intersaction한 형태이다.

function PersonID(id:string):PersonID{
  return id as PersonID;
}
function getPersonById(id:PersonID){}

getPersonById(PersonID('id-aaaaa'))
/
getPersonById('id-aaaaa'); // error
```

### duck typing
- 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.

```python
class Duck:
  def sound(self):
    print u "꽤꽦"

class Dog:
  def sound(self):
    print u "멍멍"
def get_sound(animal):
  animal.sound()
def main():
  bird=Duck()
  dog=Dog()
  get_sound(bird)
  get_sound(dog)
```

<br>

