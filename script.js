var song = document.getElementById("mySong");
  function togglePlay() {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }