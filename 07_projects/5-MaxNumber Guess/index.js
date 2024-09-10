// let maxNumber = parseInt(prompt("Enter maximum Number"));

// let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

// let guessNumber = parseInt(prompt("Guess the number"));

// while (true) {
//   if (guessNumber === "quit") {
//     alert(`You quit the game. Random Number was ${randomNumber}`);
//     break;

//   } else if (guessNumber === randomNumber) {
//     gameResult();
//     startGame();
//     break;

//   } else if (guessNumber < randomNumber) {
//     guessNumber = parseInt(
//       prompt("Hint: " + "You guessed a bit small number. Please try again")
//     );

//   } else {
//     guessNumber = parseInt(
//       prompt("Hint: " + "You guessed a bit large number. Please try again")
//     );
//   }
// }

// function gameResult() {
//   document.getElementById(
//     "result"
//   ).innerText = `You guessed it right. Guess number is ${randomNumber} and Random number is also ${guessNumber}.`;
// }

// function startGame() {
//   document.getElementById("start").addEventListener("click", () => {
//     maxNumber = parseInt(prompt("Enter maximum Number"));
//     randomNumber = Math.floor(Math.random() * maxNumber) + 1;
//     guessNumber = parseInt(prompt("Guess the number"));
//   });
// }

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
  document.getElementById( "result").innerText = `You guessed it right. Guessed number is ${guessNumber}.`;
}

document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#restart").addEventListener("click", startGame);


