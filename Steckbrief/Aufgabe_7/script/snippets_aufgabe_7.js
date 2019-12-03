window.addEventListener("load", function () {
    document.querySelector("#Kick").addEventListener("click", playSample);
    document.querySelector("#Snare").addEventListener("click", playSample);
});
function playSample() {
    var sound = new Audio("Sounds/kick.mp3");
    var sound = new Audio("Sounds/snare.mp3");
    sound.play();
}
//# sourceMappingURL=snippets_aufgabe_7.js.map