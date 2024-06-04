let playerControl = document.querySelector(".playerControl");

playerControl.addEventListener("click", function () {
  let video = document.querySelector("video");
  if (video.paused) {
    video.play();
    playerControl.innerHTML = "Pause";
  } else {
    video.pause();
    playerControl.innerHTML = "Play";
  }
});
