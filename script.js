//your JS code here. If required.
const timerDisplay = document.getElementById("timer");

let currentTime = new Date();

setInterval(function(){
	currentTime=new Date();
	timerDisplay.innerHTML=currentTime.toLocaleString();
},1000);