//Exercise 1: Filter only active employees.

const employees = [
    { name: "Arun", dept: "Finance", salary: 55000, active: true },
    { name: "Priya", dept: "Tech", salary: 82000, active: true },
    { name: "Karan", dept: "Finance", salary: 47000, active: false },
    { name: "Sneha", dept: "Tech", salary: 91000, active: false },
    { name: "Raj", dept: "HR", salary: 38000, active: false }
];

const result1=employees.filter((employe) => {
  return employe.active
});
console.log(result1);

//Exercise 2: Filter employees with salary above 50000.

const result2=employees.filter((employe) => {
  return employe.salary>50000
});
console.log(result2);

//Exercise 3: Filter only active employees from the Tech department. (Two conditions — use &&)

const result3=employees.filter((employe) => {
  return (employe.active && employe.dept==="Tech")
});
console.log(result3);

//Exercise 4 (chain): From the active employees, extract just their names using map after filter.

/*const result4=result1.map((n)=>{
  return n.name;
});
*/
const result4 = employees
    .filter(employee => employee.active)
    .map(employee => employee.name);


console.log(`Active Employee names = ${result4}`);