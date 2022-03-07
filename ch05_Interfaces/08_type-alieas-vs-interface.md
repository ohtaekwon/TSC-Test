# 08. type alias vs. interface

### 8.1. type alias와 interface - function

```ts
// type alias
type EatType = (food:string) => void;


// interface
interface IEat{
  (food:string):void;
}
```

### 8.2. type alias와 interface - array

```ts
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index:number]:string;
}

```

### 8.3. type alias와 interface - intersection

```ts
// intersection 

interface ErrorHandling{
  success:boolean;
  error?:{message:string};
}

interface ArtistData{
  artists:{name:string}[];
}

// type alias
type ArtistResponseType = ArtistData & ErrorHandling

// interface
interface IArtistReponse extends ArtistData, ErrorHandling{}

let art : ArtistResponseType;
let iar : IArtistReponse;

```

### 8.3. type alias와 interface - union types

```ts

// union types
interface Bird{
  fly():void;
  layEggs():void;
}

interface Fish{
  swim():void;
  layEggs():void;
}

type PetType = Bird | Fish;

interface IPet extends PetType{}; // error

class Pet implements PetType{}  // error

```

### 8.4. Declaration Merging - interface

```ts
// 4. Declaration Merging - interface

interface MergingInterface{a:string;}
interface MergingInterface{b:string;}
let mi:MergingInterface;
// Merging
// mi.

```

### 8.5. Declaration Merging - interface

```ts
// 5. Declaration Merging - type alias
type MergingType={
  a:string;
}

// error 발생
type MergingType={
  b:string;
}
```

- 위에 있기 때문에 중복되어 error 발생.