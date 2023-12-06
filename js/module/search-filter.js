const d = document;

export default function searchFilter(input, card){
  const cards = d.querySelectorAll(card),
    search = d.getElementById(input);
  let string ="";
  search.addEventListener("keyup", e => {
    console.log(e);
    if(search.value){
      string = search.value;
      console.log(string);
      if(e.key === "Backspace"){
        string -= e.key;
        // return string = search.value;
      }
      if(e.key === "Escape"){
        search.value = "";
        string = search.value;
      }
        cards.forEach(card => {
        if(card.textContent.toLowerCase().includes(string.toLowerCase())){
          console.log(card);
          card.classList.remove("filter");
        }else{
          card.classList.add("filter");
        }
      })
   }
console.log(search);

  })
}
