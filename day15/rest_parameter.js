// (..rest) parameter used to print the all indivudals into an one array

function sum(...numbers){

  let result = 0;
  for (let number of numbers){
    result=result+number;
  }
  return result;
}
const total= sum(1,2,3,4,5,6,7);

console.log(`your total is $${total}`);

/*Use for...of when you only need the values.
Use array.length with an index (i) when you need the position/index too
*/