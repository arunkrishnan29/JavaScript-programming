function tossCoin() {
  return new Promise((resolve,reject) =>{
    //0=head,1=tails
    let rand = Math.floor(Math.random()*2); 
    if(rand===0)
      resolve();
    else
      reject();
      
  })
  
}
tossCoin()
.then(()=> console.log("You Won its Head"))
.catch(()=>console.log("You Lost "))