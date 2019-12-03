window.addEventListener("load", function(){
    document.querySelector("#Kick").addEventListener("click", playKick)
})

function playKick() {
    var sound:HTMLAudioElement = new Audio("Sounds/kick.mp3");
    sound.play();
}

window.addEventListener("load", function(){
    document.querySelector("#Snare").addEventListener("click", playSnare)
})

function playSnare() {
    var sound:HTMLAudioElement = new Audio("Sounds/snare.mp3");
    sound.play();
}
