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
let numGuess = 1;

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
  if (isNaN(guessNum)) {
    alert("Please enter a valid number");
  } else if (guessNum < 1) {
    alert("Please enter a valid number");
  } else if (guessNum > 100) {
    alert("Please enter the number less than or equal to 100");
  } else {
    prevGuess.push(guessNum);
    if (numGuess === 11) {
      displayGuess(guessNum);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guessNum);
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

function displayGuess(guessNum) {
  userInput.value = "";
  guessSlot.innerHTML += `${guessNum}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "new-game">Start new game</h2>`;
  startOver.prepend(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#new-game");
  newGameBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```