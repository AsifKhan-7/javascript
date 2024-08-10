const marvelHeros = ["thor", "spiderman", "Ironman"];

const dcHeros = ["Batman", "Flash", "Superman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const newArr = marvelHeros.concat(dcHeros);

// console.log(newArr);

const allHeros = [...marvelHeros, ...dcHeros];

// console.log(allHeros);

const anArray = [1, 2, 3, [4, 5, 6, 4], 7, [8, 9, [10, 11, 12]]];

// const useableArr = anArray.flat(Infinity);

// console.log(useableArr);

// Consolas, 'Courier New', monospace => IDE font family

// console.log(Array.isArray("Asif"));//returns a boolean value

// console.log(Array.from("Asif")); //returns an array from an iterable object

console.log(Array.from({ name: "Asif", role: "Developer" })); //because of plain object returns []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));//returns an array from arguments
