window.addEventListener("load", function () {
    var allTasks = [];
    document.querySelector("#addTask").addEventListener("click", function () {
        if (document.getElementById("inputField").value != " ") {
            var newTask = new Object;
            newTask.taskName = document.getElementById("inputField").value;
            allTasks.push(newTask);
            console.log(allTasks.length);
            document.getElementById("inputField").value = " ";
            createElementsFromArray();
        }
    }, false);
    function getTotalNumber() {
        document.querySelector("#numberOfTasks").innerHTML = allTasks.length + " in total";
    }
    function createElementsFromArray() {
        document.getElementById("myTasks").innerHTML = " ";
        var div;
        var _loop_1 = function (i) {
            console.log(allTasks[i]);
            div = document.createElement("div");
            div.setAttribute("class", "newDiv");
            div.innerHTML = "<i  class='far fa-circle circle'></i><p class='p'>" + allTasks[i].taskName + "</p><i class='far fa-trash-alt trash' id='" + i + "'></i>";
            document.getElementById("myTasks").appendChild(div);
            document.getElementById(i.toString()).addEventListener("click", function () {
                deleteObjFromArray(i);
            }, false);
        };
        for (var i = 0; i < allTasks.length; i++) {
            _loop_1(i);
        }
        var allCircles = document.getElementsByClassName("circle");
        for (var y = 0; y < allCircles.length; y++) {
            allCircles[y].addEventListener("click", function () {
                checkItem(this);
            }, false);
        }
        getTotalNumber();
    }
    function deleteObjFromArray(para) {
        allTasks.splice(para, 1);
        createElementsFromArray();
    }
    function checkItem(obj) {
        if (obj.classList.contains("fa-circle")) {
            obj.classList.remove("fa-circle");
            obj.classList.add("fa-check-circle");
        }
        else {
            obj.classList.add("fa-circle");
            obj.classList.remove("fa-check-circle");
        }
    }
}, false);
//# sourceMappingURL=Aufgabe_9.js.map