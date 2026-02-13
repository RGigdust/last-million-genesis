let hunterDistance = 100;

function hunterAI(){

hunterDistance -= Math.random() * 0.5;

if(hunterDistance < 20){

document.getElementById("status").innerHTML =
"Hunter Near";

}

}

setInterval(hunterAI, 1000);
