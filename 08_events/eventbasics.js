// document.getElementById("code").onclick = (e) => {
//   code.style.border = "2px solid red";
//   console.log(e);
// };

//This e object passes as the parameter of the function in addEventListener method()

/* Event object:- type, timestamp, preventDefault(),target, currentTargret, clientX, clientY,screenX, screenY, altkey, ctrlkey, shiftKey, e.key or e.code */

// Event Propogation=> event bubbling(bottom to top) & event capturing(top to bottom)
// {
// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target);

//     console.log("ul clicked");
//   },
//   true
// );
// document.getElementById("code").addEventListener(
//   "click",
//   (e) => {
//     console.log("Child:- click on code");
//     e.stopPropagation();
//     console.log(e);
//   },
//   false
// );
// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     console.log("Click on link");
//     e.preventDefault();
//     e.stopPropagation();
//   },
//   false
// );
// }

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);

      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
  },
  false

  // removeIt.parentNode.removeChild(removeIt);
);
