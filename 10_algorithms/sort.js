let arr = [8, 5, 10, 4];

console.log("===Bubble Sort===");

/* bubble sort */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return array;
};
console.log(bubbleSort(arr));

console.log("===Selection Sort===");

/* selection sort */
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    minElement = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minElement] > array[j]) {
        minElement = j;
      }
    }
    const temp = array[minElement];
    array[minElement] = array[i];
    array[i] = temp;
  }
  return array;
};

console.log(selectionSort(arr));

console.log("===Insertion Sort===");

/* insertion sort */
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
  return array;
};
console.log(insertionSort(arr));
