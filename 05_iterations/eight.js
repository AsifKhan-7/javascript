// Reduce method

const myNums = [1, 2, 3, 4];
const initialValue = 0;

const total = myNums.reduce((accumulator, currentValue) => {
  // console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentValue}`);
  return accumulator + currentValue;
}, initialValue);

// console.log(total);

const courses = [
  {
    courseName: "JavaScript Essentials",
    coursePrice: 1200,
    courseDuration: "3 months",
  },
  {
    courseName: "Advanced Python Programming",
    coursePrice: 1450,
    courseDuration: "5 months",
  },
  {
    courseName: "Web Development Bootcamp",
    coursePrice: 2200,
    courseDuration: "6 months",
  },
  {
    courseName: "Data Science with R",
    coursePrice: 1700,
    courseDuration: "4 months",
  },
  {
    courseName: "Machine Learning Basics",
    coursePrice: 1900,
    courseDuration: "5 months",
  },
];

const totalPrice = courses.reduce((acc, item) => {
  console.log(`${acc} and price ${item.coursePrice}`);
  return acc + item.coursePrice;
}, 0);

console.log(`Total price is: ${totalPrice}`);













// const myNums = [1, 2, 3, 4];
// const initialValue = 0;

// const total = myNums.reduce( (accumulator, currentValue) => {
//   console.log(Accumulator: ${accumulator} and CurrentValue: ${currentValue});
//   return  accumulator + currentValue;
// }, initialValue);

// console.log(total);
// ye maine reduce ka example liya samjhne ke liye reduce ko mujhe kuch aise btao iska usage jo organizations me hota hai. uske example bhi btao mujhe btao ki real life me companies me kasie kaam hota hai in methods ko kaise waha kaise use kiya jata hai? hinglish me btao
