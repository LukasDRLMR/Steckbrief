// Variablen Europa
var europe:string = "Europe";
var europe08:number = 4965.7;
var europe18:number = 4209.3;

// Variablen Nordamerika
var northAmerica:string = "Northamerica";
var northAmerica08:number = 6600.4;
var northAmerica18:number = 6035.6;

// Variablen Südamerika
var southAmerica:string = "Southamerica";
var southAmerica08:number = 1132.6;
var southAmerica18:number = 1261.5;

// Variablen Afrika
var africa:string = "Africa";
var africa08:number = 1028;
var africa18:number = 1235.5;

// Variablen Asien
var asia:string = "Asia";
var asia08:number = 12954.7;
var asia18:number = 16274.1;

// Variablen Australien
var australia:string = "Australia";
var australia08:number = 1993;
var australia18:number = 2100.5;

// Variablen Allgemein
var total08:number = africa08 + southAmerica08 + europe08 + northAmerica08 + asia08 + australia08;
var total18:number = africa18 + southAmerica18 + europe08 + northAmerica18 + asia18 + australia18;
var current = document.getElementsByClassName("active");

window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("click", function() {
        emissions(europe, europe18, europe08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    document.querySelector(".northamerica").addEventListener("click", function() {
        emissions(northAmerica, northAmerica18, northAmerica08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    document.querySelector(".southamerica").addEventListener("click", function() {
        emissions(southAmerica, southAmerica18, southAmerica08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    document.querySelector(".africa").addEventListener("click", function() {
        emissions(africa, africa18, africa08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    document.querySelector(".asia").addEventListener("click", function() {
        emissions(asia, asia18, asia08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    document.querySelector(".australia").addEventListener("click", function() {
        emissions(australia, australia18, australia08);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");     //Set Klasse "active"
        }
        this.className += " active";
    });
    function emissions(continentName, continentEm18, continentEm08) {
        document.querySelector("#titleRegion").innerHTML = continentName;
        document.querySelector("#titleRegion2").innerHTML = continentName;
        document.querySelector("#absolute").innerHTML = continentEm18 + " kg CO2";
        document.querySelector("#relativeWorld").innerHTML = Math.round(continentEm18 * 100 / total18) + " %";
        document.querySelector("#percentGrowth").innerHTML = Math.round((continentEm18 - continentEm08) * 100 / continentEm08) + " %";
        document.querySelector("#absoluteGrowth").innerHTML = Math.round(continentEm18 - continentEm08) + " kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + (continentEm18 * 100 / total18) + "%");
        var id = null;
        var elem:HTMLElement = document.querySelector(".chart");        //Animation Balken
        var pos:number = 0;
        clearInterval(id);
        id = setInterval(frame, 15);
        function frame() {
        if (pos == Math.round((continentEm18 * 100 / total18)*2)) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.height = pos + 'px';
            }   
        }
    }
});