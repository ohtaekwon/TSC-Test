# 02. Structural Type System vs. Nomial Type System

<br>

### structural type system - 구조가 같으면, 같은 타입이다.

```ts
interface IPerson {
  name:string;
  age:number;
  speak():string;
}

type PersonType={
  name:string;
  age:number;
  speak():string;
};

let personInterface : IPerson = {} as any;
let personType : PersonType= {} as any;

personInterface = personType;
personType = personInterface;
```
### nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다.

```ts
type PersonID = string & {readonly brand:unique symbol};

function PersonID(id:string):PersonID{
  return id as PersonID;
}
function getPersonById(id:PersonID){}

getPersonById(PersonID('id-aaaaa'))
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

