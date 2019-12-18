window.addEventListener("load", function () {
    document.querySelector("#Kick").addEventListener("click", playKick);
});
function playKick() {
    var sound = new Audio("Sounds/kick.mp3");
    sound.play();
}
//Snare
window.addEventListener("load", function () {
    document.querySelector("#Snare").addEventListener("click", playSnare);
});
function playSnare() {
    var sound = new Audio("Sounds/snare.mp3");
    sound.play();
}
//Hihat
window.addEventListener("load", function () {
    document.querySelector("#hihat").addEventListener("click", playHihat);
});
function playHihat() {
    var sound = new Audio("Sounds/hihat.mp3");
    sound.play();
}
//A
window.addEventListener("load", function () {
    document.querySelector("#A").addEventListener("click", playA);
});
function playA() {
    var sound = new Audio("Sounds/A.mp3");
    sound.play();
}
//C
window.addEventListener("load", function () {
    document.querySelector("#C").addEventListener("click", playC);
});
function playC() {
    var sound = new Audio("Sounds/C.mp3");
    sound.play();
}
//F
window.addEventListener("load", function () {
    document.querySelector("#F").addEventListener("click", playF);
});
function playF() {
    var sound = new Audio("Sounds/F.mp3");
    sound.play();
}
//G
window.addEventListener("load", function () {
    document.querySelector("#G").addEventListener("click", playG);
});
function playG() {
    var sound = new Audio("Sounds/G.mp3");
    sound.play();
}
//laugh1
window.addEventListener("load", function () {
    document.querySelector("#laugh1").addEventListener("click", playlaugh1);
});
function playlaugh1() {
    var sound = new Audio("Sounds/laugh-1.mp3");
    sound.play();
}
//laugh2
window.addEventListener("load", function () {
    document.querySelector("#laugh2").addEventListener("click", playlaugh2);
});
function playlaugh2() {
    var sound = new Audio("Sounds/laugh-2.mp3");
    sound.play();
}
//Playsample
function Playsample(Playsound) {
    var sound = new Audio("Sounds/" + Playsound);
    sound.play();
}
//Playbeat
window.addEventListener("load", function (beat) {
    document.querySelector("#playbutton").addEventListener("click", playbeat);
});
function playbeat() {
    var time = setInterval(beat, 500);
    var list = ["Sounds/kick.mp3", "Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/kick.mp3", "Sounds/kick.mp3", "Sounds/snare.mp3", "Sounds/hihat.mp3"];
    var index = 0;
    function beat() {
        var sound = new Audio(list[index]);
        sound.play();
        index++;
        if (index > 6)
            index = 0;
    }
}
//Play
if (document.getElementById("playbutton").classList.contains("fa-play")) {
    document.getElementById("playbutton").classList.remove("fa-play");
    document.getElementById("playbutton").classList.add("fa-stop");
    interval = setInterval(myBeat, 250);
    record = false;
    console.log("Play");
    //Stop
}
else {
    document.getElementById("playbutton").classList.remove("fa-stop");
    document.getElementById("playbutton").classList.add("fa-play");
    clearInterval(interval);
    console.log("Pause");
}
//Beat
function myBeat() {
    PlaySample(array1[index]);
    index += 1;
    if (index > (array1.length - 1))
        index = 0;
    console.log(array1[index]);
}
//Record
function RecordBeat() {
    record = true;
}
//Erase
function EraseBeat() {
    array1.length = 0;
}
//# sourceMappingURL=Aufgabe_8.js.map