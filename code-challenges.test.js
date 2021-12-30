// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibonacci", () => {
  it("returns an array in the length of the input and is output as a fibonacci sequence", () => {
    // expected input will be the example values, the output will be our expected output.
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// FAILED: fibonacci is not defined

// b) Create the function that makes the test pass.

// create a function that takes in a num as a param
var input1 = 6;
var input2 = 10;

// create a function that takes in a number and iterates through it
// create a variable that will hold our finished array
const fibonacci = (num) => {
  let newArr = [1, 1];
  // iterate through the new array and have its index value equal it's index's previous iteration + it's two iterations before.
  for (let i = 2; i < num; i++) {
    newArr[i] = newArr[i - 1] + newArr[i - 2];
  }
  return newArr;
};
// console.log(fibonacci(input1));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// a describe method that lists the name of the function OR naming of the particular test.
describe("onlyOdd", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
    // input will be our fullArr variables. The output will be the expected output arrays.
    expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23]);
  });
});

//FAILED: onlyOdd is not defined

// b) Create the function that makes the test pass.

// create a function that takes in an array then filters out everything besides numbers, store in variable
// filter out even numbers and keep only odd, store in new variable
// take newest array and .sort from lowest to highest
// refactor code to be cleaner (applied .filter twice the first variable and deleted the second)

const onlyOdd = (array) => {
  let newArr = array
    .filter((value) => typeof value === "number")
    .filter((value) => {
      return value % 2 !== 0 ? value : null;
    });
  return newArr.sort((firstItem, secondItem) => firstItem - secondItem);
};
// console.log(onlyOdd(fullArr1));

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []

describe("plusArray", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
    // input will be our example variables (numberToAdd). The output will be our expected output values.
    expect(plusArray(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(plusArray(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(plusArray(numbersToAdd3)).toEqual([]);
  });
});

// FAILED: plusArray is not defined

// b) Create the function that makes the test pass.

//create a function that takes in an array.
const plusArray = (array) => {
  // declare a variable containing an empty array.
  let newArr = [];
  // use reduce method to iterate through our array. Declare the use of previous, current, and index values. Then have our newArr index value equal the arrays previous value + the current iteration value. If no values are present in the array, than the function will return empty.
  array.reduce(
    (previousVal, currentVal, i) => (newArr[i] = previousVal + currentVal),
    0
  );
  return newArr;
};
// console.log(plusArray(numbersToAdd1));
// console.log(plusArray(numbersToAdd2));
// console.log(plusArray(numbersToAdd3));
