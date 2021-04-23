var Africa08 = 1028;
var Africa18 = 1235.5;

var SouthAmerica08 = 1132.6;
var SouthAmerica18 = 1261.5;

var Europe08 = 4965.7;
var Europe18 = 4209.3;

var NorthAmerica08 = 6600.4;
var NorthAmerica18 = 6035.6;

var Asia08 = 12954.7;
var Asia18 = 16274.1;

var Australia08 = 1993;
var Australia18 = 2100.5;

var Total08 = Africa08 + SouthAmerica08 + Europe08 + NorthAmerica08 + Asia08 + Australia08;
var Total18 = Africa18 + SouthAmerica18 + Europe08 + NorthAmerica18 + Asia18 + Australia18;

console.log("Die Emission von Afrika ist: " + Africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + ((Africa18 * 100 / Total18).toFixed(2)) + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((Africa18 - Africa08) * 100 / Africa08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (Africa18 - Africa08).toFixed(2) + " kg CO2");

console.log("Die Emission von Südamerika ist: " + SouthAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + (SouthAmerica18 * 100 / Total18).toFixed(2) + " %");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((SouthAmerica18 - SouthAmerica08) * 100 / SouthAmerica08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (SouthAmerica18 - SouthAmerica08).toFixed(2) + " kg CO2");

console.log("Die Emission von Europa ist: " + Europe18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + (Europe18 * 100 / Total18).toFixed(2) + " %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + ((Europe18 - Europe08) * 100 / Europe08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (Europe18 - Europe08).toFixed(2) + " kg CO2");

console.log("Die Emission von Nordamerika ist: " + NorthAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + (NorthAmerica18 * 100 / Total18).toFixed(2) + " %");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((NorthAmerica18 - NorthAmerica08) * 100 / NorthAmerica08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (NorthAmerica18 - NorthAmerica08).toFixed(2) + " kg CO2");

console.log("Die Emission von Asien ist: " + Asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (Asia18 * 100 / Total18).toFixed(2) + " %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + ((Asia18 - Asia08) * 100 / Asia08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (Asia18 - Asia08).toFixed(2) + " kg CO2");

console.log("Die Emission von Australien ist: " + Australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + (Australia18 * 100 / Total18).toFixed(2) + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ((Australia18 - Australia08) * 100 / Australia08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (Australia18 - Australia08).toFixed(2) + " kg CO2");