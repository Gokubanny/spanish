// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


// Array Functions

// 4. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter Array (example: filter even numbers)
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}


// Mathematical Functions

// 8. Factorial
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// 9. Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}


// Example Usage (Uncomment to test)
// console.log(reverseString("hello")); // "olleh"
// console.log(countCharacters("hello")); // 5
// console.log(capitalizeWords("hello world")); // "Hello World"

// console.log(findMax([1, 4, 9])); // 9
// console.log(findMin([1, 4, 9])); // 1
// console.log(sumArray([1, 2, 3])); // 6
// console.log(filterArray([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]

// console.log(factorial(5)); // 120
// console.log(isPrime(7)); // true
// console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
