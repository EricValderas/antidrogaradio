import { activemindstt } from './Discos/activemindstt.js';

var song = document.getElementById("mySong");
const audioElement = document.querySelector("audio");


  function togglePlay() {
     

    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
}


