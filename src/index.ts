//function finalName(firstName: string, secondName: string){
    //return firstName+ ' '+ secondName;
//}

//console.log(finalName('Nato ', 'Das'));

// let myAge: number;
// let wifeAge: number;
 
// myAge=10;
// if(myAge>5){
//     wifeAge=8;
// }
// else
// {
//     wifeAge=2
// }


// //Array
// let numbers  =[1,4,2,6,8];
// let newNumber=numbers[2]+numbers[0];
// console.log(newNumber);


//Tuple
// let student : [number, string]=[1, 'Nato Das'];

// //Enum
// enum sizes{small=0, medium, large};
// let newSize= sizes.large;
// console.log(newSize);


// //Function that return tuple
// function FullName(): [string, number]{
//     return ['Name',1];
// }


// //Object
// let familyDetails:{
//     id:number,
//     name: string
// }={
//     id:1,
//     name:'Nato Das'
// };

// console.log(familyDetails);

// function studentDetails():string{
//     return 'This is student details';
// }


// //type alias
// type Employee={
//     id:number,
//     name: string,
// }


// let newEmployee : Employee= {
//     id:1,
//     name:'Nato Das',
// };



// //Narrowing
// function bodyDetails( weight: string | number): number {
//         if(typeof weight==='number')
//         return weight*2;
//         else 
//         return parseInt(weight)*2.2;
//     }

// //
// type studentDetails ={
//     id: number,
//     name:string,
//     phone:string
// }

// let newStudentDetails : studentDetails = {
//         id : 12,
//         name : 'nato',
//         phone: 'ui489438943'
// };

// newStudentDetails.name='skjfhkjf';




// //type object
// type Employee ={
//     id:number,
//     name:string,
//     address: string
// };


// let newEmployee : Employee={
//     id:3,
//     name:'kjdfljkls',
//     address:'ksjhdfkhs'
// };

// console.log(newEmployee);



// //Union type
// function kgToLbs(weight:string | number): number 
// {
//     if(typeof(weight)=='string')
//         return parseInt(weight)*2.2;
//     else
//         return weight*2.2;
// }



// //intersection type
// type Draggabe={
//     drag:()=> void;
// }

// type Resizable={
//     resize:()=>void;
// }

// type employeePhoto = Draggabe & Resizable;

// let newEmpPhoto : employeePhoto={
//     drag: ()=>{},
//     resize: ()=> {}
// };


// type Quantity= 100 | 50;

// let newQuantity: Quantity=100;

// type  Customer={
//     birthDay: Date
// }

// function getCustomer(id : number): Customer | null | undefined{
//     return id===null? null: {birthDay : new Date()}    

// }

// let customer =getCustomer(10);
// if(customer!==null && customer!=undefined)
// console.log(customer.birthDay);


// class Account {
//     id: number;
//     owner: string;
//     balance: number;


//     constructor(id:number, owner: string, balance: number){
//         this.id = id;
//         this.owner=owner;
//         this.balance=balance; 
//     }

//      Deposite (amount:number):void{
//         if(amount<=0)
//             throw new Error('Invalid amount');
//         this.balance+=amount; 
//     }
// }

// class Account{
//     readonly id: number;
//     owner: string;
//     private _balance: number;

//     constructor (id: number, owner: string, balance: number){
//         this.id= id;
//         this.owner=owner;
//         this._balance=balance;
//     }

//     Deposite(amount: number) :void{
//         if(amount<=0)
//             throw new Error('Amount is invilid');
//         this._balance+= amount;
//     }
// //getter
//     get balance():number{
//         return this._balance;
//     }

//     //setter
//     set balance(value : number){
//         if(value!==null)
//         this._balance=value;
//     }

// }


// let account = new Account( 10, 'Nato Das', 12000)
// account.Deposite(10);
// console.log(account.balance)




// //Parameter properties
// class Student{

//     constructor(public readonly id:number, public name:string){

//     }
// }

// let student= new Student(10,'nato das');


// //index parameter
// class indexSignature{
//      [seat: string] :string;
// }

// let newIndexSignature= new indexSignature;
// newIndexSignature.A1='Nato Das';
// newIndexSignature.A2='Rantu Das';


// //static Method
// class Ride{
//     private static _activeRide: number=0;
//     start(){Ride._activeRide++}
//     stop(){Ride._activeRide--} 

//    static get activeRide(){
//         return Ride._activeRide;
//     }
// }

// let ride = new Ride;
// ride.start();

// let ride1 = new Ride;
// ride1.start();

// console.log(Ride.activeRide);





//Inheritance
class Person{
    constructor(public firstName: string, public lastName: string){}
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }

        walk(){
            console.log('Walking...');
        }
    }

class Employee extends Person{
    constructor(id : number, firstName: string, lastName: string){
        super(firstName, lastName);
    }
}
