console.log("hello world");
let age: number=20;

 if(age<50){
    age+=10;
    console.log(age)
}
 


 
// let numbers:number[]=[1,2,3]
// enum Size {small=1, medium, large}
// let MySize:Size=Size.medium;
// console.log(MySize)

//functions
function calculateTax(income:number, taxYear:number):number{
    
    if(taxYear<2022)
       return income;
    return income*10

}

console.log(calculateTax(2000, 2023));


//objects/type aliase

type Employee= {

    readonly id: number,
    name:string,
    retire:(date:Date)=>void

}



let employee:Employee= {

id:1, name:'Mosh',
retire:(date:Date)=>{
    console.log(date)
}
};
console.log(employee)

//union types

function kgToLbs(weight :number | string) :number {
    //narrowing
 if(typeof weight=='number')
   return weight*2;
 
else {  
    return parseInt(weight);
} 
  
}

console.log(kgToLbs(40))
console.log(kgToLbs('40kg'))

//intersection type

type Draggable= {
    drag:()=>void
}
type Resizable={
    resize:()=>void
}

type UIWidget= Draggable & Resizable

let textBox:UIWidget={
    drag:()=>{},
    resize:()=>{}
}

//literal types(exact, specific)

type Quantity=50 | 100;

let quantity:Quantity=50

console.log(quantity)

//nullable type

function greet(name:string |null |undefined){
    if (name)
      console.log(name.toUpperCase())

    else
       console.log("no name");  
}


greet(null);

//optional chaining

type customer={
   birthday:Date 
}

function getCustomer(id:number):customer |null{
    return id==0 ? null :{birthday:new Date()}
}

let customer= getCustomer(1);
//optional property access operator
console.log(customer?.birthday?.getFullYear())

//optional element access operator
//customer?.[0]
//optional call

let log: any=null;
log?.('a')