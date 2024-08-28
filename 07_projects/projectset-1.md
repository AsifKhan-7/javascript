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