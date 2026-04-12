/*3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate
the total cost, and using concatenation, create the text:
'Total cost: $_
' (hint: calculate in cents to avoid inaccuracies)
*/

let coffee = 5.99;
let bagel = 2.95;

let total = Math.round((coffee + bagel) * 100) / 100;
console.log(coffee,bagel);
console.log(total);