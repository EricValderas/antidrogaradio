
document.getElementById("next").onclick = function() {  functionNext(); };  

const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");
let arrayTitle =[[],[],[]];
let randomScript = 0;
let randomNumber = 0;
let musicBego = false;
let kaaosBoolean = false;
let Portada = document.getElementById("portada");
let priceDesc = document.getElementById('price');

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


 }

  function parrillaKM(){};
  function parrillaBego(){};

  function parrilla(){
    BluesFunction();
  };


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
                    priceDesc.innerHTML = worldHour[0][randomNumber];
                    Portada.src = worldHour[2][randomNumber];
          
                    
          
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
                     priceDesc.innerHTML = dancingDevilsDjibuti[0][randomNumber];
                     Portada.src = dancingDevilsDjibuti[2][randomNumber];
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
            priceDesc.innerHTML = arrayTitle[0][randomNumber];
            Portada.src =  arrayTitle[2][randomNumber];
  
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
                    priceDesc.innerHTML = jambuAmazonia[0][randomNumber];
                    Portada.src = jambuAmazonia[2][randomNumber];
          
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

        "https://www.dropbox.com/scl/fi/jpapasmf58rgkl093k902/BandCampDownloader.app-A-ritmo-de-caramba-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=3763cgitpb2ka9hb2puvy7aaq&st=0edvnqv2&dl=1",
        "https://www.dropbox.com/scl/fi/v10i9bv6fp9flakafclnt/BandCampDownloader.app-Africa-negra-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=6ktxjt9uq3e5wgil7pq6upo72&st=0439ivcj&dl=1",
        "https://www.dropbox.com/scl/fi/vju0u18s4daqquxx01c3m/BandCampDownloader.app-Ala-ala-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=m9sj0jdu7twc8v0mm3t5299kv&st=8iwhjqn9&dl=1",
        "https://www.dropbox.com/scl/fi/jsb6sq2p29il6nlc0xx20/BandCampDownloader.app-Atochita-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=00qc7xxu9bgmprjh269mwpjc1&st=xw5cmgjk&dl=1",
        "https://www.dropbox.com/scl/fi/mpcam0b6tma6njkah2fhi/BandCampDownloader.app-Dale-duro-al-bombo-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=0gmjhv9fbgsqloc53glwa0zat&st=vc7wm7x5&dl=1",
        "https://www.dropbox.com/scl/fi/hispj7cizthzah8zu3asj/BandCampDownloader.app-El-agua-turbia-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=06qirderoajoluia3qtw7yqgg&st=d0054pk4&dl=1",
        "https://www.dropbox.com/scl/fi/hayqpwhui9wwxrhb82pr6/BandCampDownloader.app-El-clavito-de-Pablito-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=wzs5kznlv2kb286jvor7ji4gk&st=4i8k3iw0&dl=1",
        "https://www.dropbox.com/scl/fi/4g1z5njyfv6xr0gcflnfw/BandCampDownloader.app-El-irag-ilde-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=jq8rmwrd55y8egneo55jizpyt&st=q5xebubf&dl=1",
        "https://www.dropbox.com/scl/fi/9i1s7au1hss5n5twarcce/BandCampDownloader.app-Indirita-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=abyhnebctxhj5zbwt6jmvvnmq&st=9fj2us2i&dl=1",
        "https://www.dropbox.com/scl/fi/ze713y0oi59osdefo2ub7/BandCampDownloader.app-La-brinca-brinca-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=qvif3nf76p2kaajsyjzk6plhb&st=520z9d7x&dl=1",
        "https://www.dropbox.com/scl/fi/apkp4a7n3x6rw2a2rrebe/BandCampDownloader.app-La-muluta-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=dysrtsel0t9449wvstp21bn3a&st=4ezi1xz3&dl=1",
        "https://www.dropbox.com/scl/fi/am7uvdi3fgh84c2nf33wi/BandCampDownloader.app-La-paz-verdadera-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=znek5yjff0g2qjsmkr9cm9aos&st=y7lzts2l&dl=1",
        "https://www.dropbox.com/scl/fi/fkh9lftmslfxozedlac1z/BandCampDownloader.app-Me-piden-currulao-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=xufaiomsux861xjlkx0gws79f&st=59rp1sr4&dl=1",
        "https://www.dropbox.com/scl/fi/7gsww907bshb9jgrg2sw3/BandCampDownloader.app-Rumba-pa_-goz-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=mmz65awbh0ag3spkv11irylqn&st=3bqijfsb&dl=1",

      "https://www.dropbox.com/scl/fi/65mu38q1226w2clxju3gz/01-Lucas-y-Marypaz-Un-destello-diferente.mp3?rlkey=c4yyxm2pwghj8kaz63kvwe4z9&st=avx2ig38&dl=1",
      "https://www.dropbox.com/scl/fi/1wej21qskf4hv3w1gzcfr/02-Lucas-y-Marypaz-Y-la-ma-ana-nace.mp3?rlkey=hz5klrl744bee2k4i9c3kj6jz&st=v8rgjnbs&dl=1",
      "https://www.dropbox.com/scl/fi/sxjjodqowxaychdpb57cj/03-Lucas-y-Marypaz-Estos-hilos-que-yo-enhebro.mp3?rlkey=n6d9m72f3gzjnuxn6oje8paa4&st=n9auq7ai&dl=1",
      "https://www.dropbox.com/scl/fi/7l4m8p2vifiksiyfo8r05/04-Lucas-y-Marypaz-Pie-que-danza.mp3?rlkey=s0s5q2555d8kw5ywys0hfay1n&st=ejaepxo9&dl=1",
          
          
        ],
        [
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",

          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",

          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",

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
       
    "https://www.dropbox.com/scl/fi/tw2guz48g56pq005bgsmn/Alto-s-Interlude.mp3?rlkey=so55ar5yht51m5mw8vqycuhoq&st=ya9ymbnd&dl=1",
    "https://www.dropbox.com/scl/fi/zlqfdxwsqk6gess55z0yg/Asma-Omar-Buuraha-U-Dheer.mp3?rlkey=hcrv3j94vv6qz5a2rgi4hw1pz&st=ie9cacke&dl=1",
    "https://www.dropbox.com/scl/fi/hotgdrx33wen6sr8gcikb/Asma-Omar-Raga-Kaan-Ka-Eegtow.mp3?rlkey=oudpbfb1pbz1vbtngfxwlwhk9&st=oqyvu408&dl=1",
    "https://www.dropbox.com/scl/fi/58h1vs6vedqjksr2sb7xa/Danse-Tradiotionnelle-Wiil-Wille.mp3?rlkey=x94w485lsugbztkmef7fpdgco&st=8zrp6g6u&dl=1",
    "https://www.dropbox.com/scl/fi/mbgc29ixx5av273rj0jhy/Guessod-Abdo-Hamargod-Kuusha-Caarey.mp3?rlkey=kqesch7k9dxt3bma0warn43ey&st=xd5s6t6o&dl=1",
    "https://www.dropbox.com/scl/fi/9mdqt8g24rzg8c0fixvky/Guessod-Abdo-Hamargod-liso-Daymo.mp3?rlkey=z03oev378u5j9fz44mjpysyx6&st=vlcd6jpm&dl=1",
    "https://www.dropbox.com/scl/fi/6csp7in8lgcl3nwx6yhrw/Hasan-Omar-Housein-Uurkan-Kaadonaya.mp3?rlkey=90rlvcq2e8fqj38sjosn6i4tv&st=o71jb965&dl=1",
    "https://www.dropbox.com/scl/fi/u0e57gh11z178pie75k82/Hassan-Omar-Housein-Halkaasad-Dhigi-Magtiisa.mp3?rlkey=ovgdsqru1nu0n1o63veisfqta&st=fpiceafp&dl=1",
    "https://www.dropbox.com/scl/fi/2twyg0si5emqc0v0ldvu9/Hassan-Omar-Housein-Raani.mp3?rlkey=chqfyo3tvshqhojk9qo5yc2kh&st=dbs403tq&dl=1",
    "https://www.dropbox.com/scl/fi/3bdqmy3ev4mptwys18mjc/Hassan-Omar-Housein-Suuban.mp3?rlkey=p94zjgw386rlc3bwj3ek0pjfr&st=0o06fah1&dl=1",
         
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",

        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
       
        
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
            "https://www.dropbox.com/scl/fi/7kmvcmruuthl2v6ahopaq/grupo-da-pesada-v-a-andorinha.mp3?rlkey=ws5ev7itx0k5z90ts13zbvq0h&st=jyju7ai4&dl=1",
            "https://www.dropbox.com/scl/fi/wrc3pf6cu5a2fclncg8f3/janj-o-meu-barquinho.mp3?rlkey=lg4rqrdl4jksa3fla1fa6v3tl&st=6gle55on&dl=1",
            "https://www.dropbox.com/scl/fi/oove275aap133u01lrfej/magalh-es-e-sua-guitarra-xang.mp3?rlkey=7e14xd8bzt7768x67f1y72t4k&st=kx2bp3ev&dl=1",
            "https://www.dropbox.com/scl/fi/rwzu8ts33zkzmbdagmxpi/messias-holanda-carimb-da-pimenta.mp3?rlkey=6hxi4s1w68nedxovmg8nzkxxm&st=b3n2yso5&dl=1",

            "https://www.dropbox.com/scl/fi/94reg0bnpt3kj6vyierug/messias-holanda-o-galo-canta-o-macaco-assovia.mp3?rlkey=ugoyeza2yl10x8e2991zs6v7b&st=9368m8x9&dl=1",
            "https://www.dropbox.com/scl/fi/sj9xbv3zinb8qaf7cvcwf/mestre-cupij-e-seu-ritmo-despedida.mp3?rlkey=tuj8tjbf003zv674tist5z236&st=1mn08bjb&dl=1",
            "https://www.dropbox.com/scl/fi/jj6ofd35m4ww0u6ttmnr0/o-conjunto-de-orlando-pereira-carimb-para-ye.mp3?rlkey=uvk9smprjeymredk2t3raw1zm&st=xc93ngk9&dl=1",
            "https://www.dropbox.com/scl/fi/k46gk6pym2wbkzabn2dnw/o-conjunto-de-orlando-pereira-maruda.mp3?rlkey=3v6vy5tf11fm1433va5s4xvh6&st=ckgi913e&dl=1",
            "https://www.dropbox.com/scl/fi/u4uwmw0qodb1db6kygold/os-muiraquit-ns-a-misturada.mp3?rlkey=edw6qst2a7qlaabrnat58hkha&st=ga0bl3ze&dl=1",

            "https://www.dropbox.com/scl/fi/xntlcd75b2ea5ddxnxj9a/os-quentes-de-terra-alta-praia-do-algodoal.mp3?rlkey=ox1u983tttismyof6no4xr9wx&st=0fw7n85l&dl=1",
            "https://www.dropbox.com/scl/fi/4s2pd30xvuuypbtay84dx/pinduca-coco-da-bahia.mp3?rlkey=px0bzu4u3ww078etap1b2mrjd&st=7bqu3iy3&dl=1",
            "https://www.dropbox.com/scl/fi/qgtb5srar55jk9m3nbu5p/pinduca-pai-xang.mp3?rlkey=avyf5nthwd2iu72vtgdv93v5k&st=nsexu2ob&dl=1",
            "https://www.dropbox.com/scl/fi/ehz20nj3axloyg6svkp55/pinduca-vamos-farrear.mp3?rlkey=sm2x2kzoh0d6iol4swlagz45c&st=ezzf7ken&dl=1",
            "https://www.dropbox.com/scl/fi/a3zx2ucfpd9pfk9zsm835/verequete-e-o-conjunto-uirapur-da-garrafa-um.mp3?rlkey=ju8rcs5r9bi3tlopc4d864kmw&st=y94s4ppp&dl=1",

            "https://www.dropbox.com/scl/fi/pet800rqwoolshxpbappr/verequete-e-o-conjunto-uirapur-mambo-assanha.mp3?rlkey=hbhx270ss384l7ppk4anmii67&st=4e7ix3sl&dl=1",
            "https://www.dropbox.com/scl/fi/6x7x14cum2torv5eozfwl/vieira-e-seu-conjunto-lambada-da-baleia.mp3?rlkey=ctayiucqy2975lyhcwuxzzgws&st=pw60gmed&dl=1",
            "https://www.dropbox.com/scl/fi/bqfds7a66d763vql4mrbw/vieira-e-seu-conjunto-mel-do-bode.mp3?rlkey=yv6g3oycnylwboaveabr70jt8&st=1381c076&dl=1",
        ],
        [
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            
            
        ],
];

//Disco7

//


