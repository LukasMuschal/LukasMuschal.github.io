window.addEventListener("load", function () {
    document.querySelector("#Pad1").addEventListener("click", playSample);
});
function playSample() {
    var sound = new Audio("kick.mp3");
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#Pad1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    function playSample(mp3assets) {
        var sound = new Audio(mp3assets);
        sound.play();
    }
});
//# sourceMappingURL=snippets_aufgabe_7.js.map