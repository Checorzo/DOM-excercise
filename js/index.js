// const $ = (selector)=>document.querySelector(selector); const $ = document.querySelector;
// const $expand = $("#expand");
// const $listContainer = $("#list-container");
// const $iconExpand = $(".icon-expand");
// let active = true;

// $expand.addEventListener("click",(event)=>{
//   console.log("Me presionaron");
//     $listContainer.classList.toggle("active");
//     $iconExpand.classList.toggle("icon-close");
//   active = !active;
//   console.log(active);
// })
const $ = document.querySelector.bind(document);
const $expand = $('expand');
import Menu from "./module/hamburguer-menu.js";
import {Reloj, alarm} from "./module/reloj.js";
import {shortcut, lienzo} from "./module/lienzo.js";
import CountDown from "./module/count-down.js";
import ButtonScroll from "./module/button_scroll.js";
import DarkMode from "./module/dark_mode.js";
import responsive from "./module/responsive_design.js";
import responsiveTaster from "./module/responseive_taster.js";
import deteccion from "./module/deteccion.js";
import mediaDevices from "./module/mediaDevices.js"
import geolocalizacion from "./module/geolocalizacion.js";
import userDevice from "./module/user_device.js"
import searchFilter from "./module/search-filter.js";
import draw from "./module/sorteo.js";
import slide from "./module/carrusel.js";
import observer from "./module/scroll-spy.js";
import smartVideo from "./module/smart-video.js";
import contactFormvalidation from "./module/validacion_formulario.js";
import textReader from "./module/text-reader.js"

const d = document,
      w = window;

d.addEventListener("DOMContentLoaded", e =>{
  
    Menu("#expand", ".list-container", "li a");
  Reloj();
  alarm();
  lienzo("seccion2");
  CountDown("Jan 9, 2024", "Feliz cumpleaños Chequin");
  ButtonScroll();
  responsive(
  "youtube",
  "(max-width: 700px)",
    `<a href=https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG7EMqC-KoLXA&index=72 traget=_blank rel=external>Ver video</a>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `);
  responsive(
  "gmaps",
  "(max-width: 700px)",
    `<a href=https://goo.gl/maps/XyghUPHka9do2Cc96?coh=178573&entry=tt traget=_blank rel=external>Ver mapa</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1490.7448137603353!2d-93.75284016933125!3d16.09123304631121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85949fda92ea0849%3A0xcc9f26011fc2626e!2sParque%20Esperanza!5e0!3m2!1ses-419!2smx!4v1684037780773!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
  responsiveTaster("responsive-taster");
  userDevice();
  searchFilter("search-filter", ".card");
  draw("#winner-btn", ".player");
  slide();
  observer();
  smartVideo();
  contactFormvalidation();
  textReader();
});

DarkMode("#dark-mode","[data-dark]");
deteccion();
mediaDevices("stream");
geolocalizacion("geo-info");
d.addEventListener("keydown", e => {
  shortcut(e);
})

// d.addEventListener("scroll", e => {
//   if(window.scrollY >= 650) {
//    return d.getElementById("button-scroll").classList.remove("active");
//   }
//    d.getElementById("button-scroll").classList.add("active");
// })

