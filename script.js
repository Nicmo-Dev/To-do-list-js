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
const toggleThemeBtn = document.getElementById("toggleTheme");

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleThemeBtn.innerText = "Modo claro";
}

toggleThemeBtn.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleThemeBtn.innerText = "Modo claro";
    localStorage.setItem("theme", "dark");
  } else {
    toggleThemeBtn.innerText = "Modo escuro";
    localStorage.setItem("theme", "light");
  }
};
