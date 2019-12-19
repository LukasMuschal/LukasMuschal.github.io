window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playsample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function () { playsample("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function () { playsample("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function () { playsample("F.mp3"); });
    ;
    document.querySelector(".button5").addEventListener("mousedown", function () { playsample("G.mp3"); });
    ;
    document.querySelector(".button6").addEventListener("mousedown", function () { playsample("A.mp3"); });
    ;
    document.querySelector(".button7").addEventListener("mousedown", function () { playsample("C.mp3"); });
    ;
    document.querySelector(".button8").addEventListener("mousedown", function () { playsample("laugh-1.mp3"); });
    ;
    document.querySelector(".button9").addEventListener("mousedown", function () { playsample("laugh-2.mp3"); });
    ;
    document.querySelector(".PlayButton").addEventListener("click", playbeat);
});
function playsample(myMP3) {
    var sound = new Audio("assets/" + myMP3);
    sound.play();
}
var PlayButton = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/laugh-2.mp3"];
function playbeat() {
    var sound = setInterval(Beat, 500);
    var index = 0;
    function Beat() {
        var Beat = new Audio(PlayButton[index]);
        index = index + 1;
        Beat.play();
    }
    ;
}
//# sourceMappingURL=aufgabe_7.js.map