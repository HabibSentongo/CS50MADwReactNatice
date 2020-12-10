function todoAdd() {
    todolist = document.getElementById("todo")
    todoText = document.getElementById("newText")
    todolist.innerHTML += "<li>" + todoText.value + "</li>"
    todoText.value = ""
}
