// listeners that listens on submit

document.querySelector("form").onsubmit = () => {
  const task = document.querySelector("#task").value;

  const li = document.createElement("li");
  li.innerHTML = task;

  document.querySelector("ul").appendChild(li);
  task.value = "";

  // stop form from submitting
  return false;
};
