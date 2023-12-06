const d = document;
let time;

class Btn{
  name;
  id;
  clase;
  constructor(nameBtn = "",idClass = ""){
    this.name = nameBtn,
    this.id = idClass,
    this.clase = idClass 
  }
  render (){
    this.button = d.createElement("button");
    this.button.className = this.clase;
    this.button.setAttribute("id", this.id);
    this.button.textContent = this.name;
    return this.button;
  }
}
let btnRelojIniciar = new Btn("Inciar reloj", "iniciar-reloj");
/******************* funcion a exportar ******************/
export function Reloj(){
  component();
  console.log(new Btn());
  console.log(btnRelojIniciar.render());
d.addEventListener("click",e => {
  if(e.target.matches("#iniciar-reloj")){
    console.log("Reloj iniciado", e.target);
    time = setInterval(() => {
     d.querySelector(".reloj-display").textContent = new Date().toLocaleTimeString();
    }, 1000);
    e.target.disabled = true;  
  }
  if(e.target.matches("#detener-reloj")){
    console.log("Reloj detenido");
    clearInterval(time);
    d.querySelector(".reloj-display").textContent = "";
    d.getElementById("iniciar-reloj").disabled = false;
  }
     
})
}
function btnReloj(nameBtn){
const btn = d.createElement("button"),
      text = d.createTextNode(nameBtn);
  btn.appendChild(text);
  return btn;
}
function screen(value = "elije una opción"){
  const p = d.createElement("p"),
        text = d.createTextNode(value);
  p.appendChild(text);
  return p;
}

function component(){
  const fragment = d.createDocumentFragment(),
        btnStartClock = new Btn("Iniciar Reloj", "iniciar-reloj"),
        btnStopClock = new Btn("Detener reloj", "detener-reloj"),
        btnStartAlarm = btnReloj("Iniciar alarma"),
        btnStopAlarm = btnReloj("Detener alarma"),
        btnContainer = d.createElement("div"),
        p = screen();
  // btnStartClock.setAttribute("id", "iniciar-reloj");
  // btnStopClock.setAttribute("id", "detener-reloj");
  btnStartAlarm.setAttribute("id", "iniciar-alarma");
  btnStopAlarm.setAttribute("id", "detener-alarma");
  p.className = "reloj-display";
  btnContainer.appendChild(btnStartClock.render());
  btnContainer.appendChild(btnStopClock.render());
  btnContainer.appendChild(btnStartAlarm);
  btnContainer.appendChild(btnStopAlarm);
  fragment.appendChild(p);
  fragment.appendChild(btnContainer);
  const component = d.getElementById("reloj-container").appendChild(fragment);
  return component;
}
/*********************** funccion a exportar *******************************/
export function alarm(){
  let alarmTempo;
  const soundSrc = "../../assets/alarma.mp3";
  const $audio = d.createElement("audio");
  $audio.src = soundSrc;

  d.addEventListener("click", e => {
    if(e.target.matches("#iniciar-alarma")){
    console.log("Alarma iniciada");
      alarmTempo = setTimeout( () => {
         $audio.play();
         $audio.loop = true;
      }, 2000);
      e.target.disabled = true;
    }
    if(e.target.matches("#detener-alarma")){
    console.log("Alarma detenida");
      clearTimeout(alarmTempo);
      $audio.pause();
      $audio.currentTime = 0;
      d.getElementById("iniciar-alarma").disabled = false;
    }
  })
}
