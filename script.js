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

// BOTÃO “LIMPA TUDO”
const clearBtn = document.getElementById("clearAll");

clearBtn.addEventListener("click", () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";          // limpa todas as tarefas da tela
  localStorage.removeItem("tasks"); // limpa do localStorage
});

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

/* TOGGLE DARK MODE */
document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("toggleTheme");

  if (!toggleThemeBtn) return;

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
});
