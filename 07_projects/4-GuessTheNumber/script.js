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
  p.classList.add("start")
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
