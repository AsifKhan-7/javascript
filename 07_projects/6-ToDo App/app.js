//This code retrieving the todos and returns an empty array if AllTodos is null
let data = JSON.parse(localStorage.getItem("AllTodos")) || [];



//This function is for adding new Todo
function addTodoEelement() {
  document.getElementById("addBtn").addEventListener("click", (e) => {
    //This line of code is extracting vale from input field
    let inputVal = document.getElementById("todoInput").value;
    e.preventDefault();
    console.log(inputVal);

    //This code means todo is pushed in the array
    data.push(inputVal);

    //This function calls here for adding new Todo
    let newDiv = createTodoElement(inputVal);

    //This line adding a new Todo
    document.getElementById("allTodo").appendChild(newDiv);

    //localStorage to store todos locally
    localStorage.setItem("AllTodos", JSON.stringify(data));

    //This line will clear input field
    document.getElementById("todoInput").value = "";
  });
}

//This function is for delete the Todo
function delteTodo() {
  document.getElementById("allTodo").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("deletebtn")) {
      console.log(e.target.parentNode);
      e.target.parentNode.remove();
    }
  });
}

//This function is for checkbox's functionality
function markTodo() {
  document.getElementById("allTodo").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("check")) {


      //closest method searches upward in DOM tree and returns first ancestor matches specified selector
      let todoDiv = e.target.closest(".singletodo");
      let headings = todoDiv.querySelectorAll("h3");

      headings.forEach((element) => {
        element.classList.toggle("marked");
      });
      console.log(headings);
    }
  });
}

//This function creates a new Todo
function createTodoElement(inputVal) {
  let div = document.createElement("div");
  div.setAttribute("class", "singletodo");
  div.innerHTML = `<h3>${inputVal}</h3>
      <div class="checkbox-container">
          <input type="checkbox" id="checkbox1" class="check"  />
          <label for="checkbox1"></label>
      </div>
        <button id="removebtn" class="deletebtn">Remove</button>`;
  return div;
}

addTodoEelement(); //Call addTodoElement function to add

delteTodo(); //Call delteTodo function to delete

markTodo(); //Call markTodo function to mark todo
