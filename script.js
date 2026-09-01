

const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");


  function togglePlay() {

    audioElement.addEventListener(
        "ended",
        () => 
      {
        
        song.play();
      
      },
        
      );


    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }
