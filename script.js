function saveTasks() {
  const tasks = [];

  document.querySelectorAll("li").forEach(li => {
    tasks.push(li.innerText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

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
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";

  saveTasks();
}

/* Carregar tarefas salvas quando o site abre */
const savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
  savedTasks.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
      li.remove();
      saveTasks();
    };

    document.getElementById("taskList").appendChild(li);
  });
}
