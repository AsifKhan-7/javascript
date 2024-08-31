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
