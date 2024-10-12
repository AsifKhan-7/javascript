//Problem-1

function isOddOrEven(num) {
  let rem = num % 2;
  let isOdd = rem === 1;
  return isOdd;
}

console.log(isOddOrEven(45550));

// problem-2

function findLarger(one, two) {
  // if (one > two) {
  //   return one;
  // } else {
  //   return two;
  // }

  return one > two ? one : two;
}

console.log(findLarger(1908, 1907));
console.log(findLarger(23567568, 2443676));
console.log(findLarger(13132, 43364567));

//problem-3

function convertTemp(celciusVal) {
  return (9 / 5) * celciusVal + 32;
}

console.log(convertTemp(41));
