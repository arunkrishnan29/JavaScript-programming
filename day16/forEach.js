let fruits=["apple","banana","jackfruit","papaya","mango"];

fruits.forEach(upperCase);
fruits.forEach(display);

fruits.forEach(lowerCase);
fruits.forEach(display);

fruits.forEach(capatilize);
fruits.forEach(display);

function display(element){
  console.log(element);
}

function upperCase(element,index,array){
  array[index]=element.toUpperCase();
}
function lowerCase(element,index,array){
  array[index]=element.toLowerCase();
}
function capatilize(element,index,array){
  array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
