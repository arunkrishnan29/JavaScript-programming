/*
3k. Using interpolation, create the first line
of text (use math to calculate the numbers 4 and 57.88).

3l. Create second line of text: 'Shipping & handling: $9.98' (use math).

3m. Create third line: 'Total before tax: $67.86' (use math).

3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math
and Math.round(...); to calculate the exact number).

- Finish: change the cart back to 1 basketball, 1 t-shirt (both free shipping).

*/
let order1 = 4;
let order2 = 57.88;
let shipping = 9.98;

// Step 1: items total
let itemsTotal = Math.round((order1 + order2) * 100) / 100;

// Step 2: total with shipping
let totalWithShipping = Math.round((itemsTotal + shipping) * 100) / 100;

// Step 3: tax (10%)
let tax = Math.round(totalWithShipping * 0.10 * 100) / 100;

// Step 4: final price
let finalPrice = Math.round((totalWithShipping + tax) * 100) / 100;

console.log(`
order1 = $${order1}
order2 = $${order2}

Items Total = $${itemsTotal}
Shipping = $${shipping}

Total after shipping = $${totalWithShipping}
Tax (10%) = $${tax}

Final Price = $${finalPrice}
`);