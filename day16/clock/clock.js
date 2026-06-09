
function updateClock(){

  const now= new Date();
  const hours=now.getHours();
  const minutes=now.getMinutes();
  const seconds=now.getSeconds();
  const miliSeconds=now.getMilliseconds();
  const timestring=`${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent=timestring;

}
updateClock();
setInterval(updateClock,1);