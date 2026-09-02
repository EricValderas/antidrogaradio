

const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");
let arrayTitle =[[],[],[]];
let randomScript = 0;
let randomNumber = 0;


  function togglePlay() {

    audioElement.addEventListener(
        "ended",
        () => 
      {
        BluesFunction();
      
      },
        
      );


    if (song.paused) {
      BluesFunction();
    } else {
      song.pause();
    }
  }

  

   function BluesFunction(){
  
          randomScript = Math.floor(Math.random()*4);

          
          if(randomScript==0)
                  {
                    randomNumber = Math.floor(Math.random()*worldHour[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: worldHour[0][randomNumber],
                    artist: "Nervous Wreck Radio - Word",
                    album: "",
                    artwork: [{ src: worldHour[2][randomNumber] }],
                    
                  });
          
                   
                    audioElement.src= worldHour[1][randomNumber];
                    audioElement.play();
                    document.title = worldHour[0][randomNumber];
                    //priceDesc.innerHTML = worldHour[0][randomNumber];
                    //Portada.src = worldHour[2][randomNumber];
          
                    
          
                  }

      
                  
          if(randomScript==1)
                   {
                     randomNumber = Math.floor(Math.random()*dancingDevilsDjibuti[0].length);
                     navigator.mediaSession.metadata = new MediaMetadata({
                     title: dancingDevilsDjibuti[0][randomNumber],
                     artist: "Nervous Wreck Radio - Word",
                     album: "",
                     artwork: [{ src: dancingDevilsDjibuti[2][randomNumber] }],
                     
                   });
           
                     
                     audioElement.src= dancingDevilsDjibuti[1][randomNumber];
                     audioElement.play();
                     document.title = dancingDevilsDjibuti[0][randomNumber];
                    // priceDesc.innerHTML = dancingDevilsDjibuti[0][randomNumber];
                    // Portada.src = dancingDevilsDjibuti[2][randomNumber];
                    // nota.innerHTML = "9 / 10";
                     
           
                   
           
          }
     
            if(randomScript==2)
          {
            arrayTitle=chambacu;
            randomNumber = Math.floor(Math.random()*arrayTitle[0].length);
           
            navigator.mediaSession.metadata = new MediaMetadata({
            title: arrayTitle[0][randomNumber],
            artist: "Nervous Wreck Radio - Blues",
            album: "",
            artwork: [{  src: arrayTitle[2][randomNumber] }],  
          });
  
            audioElement.src= arrayTitle[1][randomNumber];
            audioElement.play();
            document.title = arrayTitle[0][randomNumber];
            //priceDesc.innerHTML = arrayTitle[0][randomNumber];
            //Portada.src = stringReplaceImage;
  
          }

           if(randomScript==3)
                  {
                    randomNumber = Math.floor(Math.random()*jambuAmazonia[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: jambuAmazonia[0][randomNumber],
                    artist: "Nervous Wreck Radio - World",
                    album: "",
                    artwork: [{ src: jambuAmazonia[2][randomNumber] }],
                    
                  });
                    audioElement.src= jambuAmazonia[1][randomNumber];
                    audioElement.play();
                    document.title = jambuAmazonia[0][randomNumber];
                    //priceDesc.innerHTML = jambuAmazonia[0][randomNumber];
                    //Portada.src = stringReplaceImage;
          
                  }
  
            
        }

        

  const chambacu = [
        [
         "Carino lindo - Aurita y su conjunto",
         "Chambacu - Aurita y su conjunto",
         "Eco de tambores - Aurita y su conjunto",
         "El vaquero - Aurita y su conjunto",
         "Festival en Guarare - Aurita y su conjunto",
         "Lamento de sirena - Aurita y su conjunto",
         "Las polleras - Aurita y su conjunto",
         "Me quiebro, me desbarato - Aurita y su conjunto",
         "Me siento desbaratar - Aurita y su conjunto",
         "Mompoxina - Aurita y su conjunto",
         "Puya tropicana - Aurita y su conjunto",
         "Soy la cumbia - Aurita y su conjunto",
        
        ],
        [
          "https://www.dropbox.com/scl/fi/jdnmdxq5sakj7tadhi9nd/carino-lindo.mp3?rlkey=l60q36p8sdhgq7x91peng10h2&st=hk5sl2x9&dl=1",
          "https://www.dropbox.com/scl/fi/mxmryqvjgrwfy3n9hl4zb/chambacu.mp3?rlkey=g1hypjmd8yb4cygxb8vi6iis9&st=ka6dffhd&dl=1",
          "https://www.dropbox.com/scl/fi/ulrbgxz2ov23d0dgywqcg/eco-de-tambores.mp3?rlkey=oz6ldqg1m87ep1nmymz7k85k0&st=2dx3znv2&dl=1",
          "https://www.dropbox.com/scl/fi/22a3j2yie018ow9g5wgxh/el-vaquero.mp3?rlkey=3c90kn5awaa7rmnsw3ty5xhmb&st=f8yh7l3q&dl=1",
          "https://www.dropbox.com/scl/fi/nnf1vhekrncuf0kd30zts/festival-en-guarare.mp3?rlkey=bduqe1q9ihskzringq8fhgvge&st=1iupdnkz&dl=1",
          "https://www.dropbox.com/scl/fi/icpgwlmma0zwxg36kvx9f/lamento-de-sirena.mp3?rlkey=oq93z3jlc2j6f4d5f24wvse9y&st=920tlk0s&dl=0",
          "shttps://www.dropbox.com/scl/fi/tg5wns763gc17kku7csbj/las-polleras.mp3?rlkey=tg41gfk3lbpg9y4do1u9sb447&st=ssjubmol&dl=1",
          "https://www.dropbox.com/scl/fi/35ctg9mkflz4bnf8ygp3d/me-quiebro-me-desbarato.mp3?rlkey=83gj22vpn97rnglhfout8i6k4&st=0sjtxe7o&dl=1",
          "https://www.dropbox.com/scl/fi/wfjlvx86pj6oa9n6bg43x/me-siento-desbaratar.mp3?rlkey=5pt6tm4vnssb5cg5gdred2vzx&st=gnggojbq&dl=1",
          "https://www.dropbox.com/scl/fi/r5r3yd65wphfc5q2eqwbc/mompoxima.mp3?rlkey=n8un012wvvclmlj4typ9eizx3&st=8ho86gze&dl=1",
          "https://www.dropbox.com/scl/fi/rstbejcutb3jes9v101tt/puya-tropicana.mp3?rlkey=pp1ky88lyfm4j1xv6x4q319ev&st=7ki6nu4l&dl=1",
          "https://www.dropbox.com/scl/fi/htb1wqmb8dpx8goynkoi3/soy-la-cumbia.mp3?rlkey=p9nl59bn35se6t3arslb5qd7l&st=nih8d6en&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
       
      ] 
      ];

      const worldHour = [

        [

          "Kushimoto Bushi (Cumbia) -  Minyo Crusaders",
          "Hohai Bushi (Afro) -  Minyo Crusaders",
          "Otemoyan (Reggae) -  Minyo Crusaders",
          "Mamurogawa Ondo (Beguine) -  Minyo Crusaders",
          "Yasugi Bushi (Bolero) -  Minyo Crusaders",
          "Akita Nikata Bushi (Ethiopian Groove) -  Minyo Crusaders",
          "Toichin Bushi (Afro·funk) -  Minyo Crusaders",
          "Tanko Bushi (Boogaloo) -  Minyo Crusaders",
          "Aizu Bandaisan (Latin) -  Minyo Crusaders",
          "Sumo Jinku (A capella) -  Minyo Crusaders",

          "Atochita - Ruca y El Quinde de Barbacoas",
          "El Iragüilde - Ruca y El Quinde de Barbacoas",
          "Indirita - Ruca y El Quinde de Barbacoas",
          "La Muluta - Ruca y El Quinde de Barbacoas",
          "Me Piden Currulao - Ruca y El Quinde de Barbacoas",
          "Dale Duro al Bombo - Ruca y El Quinde de Barbacoas",
          "La Brinca Brinca - Ruca y El Quinde de Barbacoas",
          "El Clavito de Pablito - Ruca y El Quinde de Barbacoas",
          "Rumba pa' Gozá - Ruca y El Quinde de Barbacoas",
          "Paz Verdadera - Ruca y El Quinde de Barbacoas",
          "A Ritmo de Caramba - Ruca y El Quinde de Barbacoas",
          "El Agua Turbia - Ruca y El Quinde de Barbacoas",
          "Alaé Alaá - Ruca y El Quinde de Barbacoas",
          "África Negra - Ruca y El Quinde de Barbacoas",

          "Un destello diferente - Lucas y Marypaz",
          "Y la mañana nace - Lucas y Marypaz",
          "Estos hilos que yo enhebro - Lucas y Marypaz",
          "Pie que danza - Lucas y Marypaz",
       
        ],
        [
       
           // Mynyo Crusaders - Echoes

        "https://www.dropbox.com/scl/fi/x34ifg0uf1sms2ltf9pew/01-minyo-crusaders-Kushimoto-Bushi-Cumbia.mp3?rlkey=zykei7eydsf99wttem0p0u8p7&st=dkmamsx0&dl=1",
        "https://www.dropbox.com/scl/fi/8ftm1h024zbmeoz12uchy/02-minyo-crusaders-Hohai-Bushi-Afro.mp3?rlkey=njbsefxogely3ozvydblryoe0&st=nywwfpzz&dl=1",
        "https://www.dropbox.com/scl/fi/r7imi25cnubqpea8poiej/03-minyo-crusaders-Otemoyan-Reggae.mp3?rlkey=vq9t4ey22i83l0bngui6mfqps&st=sg7caxc6&dl=1",
        "https://www.dropbox.com/scl/fi/euxegnf9c205s8odsk1nk/04-minyo-crusaders-Mamurogawa-Ondo-Beguine.mp3?rlkey=mjtrv0haanlr8klkwwp9wjkaj&st=62z1zc1f&dl=1",
        "https://www.dropbox.com/scl/fi/y4hpueqeiexinra1bzxkt/05-minyo-crusaders-Yasugi-Bushi-Bolero.mp3?rlkey=vhzynmb63ttblb75b9fmjt5ir&st=cb1ewin0&dl=1",
        "https://www.dropbox.com/scl/fi/ni199b4smsbux6zpirc0p/06-minyo-crusaders-Akita-Nikata-Bushi-Ethiopian-Groove.mp3?rlkey=ndt5go0fcszeg6ykeuyy4zcln&st=oa8o7iay&dl=1",
        "https://www.dropbox.com/scl/fi/5cx6bwi6ld46rlb5ifs0s/07-minyo-crusaders-Toichin-Bushi-Afro-funk.mp3?rlkey=su4xt4hkqvqmr6i0g8qejqpk1&st=41lqqfxp&dl=1",
        "https://www.dropbox.com/scl/fi/sn7no1zaldr7dqb6ujgj8/08-minyo-crusaders-Tanko-Bushi-Boogaloo.mp3?rlkey=wss4m7rfcgbcer3waygayloir&st=pla0xekl&dl=1",
        "https://www.dropbox.com/scl/fi/0bz07tpz0qzvcwv95bbqm/09-minyo-crusaders-Aizu-Bandaisan-Latin.mp3?rlkey=gxdsn6r26hx483h6l9kuuut04&st=nqpo2wf5&dl=1",
        "https://www.dropbox.com/scl/fi/p8i9ox6ymmgnm97zopon1/10-minyo-crusaders-Sumo-Jinku-A-capella.mp3?rlkey=7fwzeakoqdjg0wexgdoep6ej2&st=velrsm4i&dl=1",

        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20A%20ritmo%20de%20caramba%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Africa%20negra%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Ala%C3%A9%20ala%C3%A1%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Atochita%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Dale%20duro%20al%20bombo%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20El%20agua%20turbia%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20El%20clavito%20de%20Pablito%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20El%20irag%C3%BCilde%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Indirita%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20La%20brinca%20brinca%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20La%20muluta%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20La%20paz%20verdadera%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Me%20piden%20currulao%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",
        "https://nervouswreckradio.online/P/%C2%A1Dale%20Duro%20al%20Bombo%21%20-%20%20Ruca%20%26%20El%20Quinde%20de%20Barbacoas/BandCampDownloader.app%20-%20Rumba%20pa_%20goz%C3%A1%20-%20Ruca%20_%20El%20Quinde%20de%20Barbacoas.mp3",

      "https://nervouswreckradio.online/P/Tawa%20Muyu%20Lucas%20y%20Marypaz/tawa-muyu-lucas-y-marypaz.mp3",
      "https://nervouswreckradio.online/P/Tawa%20Muyu%20Lucas%20y%20Marypaz/tawa-muyu-lucas-y-marypaz%20%281%29.mp3",
      "https://nervouswreckradio.online/P/Tawa%20Muyu%20Lucas%20y%20Marypaz/tawa-muyu-lucas-y-marypaz%20%282%29.mp3",
      "https://nervouswreckradio.online/P/Tawa%20Muyu%20Lucas%20y%20Marypaz/tawa-muyu-lucas-y-marypaz%20%283%29.mp3",
          
          
        ],
        [
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",
          "https://nervouswreckradio.online/Img/echoesjapanmynyocrusaders.jpg",

          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",
          "https://nervouswreckradio.online/Img/rucayelquindedebarbacoas.jpg",

          "https://nervouswreckradio.online/Img/tawamuyuLucasyMaripaz.jpg",
          "https://nervouswreckradio.online/Img/tawamuyuLucasyMaripaz.jpg",
          "https://nervouswreckradio.online/Img/tawamuyuLucasyMaripaz.jpg",
          "https://nervouswreckradio.online/Img/tawamuyuLucasyMaripaz.jpg",

        ]
      ];

      const dancingDevilsDjibuti= [
        [
         "Alto's Interlude - Groupe RTD",
         "Asma Omar - Buuraha U Dheer",
         "Asma Omar - Raga Kaan Ka'Eegtow",
         "Danse Tradiotionnelle - Wiil Wille",
        "Guessod Abdo Hamargod - Kuusha Caarey",
        "Guessod Abdo Hamargod- liso Daymo",
        "Hasan Omar Housein - Uurkan Kaadonaya",
        "Hassan Omar Housein - Halkaasad Dhigi Magtiisa",
        "Hassan Omar Housein - Raani",
        "Hassan Omar Housein - Suuban",
        ],[
       
    "https://nervouswreckradio.online/P/DancingDevils/Alto's Interlude.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Asma Omar - Buuraha U Dheer.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Asma Omar - Raga Kaan Ka'Eegtow.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Danse Tradiotionnelle - Wiil Wille.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Guessod Abdo Hamargod - Kuusha Caarey .mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Guessod Abdo Hamargod- liso Daymo.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Hasan Omar Housein - Uurkan Kaadonaya .mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Hassan Omar Housein - Halkaasad Dhigi Magtiisa.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Hassan Omar Housein - Raani.mp3",
    "https://nervouswreckradio.online/P/DancingDevils/Hassan Omar Housein - Suuban.mp3",
         
      ] 
      ,[
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        "https://nervouswreckradio.online/Img/dancingdevils.jpeg",
        
      ] 
      ];

      const jambuAmazonia = [
        [
            "Lundun da yaya - Grupo da pesada",
            "Võa Andorinha - Grupo da pesada",
            "Janjão - Meu Barquinho",
            "Magalhães e Sua Guitarra - Xangô",
            "Messias Holanda - Carimbó Da Pimenta",

            "Messias Holanda - O Galo Canta, O Macaco Assovia",
            "Mestre Cupijó e Seu Ritmo - Despedida",
            "O Conjunto De Orlando Pereira - Carimbó Para Yemanjá",
            "O Conjunto De Orlando Pereira - Maruda",
            "Os Muiraquitãns - A Misturada",

            "Os Quentes de Terra Alta - Praia Do Algodoal",
            "Pinduca - Coco Da Bahia",
            "Pinduca - Pai Xangô",
            "Pinduca - Vamos Farrear",
            "Verequete e O Conjunto Uirapurú - Da Garrafa uma pinga",

            "Verequete e O Conjunto Uirapurú - Mambo Assanhado",
            "Vieira e Seu Conjunto - Lambada Da Baleia",
            "Vieira e Seu Conjunto - Melô Do Bode",
        ],
        [
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",

            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
           

            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",

            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
        ],
        [
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",

            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",

            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
            "sftp://su35864@access-5018990099.webspace-host.com/Web/Img/jambuAmazonia.jpg",
        ],
];


