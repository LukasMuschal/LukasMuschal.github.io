window.addEventListener("load", function(){

    document.querySelector("#Pad1").addEventListener("click", playSample)
})

function playSample() {
    var sound:HTMLAudioElement = new Audio("Aufgabe_7/script/Sounds/kick.mp3");
    sound.play();
}


