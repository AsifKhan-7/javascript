// const coding = ["js", "ruby", "java", "python", "C++"];

// const values = coding.forEach((el) => {
//   // console.log(el); forEach does return nothing/ returns undefined
//   return el;
// });

// console.log(values)

// filter method
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) =>  (num > 4)); //implicit return

// const newNums = myNums.filter((num) => {
//   return num > 4; // it is has to use return keyword if not return [] empty array
// });

// console.log(newNums);

// ==========================================================================================

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// is trah se forEach se value return kar sakte hn
//===========================================================================================

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: 1960,
    edition: 1999
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: 2003
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publish: 1925,
    edition: 2004
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publish: 1851,
    edition: 1998
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publish: 1932,
    edition: 2008
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: 1951,
    edition: 2011
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2012
  },
  {
    title: "Fahrenheit 451",
    genre: "Dystopian",
    publish: 1953,
    edition: 2000
  },
  {
    title: "Little Women",
    genre: "Classic",
    publish: 1868,
    edition: 2015
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: 2007
  }
];




let userBooks = books.filter( (book) => {
  return book.genre === "Classic";
} );


 userBooks = books.filter( (book) => {
  return book.publish >= 1840 || book.genre === "Romace";
})

console.log(userBooks);