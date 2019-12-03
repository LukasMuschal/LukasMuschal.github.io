window.addEventListener("load", function(){
    document.querySelector("#Kick").addEventListener("click", playSample)
    document.querySelector("#Snare").addEventListener("click", playSample)
})

function playSample() {
    var sound:HTMLAudioElement = new Audio("Sounds/kick.mp3");
    var sound:HTMLAudioElement = new Audio("Sounds/snare.mp3"); 
    sound.play();
}
