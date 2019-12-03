window.addEventListener("load", function () {
    document.querySelector("#Kick").addEventListener("click", playKick);
});
function playKick() {
    var sound = new Audio("Sounds/kick.mp3");
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#Snare").addEventListener("click", playSnare);
});
function playSnare() {
    var sound = new Audio("Sounds/snare.mp3");
    sound.play();
}
//# sourceMappingURL=snippets_aufgabe_7.js.map