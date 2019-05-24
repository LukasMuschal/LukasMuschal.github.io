console.log("Test1");

window.onload = function () {
    console.log();
    document.getElementById("Button").addEventListener("click", DoStuff);      //erster Button
    document.getElementById("id1").addEventListener("click", Klassenänderung); //zweiter button
    document.getElementById("id2").addEventListener("click", KlickundPuff);    //Dritter button
    document.getElementById("id3").addEventListener("click", Rechnung);
}

function DoStuff() {
    console.log();
    document.getElementById("Button").innerHTML = "Aua, das hat weh getan!";

}

function Klassenänderung(){
console.log("Hab die Klasse geändert");
document.getElementById("id1").innerHTML="Aua, nicht so fest!";
document.getElementById("id1").className="Klasse b";
}

function KlickundPuff(){
    let newPara = document.createElement("p");
    let position = document.getElementById("body");
    position.appendChild(newPara);
    newPara.innerHTML="Aua, Auuuuaa, Auuuuuuuua";
    console.log("Hui viele neue Auas");

}
// window.onload = function




function Rechnung() {
    let Lieblingstier: string = "Affe";
    console.log(Lieblingstier);
    let Hasstier: string = "Stinkkäfer";
    console.log(Hasstier);
    let number1: number = 187;
    console.log(number1);
    let number2: number = 2981;
    console.log(number2);
    console.log(Lieblingstier + Hasstier);
    console.log(number1 + number2);
    console.log(Lieblingstier + number2);
    number1=8;
}


// document.getElementById("bereich1");
// let inhalt:HTMLElement = document.getElementById("bereich1");
// console.log(inhalt);
