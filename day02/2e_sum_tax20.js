/*
2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1 / 100,
so 20% = 20 / 100 = 0.2).
*/

/*
2d. Calculate a 10% tax for the total in exercise 2c.
*/
console.log("ordelist");
let orderlist={'toaster':18.50,'2shirts':7.50+7.50};
console.log(orderlist);
let orderprice=(18.50*100+7.50*100+7.50*100);
console.log("oderprice is ");                   //using * 100 bcz computers may do mistakes in computing(arithmetic operations) float data types 
console.log(orderprice/100); 


let tax=(orderprice/100)*20/100;
console.log("20% tax is equal to ",tax);
console.log("The oder price after 10% tax added" );
let final=(tax*100)/100;
console.log(final+orderprice/100);

