import { activemindstt } from './Discos/activemindstt.js';

var audio = document.getElementById("mySong");
const audioElement = document.querySelector("audio");


 function togglePlay() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }


