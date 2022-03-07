// type alias
type EatType = (food:string) => void;

// interface
interface IEat{
  (food:string):void;
}

// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index:number]:string;
}

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

// interface IPet extends PetType{}; // error
// class Pet implements PetType{}  // error

// 4. Declaration Merging - interface

interface MergingInterface{a:string;}
interface MergingInterface{b:string;}
let mi:MergingInterface;
// Merging
// mi.

// 5. Declaration Merging - type alias
type MergingType={
  a:string;
}

// type MergingType={
//   b:string;
// }
// }