window.addEventListener("load", function(){

    document.querySelector("#Pad1").addEventListener("click", playSample)
})

function playSample() {
    var sound:HTMLAudioElement = new Audio("Sounds/kick.mp3");
    sound.play();
}


