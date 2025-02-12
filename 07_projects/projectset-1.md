# Project related to DOM

## Solution code

### Project-1

```JavaScript
console.log("if-else approach");

buttons.forEach((button) => {
  console.log(button);

  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// These conditions can be written in one line

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.id === "grey" ||
      e.target.id === "white" ||
      e.target.id === "blue" ||
      e.target.id === "yellow"
    ) {
      body.style.backgroundColor = e.target.id;
    }
  });
});

//==================================

console.log("switch case approach");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.id;
    switch (color) {
      case "grey":
      case "white":
      case "blue":
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log("Color didn't recognized");
    }
  });
});

```

### Project-2

```JavaScript
const form = document.querySelector("form");
/*This usecase will give empty value
const height = parseInt(document.querySelector("#height").value) */

form.addEventListener("submit", (e) => {
  e.preventDefault(); // This method prevents the default behaviour of the event

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight/ (height * height) * 10000).toFixed(2);
    // result.innerHTML = `<span>BMI is ${bmi}</span>` ;

    let message = ""

    if (bmi < 18.6) {
      message = "It's underweight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "It's normal"
    } else if (bmi >=24.9) {
      message = "It's overweight"
    }
    result.innerHTML = `<span>BMI is ${bmi}</span> <br> <span>${message}</span>`;

  }

});

```

### Project-3

```JavaScript
// let clock = document.getElementById("clock");

// let options = {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// };

// setInterval(() => {
//   let date = new Date();

//   console.log(date.toLocaleTimeString());
//   console.log(
//     "Current time:",
//     date.toLocaleTimeString(),
//     "Timestamp:",
//     date.getTime()
//   );

//   clock.innerHTML = date.toLocaleTimeString("en-US", options);
// }, 1000);

let clock = document.getElementById("clock");

let options = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

function updateClock() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString("en-US", options);
  console.log(date.toLocaleTimeString())

  // Calculate time until next second
  let now = new Date();
  let nextSecond = new Date(now.getTime() + 1000 - now.getMilliseconds());
 ;

  let timeout = nextSecond - now;

  setTimeout(updateClock, timeout);
}

updateClock();
```

### Project -4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;
let maxGuess = 10;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guessNum = parseInt(userInput.value);
    console.log(guessNum);

    validateGuess(guessNum);
  });
}

function validateGuess(guessNum) {
  if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
    alert("Please enter a valid number greator then 0 to 100");
  } else {
    prevGuess.push(guessNum);
    if (numGuess >= maxGuess - 1) {
      clearGuess(guessNum);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      clearGuess(guessNum);
      checkGuess(guessNum);
    }
  }
}

function checkGuess(guessNum) {
  if (guessNum === randomNumber) {
    displayMessage(`You gussed it right`);
    endGame();
  } else if (guessNum < randomNumber) {
    displayMessage(`Number is TOOO small`);
  } else if (guessNum > randomNumber) {
    displayMessage(`Number is TOOO big`);
  }
}

function clearGuess(guessNum) {
  userInput.value = "";
  guessSlot.innerHTML += `${guessNum}, `;
  numGuess++;
  remaining.innerHTML = `${maxGuess - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "new-game">Start new game</h2>`;
  p.classList.add("start");
  startOver.prepend(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#new-game");
  newGameBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${maxGuess - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

### Project -5

```javascript
let maxNumber;

let randomNumber;

let guessNumber;

function startGame() {
  maxNumber = parseInt(prompt("Enter a maximum number"));

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;

  guessNumber = parseInt(prompt("Guess the number"));

  while (true)
    if (guessNumber === "quit") {
      alert(`User quit the game. Random number was ${randomNumber}.`);
      break;
    } else if (guessNumber == randomNumber) {
      gameResult();
      break;
    } else if (guessNumber < randomNumber) {
      guessNumber = prompt(
        `Hint: You guessed a bit small number. Please try again`
      );
    } else {
      guessNumber = prompt(
        `Hint: You guessed a bit large number. Please try again`
      );
    }
}

function gameResult() {
  document.getElementById(
    "result"
  ).innerText = `You guessed it right. Guessed number is ${guessNumber}.`;
}

document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#restart").addEventListener("click", startGame);
```

### Project -6

```JavaScript
//=============== Method-1 ===============
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

//=============== Method-2 ===============

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


```

### Project -7

```javascript
const randomColors = function () {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColors();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
```

### Project -8

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class = "color">

  <table>
  <tr>
    <th>Key</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.code}</td>
  </tr>

</table>
  </div>
  `;
});
```
