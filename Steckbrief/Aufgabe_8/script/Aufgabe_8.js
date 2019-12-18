//buttons
window.addEventListener("load", function () {
    document.querySelector("#kick").addEventListener("click", function () { PlaySample("kick.mp3"); });
    document.querySelector("#snare").addEventListener("click", function () { PlaySample("snare.mp3"); });
    document.querySelector("#hihat").addEventListener("click", function () { PlaySample("hihat.mp3"); });
    document.querySelector("#A").addEventListener("click", function () { PlaySample("A.mp3"); });
    document.querySelector("#C").addEventListener("click", function () { PlaySample("C.mp3"); });
    document.querySelector("#F").addEventListener("click", function () { PlaySample("F.mp3"); });
    document.querySelector("#G").addEventListener("click", function () { PlaySample("G.mp3"); });
    document.querySelector("#laugh1").addEventListener("click", function () { PlaySample("laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("click", function () { PlaySample("laugh-2.mp3"); });
    document.querySelector("#playbutton").addEventListener("click", PlayBeat);
    document.querySelector("#record").addEventListener("click", RecordBeat);
    document.querySelector("#erase").addEventListener("click", EraseBeat);
});
//beat array
var array1 = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "kick.mp3"];
//PlaySample    
var interval;
var record = false;
function PlaySample(tone) {
    var sound = new Audio("./assets/" + tone);
    sound.play();
    if (record == true) {
        array1.push(tone);
    }
}
//PlayBeat
function PlayBeat() {
    var index = 0;
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