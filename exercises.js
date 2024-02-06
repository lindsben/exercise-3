let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list) {
  // Return a flattened array of all of the arrays using the reduce method
  let result = list.reduce((previousValue, currentValue) =>
    previousValue.concat(currentValue)
  );
  return result;
}

console.log(flattening(arrays));

//Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
export function loop(value, test, update, body) {
  for (let curValue = value; test(curValue); curValue = update(curValue)) {
    body(curValue);
  }
  // Each iteration, it first runs the test function on the current loop value and stops
  // if that returns false. Then it calls the body function, giving it the current value.
  // Finally, it calls the update function to create a new value and starts from the beginning.
}
// Your code here.
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// Every single value when tested must return true for the entire function to return true
export function everyLoop(array, test) {
  let curResult = true;
  for (let item of array) {
    //console.log(test(item));
    curResult = curResult && test(item);
  }
  return curResult;
}

export function everySome(array, test) {
  return !array.some((value) => !test(value));
}

console.log("Should be true");
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log("Should be false");
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log("Should be true");
console.log(everySome([], (n) => n < 10));
// → true
