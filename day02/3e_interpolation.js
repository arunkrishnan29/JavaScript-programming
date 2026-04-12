/*
3e. Do the same thing as 3d, but use a template string and interpolation.
*/
 

let order1=`coffee =$${5}\n`;
let order2=`bagel =$${3}\n`;
console.log(order1,order2);

let orderprice=`total price is $${5+3}`;
console.log(orderprice);