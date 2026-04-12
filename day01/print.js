let x=5,y=10,z=20;

console.log(x);
console.log(y);
console.log(z);
x=21;               //redeclearing in let is allowed
console.log(x);

console.log(x + y + z);

const a=55,b=100,c=200;
console.log(x);          //redeclearing in const is not allowed

var i=99;
var i=88;
console.log(i);         //redeclearing in var is allowed

let t = 2;   // Allowed

{
    let t = 3;   // Allowed
    console.log(t);

}

{
    let t = 4;    // Allowed
    console.log(t);
}

console.log(t);

let e=10;
f=e+1;
console.log(f);