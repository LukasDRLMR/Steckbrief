var africa08 = 1028;
var africa18 = 1235.5;

var southAmerica08 = 1132.6;
var southAmerica18 = 1261.5;

var europe08 = 4965.7;
var europe18 = 4209.3;

var northAmerica08 = 6600.4;
var northAmerica18 = 6035.6;

var asia08 = 12954.7;
var asia18 = 16274.1;

var australia08 = 1993;
var australia18 = 2100.5;

var total08 = africa08 + southAmerica08 + europe08 + northAmerica08 + asia08 + australia08;
var total18 = africa18 + southAmerica18 + europe08 + northAmerica18 + asia18 + australia18;

console.log("Die Emission von Afrika ist: " + africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + ((africa18 * 100 / total18).toFixed(2)) + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((africa18 - africa08) * 100 / africa08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (africa18 - africa08).toFixed(2) + " kg CO2");

console.log("Die Emission von Südamerika ist: " + southAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + (southAmerica18 * 100 / total18).toFixed(2) + " %");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((southAmerica18 - southAmerica08) * 100 / southAmerica08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (southAmerica18 - southAmerica08).toFixed(2) + " kg CO2");

console.log("Die Emission von Europa ist: " + europe18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + (europe18 * 100 / total18).toFixed(2) + " %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + ((europe18 - europe08) * 100 / europe08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (europe18 - europe08).toFixed(2) + " kg CO2");

console.log("Die Emission von Nordamerika ist: " + northAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + (northAmerica18 * 100 / total18).toFixed(2) + " %");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ((northAmerica18 - northAmerica08) * 100 / northAmerica08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (northAmerica18 - northAmerica08).toFixed(2) + " kg CO2");

console.log("Die Emission von Asien ist: " + asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (asia18 * 100 / total18).toFixed(2) + " %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + ((asia18 - asia08) * 100 / asia08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (asia18 - asia08).toFixed(2) + " kg CO2");

console.log("Die Emission von Australien ist: " + australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + (australia18 * 100 / total18).toFixed(2) + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ((australia18 - australia08) * 100 / australia08).toFixed(2) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (australia18 - australia08).toFixed(2) + " kg CO2");