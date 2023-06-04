function findThirdLargest(array, k) {
  // i'm using the sort function here because it's the fastest
  // it's also included in the base javascript methods.
  array.sort((a, b) => b - a);
  // b-a to get the largest first.
  if (array.length < 3) {
    // i'm putting this here as a test case
    // if the array length is less than 3, return null.
    // we can also output the 2nd largest, but that's not the question in this case.
    return null;
  }
  return array[k - 1];
}

// array can be anything, really. 
// if it's below 3, it'll simply return 'null'
const array = [
  4, 2, 7, 1, 5, 9, 15, 23, 44, 11, 55, 21, 42, 199, 400, 412, 2112,
];

// 3rd largest
const k = 3;

// this is when you get the answer
const thirdLargest = findThirdLargest(array, k);
// console log of the answer
console.log(thirdLargest);

// this section is just for you to see how it will look like once the array is sorted. aesthetics only.
const sortedArray = array.sort((a, b) => b - a);
console.log(sortedArray);

// to run it and see for yourself, please run
// node powertest-qn.js
