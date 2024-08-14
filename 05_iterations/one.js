// for

for (let i = 1; i <= 10; i++) {
  const element = i;
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`This is outer loop ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and Outer loop value ${i}`)
    // console.log(i + " * " + j + " = " + i * j);
  }
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  // console.log(element)
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i === 7) {
    //console.log(`${i} is detected`);
    break;
  }

  //console.log(`Value of i is ${i}`);
}



for (let i = 1; i <= 20; i++) {
  if (i === 7) {
    console.log(`${i} is detected`);
    continue;
  }

  console.log(`Value of i is ${i}`);
}
