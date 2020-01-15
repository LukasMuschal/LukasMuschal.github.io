
interface Tasks {
    name: string;
    check: boolean;
}

let tasks: Tasks[] = [
    {
        name: "Einkaufen",
        check: true
    },
    {
        name: "Zähneputzen",
        check: false
    },
    {
        name: "Kochen",
        check: false
    }
];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function (): void {

    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    
    addButtonDOMElement.addEventListener("click", addTodo);

   
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < tasks.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + tasks[index].check + "'><i class='fas fa-check'></i></span>"
            + tasks[index].name +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    }

    updateCounter();
}

function updateCounter(): void {
    let checked: number = 0;
    let unchecked: number = 0;

    for (var i: number = 0; i < tasks.length; i++) {
        if (tasks[i].check == true) {
            checked ++;
        }
        else {
            unchecked ++;
        }
    }
    counterDOMElement.innerHTML = tasks.length + " in total" + " ~ " + unchecked + " open" + " ~ " + checked + " done";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {
        let temp: Tasks = {
            name: inputDOMElement.value,
            check: false
        };
        
        tasks.push(temp);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    tasks[index].check = !tasks[index].check;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    tasks.splice(index, 1);
    drawListToDOM();
}

/* Spracheingabe */
declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["ToDo hinzufügen *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe " + wildcard + " wurde hinzugefügt.");
            let temp: Tasks = {
                name: wildcard,
                check: false
            };
            
            tasks.push(temp);
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
                    console.log("Okay");
                });
            },
            250);
    }

    startContinuousArtyom();

});