//Exercise 1: Find the order with id 103

const orders = [
    { id: 101, product: "Keyboard", status: "delivered", amount: 1500 },
    { id: 102, product: "Mouse", status: "pending", amount: 800 },
    { id: 103, product: "Monitor", status: "delivered", amount: 12000 },
    { id: 104, product: "Webcam", status: "cancelled", amount: 2500 },
    { id: 105, product: "Headset", status: "pending", amount: 3200 }
];
const deliveredStatuses = ["delivered", "completed"];

const result1=orders.find((i) => {return i.id===103});

console.log(result1);

//Exercise 2: Find the first order with status "pending".

const result2= orders.find((i) => {
  return (i.status ==="pending");
});

console.log(result2);

//Exercise 3: Check if deliveredStatuses includes "pending". Then check if it includes "delivered". Log both results.

const result3=deliveredStatuses.includes("pending");
const result3_1=deliveredStatuses.includes("delivered");

console.log(result3);
console.log(result3_1);

//Exercise 4 (combine): Find the order with id 104. If it exists, log its product name and amount as a template literal. If it doesn't exist, log "Order not found".

const result4= orders.find(order=> order.id===104);

  if (result4){
    console.log(`Product: ${result4.product}.Amount: ${result4.amount}`);
  }
  else{
    console.log("order not found");
  }


