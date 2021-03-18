// color editor

let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let gold = document.querySelector(".gold");

let arr = [red, blue, gold];

// declare a fuinction get this with color parameter
// ¸inside of function acess body style background color and add param to it
function getThis(color) {
  document.querySelector("body").style.backgroundColor = color;
}

// ¸loot thogruh element and add listeners to it on click with event callback
// when element is clicked it will call getThis function and pass to it event.target.className
arr.forEach((element) => {
  element.addEventListener("click", (event) => {
    getThis(event.target.className);
  });
  // console.log(element);
});
//  çhange font color to red

 


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

// if there is noit something in localstorage called counter
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

// selects counter class and inside of its innerhtml adds counter number
function count() {
  let counter = localStorage.getItem("counter");
  counter++;
  // set the value of counter to innerhtml
  document.querySelector(".counter").innerHTML = counter;
  localStorage.setItem("counter", counter);
}

// accsess counter element and give it localstorage
document.querySelector(".counter").innerHTML = localStorage.getItem("counter");
document.querySelector("button").addEventListener("click", count);

// call  count every second

document.querySelector("#currency-form").onsubmit = () => {
  fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then((response) => response.json())
    .then((data) => {
      // user inputs
      let currency = document.querySelector("#currency").value.toUpperCase();

      const rate = data.rates[currency]; //access at the position  input of currency
      if (rate !== undefined) {
        document.querySelector("#result").innerHTML = `1 USD is ${rate.toFixed(
          3
        )}
            ${currency}
        `;
      } else {
        document.querySelector("#result").innerHTML = "Invalid currency";
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });

  return false;
};
