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

type  Customer={
    birthDay: Date
}

function getCustomer(id : number): Customer | null | undefined{
    return id===null? null: {birthDay : new Date()}    

}

let customer =getCustomer(10);
if(customer!==null && customer!=undefined)
console.log(customer.birthDay);


