var europa01:number = 4209.3;
var afrika01:number = 1235.5;
var samerika01:number = 1261.5;
var namerika01:number = 6035.6;
var asien01:number = 16274.1; 
var australien01:number = 2100.5;
var world:number = (europa01 + samerika01 + namerika01 + asien01 + australien01 + afrika01);

var world:number = 33000

var afrika1:string = "Afrika";
var afrika2:string = "Der Emissionswert von Afrika beträgt: ";
var afrika01:number = 1235.5;
var afrika3:string = "Relativ zur Gesamtemission der Welt verursacht Afrika also ";
var afrika4:string = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "
var afrika02:number = 1028;
var afrika5:string = "2018 im Vergleich zu 2008 sind das "



console.log(afrika1);
console.log(afrika2+afrika01+" kg CO2 ");
console.log(afrika3 + (afrika01 / world *100) +"%");
console.log(afrika4 + (100 * afrika01 / afrika02 -100) +"% verändert" );
console.log(afrika5 + (afrika01-afrika02) + "kg CO2");


var southamerika1:string = "Südamerika";
var southamerika2:string = "Der Emissionwert von Südamerika beträgt: ";
var southamerika01:number = 1261.5;
var southamerika3:string = "Relativ zur Gesamtemission der Welt verursacht Südamerika also ";
var southamerika4:string = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "
var southamerika02:number = 1132.6;
var southamerika5:string = "2018 im Vergleich zu 2008 sind das "


console.log(southamerika1);
console.log(southamerika2+southamerika01+" kg CO2");
console.log(southamerika3 + (southamerika01 / world *100) +"%");
console.log(southamerika4 + (100 * southamerika01 / southamerika02 -100) +"% verändert" );
console.log(southamerika5 + (southamerika01-southamerika02) + "kg CO2");


var europa1:string = "Europa";
var europa2:string = "Der Emissionswert von Europa beträgt: ";
var europa01:number = 4209.3;
var europa3:string = "Relativ zur Gesamtemission der Welt verursacht Europa also ";
var europa4:string = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "
var europa02:number = 4965.7;
var europa5:string = "2018 im Vergleich zu 2008 sind das "


console.log(europa1);
console.log(europa2+europa01+" kg CO2");
console.log(europa3 + (europa01 / world *100) +"%");
console.log(europa4 + (100 * europa01 / europa02 -100) +"% verändert" );
console.log(europa5 + (europa01-europa02) + "kg CO2");


var nordamerika1:string = "Nordamerika";
var nordamerika2:string = "Der Emissionswert von Nordamerika beträgt: ";
var nordamerika01:number = 6035.6;
var nordamerika3:string = "Relativ zur Gesamtemission der Welt verursacht Nordamerika also ";
var nordamerika4:string = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "
var nordamerika02:number = 6600.4;
var nordamerika5:string = "2018 im Vergleich zu 2008 sind das "



console.log(nordamerika1);
console.log(nordamerika2+nordamerika01+" kg CO2");
console.log(nordamerika3 + (nordamerika01 / world *100) +"%");
console.log(nordamerika4 + (100 * nordamerika01 / nordamerika02 -100) +"% verändert" );
console.log(nordamerika5 + (nordamerika01-nordamerika02) + "kg CO2");


var asien1:string = "Asien";
var asien2:string = "Der Emissionswert von Asien beträgt: ";
var asien01:number = 16274.1;
var asien3:string = "Relativ zur Gesamtemission der Welt verursacht Asien also ";
var asien4:string = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "
var asien02:number = 12954.7;
var asien5:string = "2018 im Vergleich zu 2008 sind das "


console.log(asien1);
console.log(asien2+asien01+" kg CO2");
console.log(asien3 + (asien01 / world *100) +"%");
console.log(asien4 + (100 * asien01 / asien02 -100) +"% verändert" );
console.log(asien5 + (asien01-asien02) + "kg CO2");


var australien1:string = "Australien";
var australien2:string = "Der Emissionswert von Australien beträgt: ";
var australien01:number = 2100.5;
var australien3:string = "Relativ zur Gesamtemission der Welt verursacht Australien also ";
var australien4:string = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "
var australien02:number = 1993;
var australien5:string = "2018 im Vergleich zu 2008 sind das "


console.log(australien1);
console.log(australien2+australien01+" kg CO2");
console.log(australien3 + (australien01 / world *100) +"%");
console.log(australien4 + (100 * australien01 / australien02 -100) +"% verändert" );
console.log(australien5 + (australien01-australien02) + "kg CO2");
 
function functionEurope(){
    document.querySelector("#Alle").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Gesamt1").innerHTML = europa01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((europa01 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * europa01 / europa02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((europa01-europa02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:15%" );
}
window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("click", functionEurope);
    });


function functionNorthamerika(){
    document.querySelector("#Alle").innerHTML = "Carbon Dioxide Emissions in Northamerica";
    document.querySelector("#Gesamt1").innerHTML = europa01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((nordamerika01 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * nordamerika01 / nordamerika02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((nordamerika01-nordamerika02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:20%" );
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", functionNorthamerika);
    });


function functionsouthamerica(){
    document.querySelector("#Alle").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.querySelector("#Gesamt1").innerHTML = southamerika01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((southamerika02 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * southamerika01 / southamerika02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((southamerika01-southamerika02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:5%" );
    }
    window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", functionsouthamerica);
    });


function functionafrica(){
    document.querySelector("#Alle").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Gesamt1").innerHTML = afrika01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((afrika01 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * afrika01 / afrika02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((afrika01-afrika02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:5%" );
    }
    window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", functionafrica);
    });


function functionasia(){
    document.querySelector("Alle").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#Gesamt1").innerHTML = asien01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((asien01 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * asien01 / asien02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((asien01-asien02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:53%" );
    }
    window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", functionasia);
    });


function functionaustralia(){
    document.querySelector("#Alle").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#Gesamt1").innerHTML = australien01 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#Vergleich").innerHTML = Math.round((australien01 / world *100)) +"%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * australien01 / australien02 -100)) +"%";
    document.querySelector("#Wachstumswert").innerHTML =  Math.round((australien01-australien02)) + "kg";
    document.querySelector(".Balken").setAttribute("style", "height:8%" );
    }
    window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", functionaustralia);
    });
