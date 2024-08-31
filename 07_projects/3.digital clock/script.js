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
