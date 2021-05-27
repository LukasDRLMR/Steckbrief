// Object + mehrdimensionales Array
var listpoint = {               //Wie definiere ich das? Bei listpoint: Object wird Point fehlerhaft...
    Point: []
};

// Allgemeine Variablen
var todosChecked: boolean;
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var microButtonDOMElement: HTMLElement;

window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    microButtonDOMElement = document.querySelector("#microphone");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < listpoint.Point.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML = "<span class='check " + listpoint.Point[index][1] + "'><i class='fas fa-check'></i></span>"
            + listpoint.Point[index][0] +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    var unchecked: number = 0;
    var checked: number = 0;
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

function addTodo(): void {

    if (inputDOMElement.value != "") {

        var input: string = inputDOMElement.value;
        listpoint.Point.unshift([input, todosChecked = false]);

        inputDOMElement.value = "";

        drawListToDOM();

        console.log(listpoint);
    }
}

function toggleCheckState(index: number): void {

    listpoint.Point[index][1] = !listpoint.Point[index][1];

    drawListToDOM();
}

function deleteTodo(index: number): void {

    listpoint.Point.splice(index, 1);

    drawListToDOM();
}


// Artyom

declare var Artyom: any;

window.addEventListener("load", function (): void {
    microButtonDOMElement.addEventListener("click", function (): void {

        const artyom: any = new Artyom();

        artyom.addCommands({
            indexes: ["Erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                listpoint.Point.unshift([wildcard, todosChecked = false]);

                drawListToDOM();
            }
        });

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Ready!");
                    });
                },
                250);
        }

        startContinuousArtyom();
    });
});