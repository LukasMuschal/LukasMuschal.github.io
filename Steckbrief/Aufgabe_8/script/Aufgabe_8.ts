//buttons
window.addEventListener("load", function (): void {
  document.querySelector("#kick").addEventListener("click", function (): void { PlaySample("kick.mp3"); });
  document.querySelector("#snare").addEventListener("click", function (): void { PlaySample("Sounds/snare.mp3"); });
  document.querySelector("#hihat").addEventListener("click", function (): void { PlaySample("Sounds/hihat.mp3"); });
  document.querySelector("#A").addEventListener("click", function (): void { PlaySample("Sounds/A.mp3"); });
  document.querySelector("#C").addEventListener("click", function (): void { PlaySample("Sounds/C.mp3"); });
  document.querySelector("#F").addEventListener("click", function (): void { PlaySample("Sounds/F.mp3"); });
  document.querySelector("#G").addEventListener("click", function (): void { PlaySample("Sounds/G.mp3"); });
  document.querySelector("#laugh1").addEventListener("click", function (): void { PlaySample("Sounds/laugh-1.mp3"); });
  document.querySelector("#laugh2").addEventListener("click", function (): void { PlaySample("laugh-2.mp3"); });


  document.querySelector("#playbutton").addEventListener("click", PlayBeat);
  document.querySelector("#record").addEventListener("click", RecordBeat);
  document.querySelector("#erase").addEventListener("click", EraseBeat);
 

});

//beat array
var array1: string [] = ["Sounds/kick.mp3", "Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/kick.mp3", "Sounds/hihat.mp3", "Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/kick.mp3"];


//PlaySample    
var interval: number ;
var record: boolean = false;

function PlaySample(tone: string): void {
  var sound: HTMLAudioElement = new Audio("./Sounds/" + tone);
  sound.play();
  if (record == true) {
    array1.push(tone);
}
}

//PlayBeat
function PlayBeat(): void {
  var index: number = 0;

//Play
  if ( document.getElementById("playbutton").classList.contains("fa-play") ) {
      document.getElementById("playbutton").classList.remove("fa-play");
      document.getElementById("playbutton").classList.add("fa-stop");
      interval = setInterval(myBeat, 250);
      record = false;
      console.log("Play");

//Stop
  } else {
      document.getElementById("playbutton").classList.remove("fa-stop");
      document.getElementById("playbutton").classList.add("fa-play");
      clearInterval(interval);
      console.log("Pause");
  }

//Beat
  function myBeat (): void {
      PlaySample(array1 [index]);
      index += 1;
      if (index > (array1.length - 1)) index = 0;
      console.log(array1 [index] );
  }
}

//Record
function RecordBeat (): void {
  record = true;
}

//Erase
function EraseBeat (): void {
  array1.length = 0;
}