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



//Narrowing
function bodyDetails( weight: string | number): number {
        if(typeof weight==='number')
        return weight*2;
        else 
        return parseInt(weight)*2.2;
    }

//
type studentDetails ={
    id: number,
    name:string,
    phone:string
}

let newStudentDetails : studentDetails = {
        id : 12,
        name : 'nato',
        phone: 'ui489438943'
};

newStudentDetails.name='skjfhkjf';
