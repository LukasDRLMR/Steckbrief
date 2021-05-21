//Variablen
var pads = document.querySelectorAll(".box");
var mediaPlayer = document.querySelector(".play-button");
var shuffleButton = document.querySelector(".fa-random");
var deleteButton = document.querySelector(".fa-backspace");
var recordButton = document.querySelector(".fa-microphone");
var interval;
var n = 0;
var shuffleBeat;
var record = false;
var playThis = ["Sounds/assets_1.mp3", "Sounds/assets_2.mp3", "Sounds/assets_3.mp3", "Sounds/assets_4.mp3", "Sounds/assets_5.mp3", "Sounds/assets_6.mp3", "Sounds/assets_7.mp3"];
var samples = ["Sounds/assets_1.mp3", "Sounds/assets_2.mp3", "Sounds/assets_3.mp3", "Sounds/assets_4.mp3", "Sounds/assets_5.mp3", "Sounds/assets_6.mp3", "Sounds/assets_7.mp3", "Sounds/assets_8.mp3", "Sounds/assets_9.mp3"];
//Auswahl aller Buttons + Verbindung zur Sounddatei & Abspiel-Funktion
for (i = 0; i < pads.length; i++) {
    pads[i].addEventListener("click", function (event) {
        var pos = event.target.classList[1];
        var num = pos.substring(pos.length - 1, pos.length);
        playSample(samples[num]);
    });
}
function playSample(sample) {
    var sound = new Audio(sample);
    if (record == true) {
        playThis.push(sample);
    }
    sound.play();
}
//Play-Button Loop
mediaPlayer.addEventListener("click", Music);
function Music() {
    if (mediaPlayer.classList.contains("passive")) {
        mediaPlayer.classList.replace("passive", "active");
        document.querySelector(".playPause").classList.replace("fa-play", "fa-pause");
        interval = setInterval(Loop, 300);
    }
    else {
        mediaPlayer.classList.replace("active", "passive");
        document.querySelector(".playPause").classList.replace("fa-pause", "fa-play");
        clearInterval(interval);
    }
}
function Loop() {
    playSample(playThis[n]);
    n++;
    if (n == playThis.length) {
        n = 0;
    }
}
// Shuffle Button
shuffleButton.addEventListener("click", Remix);
function Remix() {
    if (shuffleButton.classList.contains("passive")) {
        shuffleButton.classList.replace("passive", "active");
        shuffleBeat = setInterval(Shuffle, 300);
    }
    else {
        shuffleButton.classList.replace("active", "passive");
        clearInterval(shuffleBeat);
    }
}
function Shuffle() {
    var min = 0;
    var max = 6; //Laugh-Dateien ausgenommen, weil -> klingt schrecklich
    var index = Math.floor(Math.random() * (max - min + 1)) + min;
    playSample(samples[index]);
}
//Delete-Button
deleteButton.addEventListener("click", Delete);
function Delete() {
    playThis.length = 0;
    record = false;
}
//Record-Button
recordButton.addEventListener("click", RecordBeat);
function RecordBeat() {
    if (recordButton.classList.contains("passive")) {
        recordButton.classList.replace("passive", "active");
        record = true;
        playThis.length = 0;
        console.log(record);
    }
    else {
        recordButton.classList.replace("active", "passive");
        record = false;
        console.log(record);
    }
}
//Tastatur-Event
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