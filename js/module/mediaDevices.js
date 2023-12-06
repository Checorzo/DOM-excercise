const d = document,
  n = navigator;

export default function mediaDevices(id){
  const $video = d.getElementById(id),
    media = n.mediaDevices.getUserMedia({audio: false, video: true});
  if(media){
  media.then(stream => {
    console.log(stream);
    $video.srcObject = stream;
    // $video.play();
    $video.onloadedmetadata = function(e) {
    $video.play();
  };
    $video.controls = true;
  })
    .catch(err => {
      console.log(`Sucedio el siguiente error: ${err}`);
      $video.insertAdjacentHTML("beforebegin", `<h3>Sucedio el siguiente error: ${err}</h3>`);
    })
  }
}
