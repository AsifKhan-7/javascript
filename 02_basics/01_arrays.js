//Arrays

let myArr = [0, 1, 2, 3, 4, 5]; //Array is created using array literal

// console.log(myArr[3]);
// console.log(myArr[myArr.length - 1]); //accessing the last element of array

// const newArr = new Array(10, 11, 12, 13, 14, 15, 16);//Array is created using array constructor

// console.log(newArr);
// console.log(newArr[11]);
// console.log( `Length of the array is: ${newArr.length}`);

// newArr.length = 11; //increase th array length to 11
// console.log(newArr);

// newArr.length = 5;
// console.log(newArr); //decrease the length to 5

// console.log(newArr.toString());



//Array Methods

// myArr.push(6); //push the element at the end of array and returns the new length of array(this is the copy of original array)

// myArr.push(7);

// myArr.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArr.unshift(10); //Inserts new elements at the start of an array, and returns the new length of the array.

// myArr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.




// console.log(myArr.includes(12)); //Determines whether an array includes a certain element, returning true or false as appropriate.type will be boolean

// console.log(myArr.indexOf(9)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.



// const newArr = myArr.join(); //Adds all the elements of an array into a string, separated by the specified separator string. type will be string 

// console.log(newArr);

// console.log(myArr);


//slice, splice

console.log("A =>", myArr);

const myNewArr = myArr.slice(1, 3);

//The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.


console.log(myNewArr);

console.log("B =>", myArr);

const myNewArr1 = myArr.splice(1, 3);

console.log("C =>", myArr);


console.log(myNewArr1);
