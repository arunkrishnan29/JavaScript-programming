function buyMilk(){

  return new Promise((resolve,reject)=>{
  setTimeout(()=> {
    const milkBrought=true;

    if(milkBrought){
    resolve("Brought the Milk");
    }
    else{
    reject("Milk is not Brought");
    }
  },500);
  });
}

function makeTea(){

  return new Promise((resolve,reject)=>{
  setTimeout(()=> {
    const teaPrep=false;
    if(teaPrep){
      resolve("Tea have Prepared");}
    else{
      reject("Tea have not Prepared");
    }
  },2000);
  });
}

function haveTea(){

  return new Promise((resolve,reject)=>{
  setTimeout(()=> {
    const teaHad=true;
    if(teaHad){
      resolve ("Had a Tea");}
    else{
      reject("Haven't had Tea");
    }
  },1500);
  });
}

buyMilk().then(value => {console.log(value); return makeTea()}).then(value =>{console.log(value);return haveTea()}).then(value => {console.log(value);console.log("You have completed all the tasks ")})
.catch(error => console.error(error));



//change the true/false values to see the diiffrentresut
