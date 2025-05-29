document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", handleAddTask);
  });
  
  function handleAddTask() {
    const taskText = document.getElementById("taskInput").value.trim();
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;
  
    if (!taskText) return;
  
    const taskElement = createTaskElement(taskText, category, priority);
    document.getElementById("taskList").appendChild(taskElement);
  
    document.getElementById("taskInput").value = "";
  }
  
  function createTaskElement(task, category, priority) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${task}</strong><br><small>${category} • ${priority}</small>`;
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => li.remove());
  
    li.appendChild(delBtn);
    return li;
  }
  
