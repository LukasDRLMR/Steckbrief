// Object + mehrdimensionales Array
var listpoint = {
    Point: []
};
// Allgemeine Variablen
var todosChecked;
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var microButtonDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    microButtonDOMElement = document.querySelector("#microphone");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + listpoint.Point[index][1] + "'><i class='fas fa-check'></i></span>"
            + listpoint.Point[index][0] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < listpoint.Point.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    var unchecked = 0;
    var checked = 0;
    for (i = 0; i < listpoint.Point.length; i++) {
        if (listpoint.Point[i][1] === false) {
            unchecked++;
        }
        else {
            checked++;
        }
    }
    counterDOMElement.innerHTML = listpoint.Point.length + " in total " + unchecked + " open " + checked + " closed";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        var input = inputDOMElement.value;
        listpoint.Point.unshift([input, todosChecked = false]);
        inputDOMElement.value = "";
        drawListToDOM();
        console.log(listpoint);
    }
}
function toggleCheckState(index) {
    listpoint.Point[index][1] = !listpoint.Point[index][1];
    drawListToDOM();
}
function deleteTodo(index) {
    listpoint.Point.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    microButtonDOMElement.addEventListener("click", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["Erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                listpoint.Point.unshift([wildcard, todosChecked = false]);
                drawListToDOM();
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
});
//# sourceMappingURL=script.js.map