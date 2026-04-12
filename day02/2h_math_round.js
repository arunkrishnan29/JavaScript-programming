/*
2h. Calculate the 10% tax exactly.
Hint: use Math.round()
*/

console.log("ordelist");
let orderlist={'toaster':18.50,'2shirts':7.50+7.50};
console.log(orderlist);
let orderprice=(18.50+7.50+7.50)*100;
console.log("oderprice is ");                   //using * 100 bcz computers may do mistakes in computing(arithmetic operations) float data types 

let final=orderprice/100; 
console.log("The total price before the tax and shipping added ");
console.log(final);
console.log("The total price after Math.round() used");

let final2=Math.round(final);               //rounding of numbers
console.log(final2);                    
