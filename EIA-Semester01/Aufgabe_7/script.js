//Auswahl aller Buttons + Verbindung zur Sounddatei & Abspiel-Funktion
var pads = document.querySelectorAll(".box");
for (var i = 0; i < pads.length; i++) {
    pads[i].addEventListener("click", function (event) {
        var pos = event.target.classList[1];
        var Num = pos.substring(pos.length - 1, pos.length);
        playSample("Sounds/assets_" + Num + ".mp3");
    });
}
;
function playSample(samples) {
    var sound = new Audio(samples);
    sound.play();
}
;
//Play-Button zufälliger Rythmus
document.querySelector(".play-button").addEventListener("click", Music);
function Music() {
    setInterval(Rythm, 1000);
    setInterval(Bass, 300);
    var beat = ["Sounds/assets_5.mp3", "Sounds/assets_1.mp3", "Sounds/assets_2.mp3", "Sounds/assets_3.mp3", "Sounds/assets_4.mp3"];
    var bass = ["Sounds/assets_6.mp3", "Sounds/assets_7.mp3"];
    function Bass() {
        var min = 0;
        var max = 2;
        var index = Math.floor(Math.random() * (max - min + 1)) + min;
        var sound = new Audio(bass[index]);
        sound.play();
    }
    ;
    function Rythm() {
        var min = 0;
        var max = 4;
        var index = Math.floor(Math.random() * (max - min + 1)) + min;
        var sound = new Audio(beat[index]);
        sound.play();
    }
    ;
}
//Tastatur-Event
var samples = ["Sounds/assets_1.mp3", "Sounds/assets_2.mp3", "Sounds/assets_3.mp3", "Sounds/assets_4.mp3", "Sounds/assets_5.mp3", "Sounds/assets_6.mp3", "Sounds/assets_7.mp3", "Sounds/assets_8.mp3", "Sounds/assets_9.mp3"];
document.addEventListener("keydown", function (keys) {
    if ((keys.key == "w") || (keys.key == "7")) {
        playSample(samples[0]);
    }
    else if ((keys.key == "e") || (keys.key == "8")) {
        playSample(samples[1]);
    }
    else if ((keys.key == "r") || (keys.key == "9")) {
        playSample(samples[2]);
    }
    else if ((keys.key == "s") || (keys.key == "4")) {
        playSample(samples[3]);
    }
    else if ((keys.key == "d") || (keys.key == "5")) {
        playSample(samples[4]);
    }
    else if ((keys.key == "f") || (keys.key == "6")) {
        playSample(samples[5]);
    }
    else if ((keys.key == "x") || (keys.key == "1")) {
        playSample(samples[6]);
    }
    else if ((keys.key == "c") || (keys.key == "2")) {
        playSample(samples[7]);
    }
    else if ((keys.key == "v") || (keys.key == "3")) {
        playSample(samples[8]);
    }
});
//# sourceMappingURL=script.js.map