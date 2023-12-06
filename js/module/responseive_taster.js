const d = document;
/*
 *Para este ejercicios se necesita manipular el BOM
 *Usamos llos metodos open y close de el objeto window
 */ 

export default function responsiveTaster(form) {
  const $form = d.getElementById(form),
    url = $form.direccion.value,
    width = $form.ancho.value,
    height = $form.alto.value;
  let taster;
  d.addEventListener("submit", e => {
    if(e.target === $form){
      e.preventDefault();
      taster = window.open(url,"taster", `innerWidth=${width}`, `innerHeight=${height}`)
      //Al metodo open se le pasa un argumento para darle nombre de la ventana
      //El metodo devuelve la referencia a la ventana abierta
    }
  });

  d.addEventListener("click", e => {
    if(e.target === $form.cerrar)taster.close();
  });
  
}
