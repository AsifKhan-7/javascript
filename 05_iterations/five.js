// forEach loop

// const coding = ["js", "ruby", "java", "python", "C++"];
// const newArr = [];
// coding.forEach(function (element) {
//   console.log(element);
// });

// coding.forEach((element) => {
//   console.log(element);
// });

// coding.forEach(print);

// function print(element) {
//   newArr.push(element)
// }
// console.log(newArr)

// coding.forEach((element, index, array) => {
//   console.log(element, index, array);
//   console.log(index);
//   console.log(array);
//   console.log("=============================================");
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageExtension: ".js",
  },
  {
    languageName: "Python",
    languageExtension: ".py",
  },
  {
    languageName: "C++",
    languageExtension: ".cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item);
  console.log(item.languageName);
});
