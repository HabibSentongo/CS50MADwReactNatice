function todoAdd() {
    todolist = document.getElementById("todo")
    todoText = document.getElementById("newTodo")
    todolist.innerHTML = ("<li>" + todoText.value + "</li>") + todolist.innerHTML
    todoText.value = ""
}

function taskAdd() {
    tasklist = document.getElementById("tasks")
    taskText = document.getElementById("newTask")
    tasklist.innerHTML = ("<li>" + taskText.value + "</li>") + tasklist.innerHTML
    taskText.value = ""
}

function showTasks() {
    tasks = document.getElementById("insideTodo")
    tasks.classList.toggle("show")
}
