const d = document,
  w = window;

export default function smartVideo(){
const $videos = d.querySelectorAll(".smart-video");
  const cb = (entries) => {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();
      
      w.addEventListener("visibilitychange", () => {
      d.visibilityState != "visible" ? entry.target.pause() : entry.target.play();
         })
    })
  }
  const observer = new IntersectionObserver(cb, { threshold: 0.85 } );
  $videos.forEach(video => {
    observer.observe(video);
  })
}

