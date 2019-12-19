var playbutton: string[] = [ "kick.mp3", "kick.mp3", "snare.mp3"];
var intervalloop: number;
var record: boolean = false;

window.addEventListener("load", function (): void {

    document.querySelector(".button1").addEventListener("mousedown", function (): void { playSample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function (): void { playSample("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function (): void { playSample("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function (): void { playSample("F.mp3"); });
    document.querySelector(".button5").addEventListener("mousedown", function (): void { playSample("G.mp3"); });
    document.querySelector(".button6").addEventListener("mousedown", function (): void { playSample("A.mp3"); });
    document.querySelector(".button7").addEventListener("mousedown", function (): void { playSample("C.mp3"); });
    document.querySelector(".button8").addEventListener("mousedown", function (): void { playSample("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("mousedown", function (): void { playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", PlaySong);
    document.querySelector("#microphone").addEventListener("click", Recordplaybutton);
    document.querySelector("#trash").addEventListener("click", deleteplaybutton);
});



function playSample(myMP3: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + myMP3);
    sound.play();
    console.log(playbutton);
    if (record == true) {
        playbutton.push(myMP3);
    }
}

function PlaySong(): void {
    var index: number = 0;
    record = false;


    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        intervalloop = setInterval(Beat, 200);

    } else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(intervalloop);

    }

    function Beat(): void {
        playSample(playbutton[index]);
        index += 1;
        if (index >= playbutton.length) {
            index = 0;
        }
        
    }

}


function deleteplaybutton(): void {
    playbutton = [];
}

function Recordplaybutton(): void {
    record = true;
}