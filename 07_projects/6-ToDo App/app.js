let data = JSON.parse(localStorage.getItem("allTodo")) || [];

function displayTodo() {
  document.getElementById("allTodo").innerHTML = "";
  data.forEach((singleTodo, idx) => {
    todoStructure(singleTodo, idx);
  });
}

//This is todo's structure
function todoStructure(singleTodo, idx) {
  let div = createElement(singleTodo);

  //This code for remove button
  let removeBtn = div.getElementsByTagName("button");
  removeBtn[0].addEventListener("click", (e) => {
    e.target.parentNode.remove();
    removeTodo(idx);
  });

  //This code for checkbox
  let checkBox = div.getElementsByTagName("input");
  checkBox[0].addEventListener("click", (e) => {
    e.target.previousElementSibling.classList.toggle("completed");
    toggleTodo(idx);
  });

  document.getElementById("allTodo").appendChild(div);
}

//This is event listener on Add button to add Todo
document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let todoInputValue = document.getElementById("todoInput").value;

  data.push({todoInputValue, completed:false});

  localStorage.setItem("allTodo", JSON.stringify(data));

  displayTodo();
  //Code to clear input field
  document.getElementById("todoInput").value = "";
});

//This function is for creating an element/Todo
function createElement(singleTodo) {
  let div = document.createElement("div");

  div.setAttribute("class", "singleTodo");

  div.innerHTML = ` <h2>${singleTodo.todoInputValue}</h2>

  <input type="checkbox" id="checkBox" />

  <button >Remove Todo</button> `;

  return div;
}

//This function is for removing todo from array
function removeTodo(idx) {
console.log(idx);
data.splice(idx, 1)
localStorage.setItem("allTodo", JSON.stringify(data));
displayTodo();


}

//This function is for checkbox functionality

function toggleTodo(idx) {
  data[idx].completed = !data[idx].completed
  localStorage.setItem("allTodo", JSON.stringify(data));
  

}

displayTodo();
