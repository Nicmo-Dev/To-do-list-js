function saveTasks() {
  const tasks = [];

  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.innerText,
      done: li.classList.contains("done")
    });
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

  // CLICAR = MARCAR / DESMARCAR
  li.onclick = function () {
    li.classList.toggle("done");
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";

  saveTasks();
}

/* Carregar tarefas salvas ao abrir o site */
const savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
  savedTasks.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.onclick = function () {
      li.classList.toggle("done");
      saveTasks();
    };

    document.getElementById("taskList").appendChild(li);
  });
}
