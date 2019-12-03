window.addEventListener("load", function(){

    document.querySelector("#Pad1").addEventListener("click", playSample)
})

function playSample() {
    var sound:HTMLAudioElement = new Audio("kick.mp3");
    sound.play();
}

window.addEventListener("load", function () {
    document.querySelector("#Pad1").addEventListener("mousedown", function () { playSample("kick.mp3") });
    

function playSample(mp3assets: string) {
    var sound: HTMLAudioElement = new Audio(mp3assets);
    sound.play();
}
