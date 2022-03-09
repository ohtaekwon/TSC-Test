class Ch06Person4{
  public name:string='Mark';
  private age!:number;

  // 접근제어자 : public , private
  // 생성자 : constructor
  public constructor(age?:number){
    if(age===undefined){
      this.age=30;
    } else{
      this.age=age;
    }
  }
  // 메서드
  public async init(){

  }
}
const ch06_p4_1:Ch06Person4=new Ch06Person4(30);
// private 접근제어자 때문에,
// age가 나오지 않는다.
// console.log(ch06_p4_1.age);