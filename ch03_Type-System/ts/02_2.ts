// Nomial Type System
type PersonID = string & {readonly brand:unique symbol};
// PersonID 타입은 string타입이지만,
// {readonly brand:unique symbol} 형태를 intersaction한 형태이다.

function PersonID(id:string):PersonID{
  return id as PersonID;
}
function getPersonById(id:PersonID){}

getPersonById(PersonID('id-aaaaa'))
// 그냥 일반적인 문자열을 넣으면 에러가 발생한다.
getPersonById('id-aaaaa'); // error