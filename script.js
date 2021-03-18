//by default submit button should be disabled
document.querySelector("#submit").disabled = true;

document.querySelector("#task").onkeyup = () => {
  if (document.querySelector("#task").value.length > 0) {
    document.querySelector("#submit").disabled = false;
  } else {
    document.querySelector("#submit").disabled = true;
  }
};
// listeners that listens on form submit

document.querySelector("form").onsubmit = () => {
  const task = document.querySelector("#task").value;
  // create li element
  const li = document.createElement("li");

  // append value of input to the new li
  li.innerHTML = task;

  // select ul tasks and append li to it

  document.querySelectorAll("#tasks").forEach((item) => {
    let deleteBtn = document.createElement("span");
    let completedBtn = document.createElement("span");
    completedBtn.innerHTML = "Completed";
    completedBtn.classList = "completeBtn";
    li.appendChild(completedBtn);
    deleteBtn.innerHTML = "X";
    deleteBtn.classList = "deleteBtn";
    li.appendChild(deleteBtn);
    item.appendChild(li);

    deleteBtn.addEventListener("click", () => {
      li.classList = "remove";
    });
    completedBtn.addEventListener("click", () => {
      li.classList.toggle("complete");
    });
  });

  //select input value and reset it
  document.querySelector("#task").value = "";

  document.querySelector("#submit").disabled = true;

  // stop form from submitting
  return false;
};
