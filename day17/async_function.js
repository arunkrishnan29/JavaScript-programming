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

async function doTasks() {

  try{
    const milkBroughtResult=await buyMilk();
    console.log(milkBroughtResult);

    const teaPrepresult=await makeTea();
    console.log(teaPrepresult);
    
    const teaHadResult= await teaHad();
    console.log(teaHadResult);
  }
  catch(error){
    console.error(error);
  }
}


doTasks();