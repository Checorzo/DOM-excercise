const d = document,
  w = window,
  n = navigator,
  div = d.createElement("div");
function isOnLine(message) {
    div.innerHTML = `<h3>${message}</h3>`;
    d.body.insertAdjacentElement("afterbegin", div);
  setTimeout(() => {
    d.body.removeChild(div);
  },2000)
}
export default function deteccion(){
  w.addEventListener("online", e => {
    div.classList.add("online");
    div.classList.remove("offline");
    isOnLine("Con conexión");
  })
  w.addEventListener("offline", e => {
    div.classList.add("offline");
    div.classList.remove("online");
    isOnLine("Sin conexión","offline");
  })
}
