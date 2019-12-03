window.addEventListener("load", function () {
    document.querySelector("#Pad1").addEventListener("click", playSample);
});
function playSample() {
    var sound = new Audio("Sounds/kick.mp3");
    sound.play();
}
//# sourceMappingURL=snippets_aufgabe_7.js.map