window.addEventListener("load", function(){
    document.querySelector("#Kick").addEventListener("click", playKick)
})

function playKick() {
    var sound:HTMLAudioElement = new Audio("Sounds/kick.mp3");
    sound.play();
}
//Snare
window.addEventListener("load", function(){
    document.querySelector("#Snare").addEventListener("click", playSnare)
})

function playSnare() {
    var sound:HTMLAudioElement = new Audio("Sounds/snare.mp3");
    sound.play();
}
//Hihat
window.addEventListener("load", function(){
    document.querySelector("#hihat").addEventListener("click", playHihat)
})

function playHihat() {
    var sound:HTMLAudioElement = new Audio("Sounds/hihat.mp3");
    sound.play();
}
//A
window.addEventListener("load", function(){
    document.querySelector("#A").addEventListener("click", playA)
})

function playA() {
    var sound:HTMLAudioElement = new Audio("Sounds/A.mp3");
    sound.play();
}
//C
window.addEventListener("load", function(){
    document.querySelector("#C").addEventListener("click", playC)
})

function playC() {
    var sound:HTMLAudioElement = new Audio("Sounds/C.mp3");
    sound.play();
}
//F
window.addEventListener("load", function(){
    document.querySelector("#F").addEventListener("click", playF)
})

function playF() {
    var sound:HTMLAudioElement = new Audio("Sounds/F.mp3");
    sound.play();
}
//G
window.addEventListener("load", function(){
    document.querySelector("#G").addEventListener("click", playG)
})

function playG() {
    var sound:HTMLAudioElement = new Audio("Sounds/G.mp3");
    sound.play();
}
//laugh1
window.addEventListener("load", function(){
    document.querySelector("#laugh1").addEventListener("click", playlaugh1)
})

function playlaugh1() {
    var sound:HTMLAudioElement = new Audio("Sounds/laugh-1.mp3");
    sound.play();
}
//laugh2
window.addEventListener("load", function(){
    document.querySelector("#laugh2").addEventListener("click", playlaugh2)
})

function playlaugh2() {
    var sound:HTMLAudioElement = new Audio("Sounds/laugh-2.mp3");
    sound.play();
}