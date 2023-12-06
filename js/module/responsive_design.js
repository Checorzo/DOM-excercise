const d = document,
      w = window;


export default function responsive(id,matchMedia,contenidoMobil, contenidoDesktop){
let breakPoint = w.matchMedia(matchMedia);
const changeMedia = (e) => {
if(e.matches){
  // console.log(contenidoMobil);
  d.getElementById(id).innerHTML = contenidoMobil;
}
else{
  // console.log(contenidoDesktop);
  d.getElementById(id).innerHTML = contenidoDesktop;
}
}

  console.log(breakPoint.matches);
breakPoint.addListener(changeMedia)
changeMedia(breakPoint);
}
