/* 
String	A text of characters enclosed in quotes
Number	A number representing a mathematical value
Bigint	A number representing a large integer
Boolean	A data type representing true or false
Object	A collection of key-value pairs of data
Undefined	A primitive variable with no assigned value
Null	A primitive value representing object absence
Symbol	A unique and primitive identifier
*/

let str1="Arun";        //string
let str2="Hari";

let num1=77;            //number
let num2=88;

let n1=190895789454715894;      //bigint
let n2=999999999999999999999,n3=847346384687546328417384; 

let bol1=true;
let bol2=false;         //boolean


let arr1=["apple","carrot","banana"];               //Array


let obj2={car:"Volvo",bike:"Yamaha",cycle:"Herculas"};      //object        (key:values)syntax

let a,b,c;           //here wwe defined a,b,c but only the a and b is defined
a=1;b=2;       
                    //the c is unndifined

x=null;
y=null;             //null

const l = Symbol("id");     //symbol
const i = Symbol("ir");
const k = Symbol("ir");

console.log(str1);
console.log(str2);

console.log(num1);
console.log(num2);

console.log(n1);
console.log(n2);
console.log(n3);


console.log(bol1);
console.log(bol2);

console.log(arr1);

console.log(obj2);
console.log(obj2.bike);


console.log(a);
console.log(b);
console.log(c);
    
console.log(x);
console.log(y);

console.log(l);
console.log(i);
console.log(k);