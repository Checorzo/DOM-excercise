const d = document;

export default function observer(){
  const $liMenu = d.querySelectorAll(".seccion"),
    $secciones = d.querySelectorAll("section[data-scroll-spy]");
  let callback = function(entries){
    // console.log(entries);
    entries.forEach(entry => {
     console.log(entry);
     if(entry.isIntersecting){
       console.log("detectado");
       $liMenu.forEach(el =>{
         if(`#${entry.target.id}` === el.getAttribute("href")){
       console.log(`#${entry.target.id}`)
       console.log(el.getAttribute("href"))
         el.classList.add("hover");
         console.log(`Cambiar de elemento: ${el}`);
         }
        else{
           el.classList.remove("hover");
           }
        })
      }
    })
  }
    
  
  let options = {
    root: null,
     threshold: 0.5
   },
     observador = new IntersectionObserver(callback, options);
  console.log(observador);
  $secciones.forEach(el =>{
    observador.observe(el);
  })
}
