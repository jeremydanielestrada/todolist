let taskList = [];

document.querySelector("button").addEventListener("click", function (e) {
  if (document.querySelector("#task").value === "") {
    alert("Please enter a task");
  } else {
    taskCreations();
    document.querySelector("#task").value = "";
  }
});

//add task
const taskCreations = () => {
  const taskValue = document.querySelector("#task").value;
  const text = document.createTextNode(taskValue);
  const list = document.createElement("li");
  const box = document.createElement("input");
  const ul = document.querySelector("ul");
  const editButton = document.createElement("button");
  let tracker = document.querySelector("#tracker");
  box.type = "checkbox";
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-sm", "mx-2");

  list.appendChild(box);
  list.appendChild(text);
  list.appendChild(editButton);
  ul.appendChild(list);
  box.style.marginRight = "10px";
  taskList.push(taskValue);
  tracker.innerHTML = taskList.length;

  //removetask
  box.addEventListener("change", function () {
    if (box.checked) {
      list.classList.add("fade-out");
      setTimeout(() => {
        list.remove();
        //tracks the list
        taskList = taskList.filter((task) => task !== taskValue);
        tracker.innerHTML = taskList.length;
      }, 1000);
    }
  });

  editButton.addEventListener("click", function () {
    const newTaskValue = prompt("Edit your task:", taskValue);
    if (newTaskValue) {
      text.nodeValue = newTaskValue;
      taskList = taskList.map((task) =>
        task === taskValue ? newTaskValue : task
      );
    }
  });
};
