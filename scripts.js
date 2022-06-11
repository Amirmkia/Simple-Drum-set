var kickAudio = new Audio("./audio/kick.wav");
var snareAudio = new Audio("./audio/snare.mp3");
var hiHatsAudio = new Audio("./audio/hi-hats.mp3");
var tomsAudio = new Audio("./audio/tom.mp3");
var rideAudio = new Audio("./audio/ride.mp3");
var crashAudio = new Audio("./audio/crash.mp3");
window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "v":
      kickAudio.play();
      break;
    case "g":
      snareAudio.play();
      break;
    case "h":
      hiHatsAudio.play();
      break;
    case "j":
      tomsAudio.play();
      break;
    case "k":
      tomsAudio.play();
      break;
    case "l":
      tomsAudio.play();
      break;
    case "f":
      rideAudio.play();
      break;
    case "d":
      crashAudio.play();
      break;
  }
});
