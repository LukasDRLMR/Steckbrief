//Variablen
var tasks = document.querySelector("#Tasks");
var undone = document.querySelector(".fa-circle");
var done = document.querySelector(".fa-check-circle");
var inputTask = document.querySelector("#Input");
//add Tasks
document.querySelector(".fa-plus-circle").addEventListener("click", addTask);
document.querySelector("#Input").addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        addTask();
    }
});
function addTask() {
    var li = document.createElement("li");
    var trash = document.createElement("i");
    trash.className = "far fa-trash-alt";
    var check = document.createElement("i");
    check.className = "far fa-circle";
    if (inputTask.value == "") {
        alert("Please write something");
    }
    else {
        tasks.appendChild(li);
        li.innerHTML = inputTask.value;
        li.appendChild(trash);
        li.appendChild(check);
        setTimeout(function () {
            inputTask.value = "";
        }, 200);
        Todos();
        activate();
    }
}
//Checkbox & Delete
var icons = document.getElementsByTagName("i");
function activate() {
    for (i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", isDone);
    }
}
function isDone() {
    if (this.classList.contains("fa-circle")) {
        this.classList.replace("fa-circle", "fa-check-circle");
        this.parentNode.classList.add("done");
    }
    else if (this.classList.contains("fa-trash-alt")) {
        this.parentElement.remove();
        Todos();
    }
    else {
        this.classList.replace("fa-check-circle", "fa-circle");
        this.parentNode.classList.remove("done");
    }
}
//Anzahl Todos
function Todos() {
    var zahl = document.getElementsByTagName("li").length;
    document.querySelector(".total").innerHTML = zahl + " in total";
}
//# sourceMappingURL=script.js.map