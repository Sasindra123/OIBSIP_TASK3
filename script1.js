const i = document.getElementById("input-box");
const listscontainer = document.getElementById("list-container");
console.log(i);

function addTask() {
  if (i.value === " ") {
    alert("You must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = i.value;
    listscontainer.appendChild(li);
    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // li.appendChild(span);
  }
  i.value = " ";
  // saveData();
}

listscontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    // saveData();
  } else if (e.tagname === "LI") {
    e.remove();
    // saveData();
  }
});

// function saveData() {
//   localStorage.setItem("data", listscontainer.innerHTML);
// }

// function showTask() {
//   listscontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
