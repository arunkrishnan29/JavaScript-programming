/*
2i. Calculate Order total at the bottom.
*/

console.log("ordelist");
let orderlist={'toaster':18.50,'2shirts':7.50+7.50};
console.log(orderlist);
let orderprice=(18.50+7.50+7.50)*100;
console.log("oderprice is ");                   //using * 100 bcz computers may do mistakes in computing(arithmetic operations) float data types 
console.log(orderprice/100); 

let tax=(orderprice/100)%10;
console.log("10% tax is equal to ",tax);
console.log("The order price after 10% tax added" );
let final=(tax*100)/100;
let final2=final+orderprice/100;
console.log(final2);

let shipping=4.99;
console.log("the total shipping price is ",shipping);
let final3=shipping+final2;
console.log("----------------");
console.log("total",final3);
