

var song = document.getElementById("myAudio");
  function togglePlay() {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }