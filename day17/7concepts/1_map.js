//Exercise 1 , Use map to convert each Celsius value to Fahrenheit. Formula: (C * 9/5) + 32

const temps = [28, 35, 40, 22, 31];

const result =temps.map((t)=>{
    return (t*9/5+32);
});
console.log(result);

//Exercise 2 , Use map to extract just the names into a new array.

const students = [
    { name: "Arun", score: 78 },
    { name: "Priya", score: 91 },
    { name: "Karan", score: 65 }
];
const result2=students.map((std)=>{
  return (std.name);
});

console.log(result2);

//Exercise 3 , Use map on the same students array to create a new array where each item is a string like: "Arun scored 78"

const result3=students.map((std)=>{
  return (`${std.name} scored ${std.score}`);
});

console.log(result3);