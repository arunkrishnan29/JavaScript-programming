/*. Your bank account has $100, you spend $20 on lunch, $50 on dinner,
and earn $200 from your job. Calculate how much money you have.*/

let initbal=100;
console.log("initial bank balance");
console.log(initbal);

let spent=initbal-20-50;
console.log("spent");
let spentdata={Lunch:20,dinner:50};
console.log(spentdata);
console.log("Balance==");
console.log(spent);

let earn=initbal+200;
console.log("earn");
let earndata={Job:200};
console.log(earndata);
console.log("Balance==");
console.log(earn);
