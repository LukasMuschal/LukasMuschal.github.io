
var tasks = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;

window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + tasks[index].check + "'><i class='fas fa-check'></i></span>"
            + tasks[index].name +
            "<span class='trash fas fa-trash-alt'></span>";
      
        todo.querySelector(".check").addEventListener("click", function () {
        
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
          
            deleteTodo(index);
        });
       
        todosDOMElement.appendChild(todo);
      
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    };
    
    for (var index = 0; index < tasks.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    var checked = 0;
    var unchecked = 0;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].check == true) {
            checked++;
        }
        else {
            unchecked++;
        }
    }
    counterDOMElement.innerHTML = tasks.length + " in total" + " ~ " + unchecked + " open" + " ~ " + checked + " done";
}

function addTodo() {
    if (inputDOMElement.value != "") {
        var temp = {
            name: inputDOMElement.value,
            check: false
        };
        tasks.push(temp);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index) {
    tasks[index].check = !tasks[index].check;
    drawListToDOM();
}
function deleteTodo(index) {
    tasks.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["ToDo hinzufügen *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe " + wildcard + " wurde hinzugefügt.");
            var temp = {
                name: wildcard,
                check: false
            };
            tasks.push(temp);
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
                console.log("Okay");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map