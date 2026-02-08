function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
