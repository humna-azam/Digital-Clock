setInterval(function(){
let currentDate =new Date();
let time = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
console.clear();
console.log(time);
document.getElementById("display").innerText = time},1000);