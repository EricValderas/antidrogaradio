import { activemindstt } from './Discos/activemindstt.js';

var song = document.getElementById("mySong");
const audioElement = document.querySelector("audio");


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



  /*
  function functionNext(){
  if(musicBego==false){
    if(kaaosBoolean==true){parrillaKM();}
    if(kaaosBoolean==false){parrilla();}
  }
  if(musicBego==true){parrillaBego();}
  

  if ("mediaSession" in navigator) {
       navigator.mediaSession.setActionHandler("nexttrack", () => {

        if(musicBego==false){
          if(kaaosBoolean==true){parrillaKM();}
          if(kaaosBoolean==false){parrilla();}
        }
        if(musicBego==true){parrillaBego();}
  
  });
  }

  audioElement.addEventListener(
        "ended",
        () => 
      {
        if(musicBego==false){
          if(kaaosBoolean==true){parrillaKM();}
          if(kaaosBoolean==false){parrilla();}
        }
        if(musicBego==true){parrillaBego();}
        
      
      },
        
      );


 }*/

     