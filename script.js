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
  let tracker = document.querySelector("#tracker");
  box.type = "checkbox";
  list.appendChild(box);
  list.appendChild(text);
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
        taskList = taskList.filter((task) => task !== taskValue);
        tracker.innerHTML = taskList.length;
      }, 1000);
    }
  });
};
