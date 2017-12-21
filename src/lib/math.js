// MATH METHODS ////////////////////////////////////////////////////////////////
let math
export default math = {
  // Returns the average of an array of numbers.
  arrayAverage: (x) => x.reduce((acc, val) => acc + val, 0) / x.length,
  // Returns the sum of an array of numbers.
  arraySum: (x) => x.reduce((acc, val) => acc + val, 0),
  // Applies the Collatz algorithm.
  collatz: (x) => (x % 2 === 0) ? (x / 2) : (3 * n + 1),
  // Converts a number to an array of digits.
  digitize: (x) => [...'' + x].map(i => parseInt(i, 10)),
  // Returns the distance between two points.
  distance: (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0),
  // Calculates the factorial of a number
  factorial: (x) => x < 0 ? (() => {
    throw new TypeError('Negative numbers are not allowed.') })()
    : x <= 1 ? 1 : x * math.factorial(x - 1),
  // Generates an array, containing the Fibonacci sequence, up until the nth term.
  fibonacci: (x) => Array(x).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i -2] : i), [] ),
  // Calculates the greatest common divisor between two numbers.
  gcd: (x, y) => !x ? x : math.gcd(y, x % y),
  // Calculates the Hamming distance between two values.
  hammingDistance: (x, y) => ((x ^ y).toString(2).match(/1/g) || '').length,
  // Checks if the given number is an armstrong number or not.
  isArmstrongNumber: (digits) => (arr => arr.reduce((a, d) => a + Math.pow(parseInt(d, 10), arr.length), 0) === digits ? true : false)((digits + '').split('')),
  // Checks if the first numberic argument is divisible by the second one.
  isDivisible: (dividend, divisor) => dividend % divisor === 0,
  // Returns true if the given number is even, false otherwise.
  isEven: (x) => x % 2 === 0,
  // Checks if the provided integer is a prime number.
  isPrime: (x) => { for (let i = 2; i < x; i++) {if (x % i === 0) {return false}} return x >= 2 },
  // Returns the least common multiple of two numbers.
  lcm: (x, y) => { const gcd = (a, b) => !b ? a : gcd(b, a % b); return Math.abs(x * y) / (gcd(x, y)); },
  // Returns the median of an array of numbers.
  median: (arr) => { const mid = Math.floor(arr.length / 2), nums = [...arr].sort((a, b) => a - b); return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2; },
  // Returns true if the given string is a palindrome, false otherwise
  palindrome: (str) => { const s = str.toLowerCase().replace(/[\W_]/g, ''); return s === s.split('').reverse().join(''); },
  // Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.
  percentile: (arr, val) => 100 * arr.reduce((acc,v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) / arr.length,
  // Returns the powerset of a given array of numbers.
  powerset: (arr) => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]),
  // Returns a random integer in a specified range.
  randomIntegerInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  // Returnas a randome number in a specified range.
  randomNumberInRange: (min, max) => Math.random() * (max - min) + min,
  // Rounds a number to a specified amount of digits.
  round: (x, decimals = 0) => Number(`${Math.round(`${x}e${decimals}`)}e-${decimals}`),
  // Returns the standard deviation of an array of numbers.
  standardDeviation: (arr, usePopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(arr.reduce((acc, val) => acc.concat(Math.pow(val - mean, 2)), []).reduce((acc, val) => acc + val, 0) / (arr.length - (usePopulation ? 0 : 1)));
  }
}
