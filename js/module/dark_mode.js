const d = document,
      ls = localStorage;
let isActive = null;

export default function DarkMode(btnDarkMode, dataDark){
  const dark = d.querySelector(dataDark);
  let sun = "🌞",
      moon = "🌙";
  const darkTheme = ()=>{
      dark.classList.add("dark-mode-active");
      d.querySelector(".dark-mode-icon").innerText = sun;
      isActive = true;
      localStorage.setItem('theme', 'dark');
  }
  
  const lightTheme = ()=>{
      dark.classList.remove("dark-mode-active");
      d.querySelector(".dark-mode-icon").innerText = moon;
      isActive = false;
      localStorage.setItem('theme', 'light');
  }
  d.addEventListener("click", e => {
    if(e.target.matches(btnDarkMode) || e.target.matches(".dark-mode-icon")){
      console.log("Modo oscuro activado");
      if(!isActive){
        darkTheme();
      }
      else{
        lightTheme();
      }
    }
    
  })
  d.addEventListener("DOMContentLoaded", e => {
    if(!ls.getItem("theme"))ls.setItem("theme", "light");

    if(ls.getItem("theme") === "light")lightTheme();

    if(ls.getItem("theme") === "dark")darkTheme();
  })
}
