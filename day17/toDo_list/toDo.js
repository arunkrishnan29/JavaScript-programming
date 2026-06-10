function add(){

  const inputElement =document.getElementById("input");

  const task =inputElement.value;

  const taskList =document.getElementById("ulist");

  const li =document.createElement("li");

  li.textContent =task;

  taskList.appendChild(li);
  erase();
}

function erase(){
  
  const inputElement =document.getElementById("input");

  inputElement.value = "";
}