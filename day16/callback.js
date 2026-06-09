// call back is used to call the certain function after a completion of another function

sum(diaplayConsole,5,7);

function sum(callback,a,b){
  let result=a+b;
  callback(result);
}
function diaplayConsole(result){
  console.log(result);
}

hello(goodbye);

function goodbye(){
console.log("Goodbye");
}
function hello(callback){
  console.log("Hello");
  callback();
}


