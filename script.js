

const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");

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



  function togglePlay() {

    audioElement.addEventListener(
        "ended",
        () => 
      {
        audioElement.src=chambacu[1][2];
        song.play();
      
      },
        
      );


    if (song.paused) {
    audioElement.src=chambacu[1][3];
      song.play();
    } else {
      song.pause();
    }
  }
