idCounter = 1
function todoAdd() {
    todolist = document.getElementById("todo")
    todoText = document.getElementById("newTodo")
    idCounter += 1
    newlist = ('<li class="taskList">' +
                    '<span class="clickable" onclick="showTasks(`insideTodo' + idCounter + '`)">' + todoText.value + '</span>' +
                    '<div class="tasksdiv" id="insideTodo' + idCounter+ '">' +
                        '<ul id="tasks' + idCounter + '">' +
                        '</ul>' +
                        '<ul>' +
                            '<li class="createForm">' +
                                '<form onsubmit="taskAdd(`newTask' + idCounter + '`, `tasks' + idCounter + '`); return false">' +
                                    '<div>' +
                                        '<input type="text" placeholder="New task to be done ..." id="newTask' + idCounter + '" required>' +
                                    '</div>' +
                                '</form>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                '</li>' )
    todolist.innerHTML += newlist
    todoText.value = ""
}

function taskAdd(textboxID, listID) {
    tasklist = document.getElementById(listID)
    this.taskText = document.getElementById(textboxID)
    this.tasklist.innerHTML += ("<li>" + taskText.value + "</li>")
    taskText.value = ""
}

function showTasks(listID) {
    tasks = document.getElementById(listID)
    tasks.classList.toggle("show")
}
