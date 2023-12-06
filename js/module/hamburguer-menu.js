export default function hamburguerMenu(panelBtn, panel, menuLink){
  const d = document;

  d.addEventListener("click", e =>{
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
      d.querySelector(panel).classList.toggle("active");
      d.querySelector(".icon-expand").classList.toggle("icon-close");
    } 
    if(e.target.matches(menuLink)){ 
      d.querySelector(panel).classList.add("active");
      d.querySelector(".icon-expand").classList.remove("icon-close");
      console.log("Fui presionado");
    }
  })
}
