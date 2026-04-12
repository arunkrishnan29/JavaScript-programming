/*
3f. Display the text from 3e in a popup using alert(...);
*/

//method1

let order1=`coffee =$${5}\n`;
let order2=`bagel =$${3}\n`;
console.log(order1,order2);

let orderprice=`total price is $${5+3}`;
console.log(orderprice);


//method2 
let coffee = 5;
let bagel = 3;
let total = coffee + bagel;
console.log(total);

alert(orderprice);              // alert(); only works in browser or in html thi not alertmethod not works in nodejs

