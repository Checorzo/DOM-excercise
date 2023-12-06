const d = document,
  synth = window.speechSynthesis,
  $select = d.getElementById("language-speaker");
  let voices = [];

export default function textReader(){
  populateVoiceList();
  console.log(voices.selectedOptions);
  // console.log(selectOption);
  d.addEventListener("click", e => {
    if(e.target.matches("#speaker-button")){
    const $text = d.getElementById("speak-text"),
    utterance = new SpeechSynthesisUtterance($text.value),
    selectOption = $select.selectedOptions[0].getAttribute('data-name');
  voices.forEach(voice => {
    if(voice.name === selectOption){
      utterance.voice = voice;
    }
  })
  if($text.value){
    console.log($text.value)
    // utterance.pitch = pitch.value;
    // utterance.rate =rate.vale;
    synth.speak(utterance);
  } 
    }
  });
}
function populateVoiceList(){
  voices = synth.getVoices();

  voices.forEach(voice => {
    let option = d.createElement('option');
    option.textContent = `${voice.name} --- ${voice.lang}`;

    if(voice.default){
      option.textContent += '--DEFAULT'; 
    }

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    $select.appendChild(option);
    
  })
}
