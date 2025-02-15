// function hello() {
//   console.log("Inside hello funtion");

//   console.log("Hello");
// }

// function demo() {
//   console.log("Calling hello funtion");

//   hello();
// }

// console.log("Calling demo funtion");

// demo();

// console.log("Done calls completed");

// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

// let firstNum = 10;
// console.log(firstNum);
// let secondNum = 20;
// console.log(secondNum);

// console.log(`Sum: ${firstNum + secondNum}`);

// setTimeout(() => {
//   console.log("This is Web API");
// }, 2000);

// console.log("It's built-in with JS runtime enviornment");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     document.querySelector("h1").style.color = color;

//     if (nextColorChange) {
//       nextColorChange();
//     }
//   }, delay);
// }

// changeColor("#00ff00", 1000, () => {
//   changeColor("#0000ff", 1000, () => {
//     changeColor("#ff0000", 1000, () => {
//       changeColor("#FFB22C", 1000, () => {
//         changeColor("#B3D8A8", 1000);
//       });
//     });
//   });
// });

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   console.log(internetSpeed);

//   if (internetSpeed > 4) {
//     success(data);
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "BigOh",
//   (data) => {
//     console.log("Success1: Data saved.", data);
//     saveToDb(
//       "Hello world!",
//       (data) => {
//         console.log("Success2: Data saved.", data);
//         saveToDb(
//           "3rd saveToDb call",
//           (data) => {
//             console.log("Success3:", data);
//           },
//           () => {
//             console.log("Failure3: data wasn't saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2: Weak connection, data was not saved");
//       }
//     );
//   },

//   () => {
//     console.log("Failure1: Weak connection, data was not saved.");
//   }
// );

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);

    if (internetSpeed > 4) {
      resolve("Success: Data was saved");
    } else {
      reject("Failure: Weack connetion, data was not saved");
    }
  });
}

saveToDb("JavaScript")
  .then((result) => {
    console.log("Data1 saved");
    console.log("result of promise", result);
    return saveToDb("Hello World!");
  })
  .then((result) => {
    console.log("Data2 saved", result);
    console.log("result of promise", result);
    return saveToDb("JS developer");
  })
  .then((result) => {
    console.log("Data3 saved", result);
    console.log("result of promise", result);
  })
  .catch((error) => {
    console.log("Promise rejected", error);
  });
