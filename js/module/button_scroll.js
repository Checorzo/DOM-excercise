const d = document,
      w = window;

export default function ButtonScroll(){
  const bScroll = d.getElementById("button-scroll")
  d.addEventListener("scroll", () => {
    if( w.scrollY >= 600 ){
     bScroll.classList.remove("active");
    }else{
     bScroll.classList.add("active");
    }
  })
  d.addEventListener("click", e => {
    if(e.target.matches("#button-scroll") || e.target.matches(".arrow-up")){
  console.log(e.target);
      w.scrollTo({
        top:0,
        behavior: "smooth"
      }
      )
    }  
  })
}
