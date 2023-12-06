const d = document,
     $countDownDisplay = d.createElement("h3"),
     $fragment = d.createDocumentFragment();

$countDownDisplay.className = "count-down-display";
export default function countDown(limiteDate, message){
  console.log("Soy una cuenta regresiva");
  $fragment.appendChild($countDownDisplay);
  const date = new Date(limiteDate);
 const stopTime = setInterval(() => {
    const today = new Date(),
           limiteTime = date.getTime() - today.getTime();
let days = Math.floor(limiteTime / (1000*60*60*24)),
    hours = ("0" + Math.floor(limiteTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
    minutes = ("0" + Math.floor(limiteTime % (1000*60*60)/(1000*60))).slice(-2),
    seconds = ("0" + Math.floor(limiteTime % (1000*60)/(1000))).slice(-2);
   // console.log(limiteTime);
    // days = Math.floor((((((date.getTime() - today.getTime())/1000)/60)/60)/24));
    // hours = Math.floor(((((((date.getTime() - today.getTime())/1000)/60)/60)/24)%1)*24);
    // minutes = Math.floor(((((((((date.getTime() - today.getTime())/1000)/60)/60)/24)%1)*24)%1)*60);
    // seconds = Math.floor(((((((((((date.getTime() - today.getTime())/1000)/60)/60)/24)%1)*24)%1)*60)%1)*60);
    // if(days != 0 && hours !=0 && minutes != 0 && seconds != 0){
    // $countDownDisplay.innerText = `Felicidades, haz cumplido el tiempo esablecido`;
    // }
   $countDownDisplay.innerHTML = `Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
   if(limiteTime <= 0){
      clearInterval(stopTime);
     $countDownDisplay.innerHTML = `${message}`; 
    }
  d.querySelector(".seccion3").appendChild($fragment);
  },1000);
}
