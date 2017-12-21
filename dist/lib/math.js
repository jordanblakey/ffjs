'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// MATH METHODS ////////////////////////////////////////////////////////////////
var math = void 0;
exports.default = math = {
  // Returns the average of an array of numbers.
  arrayAverage: function arrayAverage(x) {
    return x.reduce(function (acc, val) {
      return acc + val;
    }, 0) / x.length;
  },
  // Returns the sum of an array of numbers.
  arraySum: function arraySum(x) {
    return x.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  },
  // Applies the Collatz algorithm.
  collatz: function collatz(x) {
    return x % 2 === 0 ? x / 2 : 3 * n + 1;
  },
  // Converts a number to an array of digits.
  digitize: function digitize(x) {
    return [].concat(_toConsumableArray('' + x)).map(function (i) {
      return parseInt(i, 10);
    });
  },
  // Returns the distance between two points.
  distance: function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
  },
  // Calculates the factorial of a number
  factorial: function factorial(x) {
    return x < 0 ? function () {
      throw new TypeError('Negative numbers are not allowed.');
    }() : x <= 1 ? 1 : x * math.factorial(x - 1);
  },
  // Generates an array, containing the Fibonacci sequence, up until the nth term.
  fibonacci: function fibonacci(x) {
    return Array(x).fill(0).reduce(function (acc, val, i) {
      return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
    }, []);
  },
  // Calculates the greatest common divisor between two numbers.
  gcd: function gcd(x, y) {
    return !x ? x : math.gcd(y, x % y);
  },
  // Calculates the Hamming distance between two values.
  hammingDistance: function hammingDistance(x, y) {
    return ((x ^ y).toString(2).match(/1/g) || '').length;
  },
  // Checks if the given number is an armstrong number or not.
  isArmstrongNumber: function isArmstrongNumber(digits) {
    return function (arr) {
      return arr.reduce(function (a, d) {
        return a + Math.pow(parseInt(d, 10), arr.length);
      }, 0) === digits ? true : false;
    }((digits + '').split(''));
  },
  // Checks if the first numberic argument is divisible by the second one.
  isDivisible: function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  },
  // Returns true if the given number is even, false otherwise.
  isEven: function isEven(x) {
    return x % 2 === 0;
  },
  // Checks if the provided integer is a prime number.
  isPrime: function isPrime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }return x >= 2;
  },
  // Returns the least common multiple of two numbers.
  lcm: function lcm(x, y) {
    var gcd = function gcd(a, b) {
      return !b ? a : gcd(b, a % b);
    };return Math.abs(x * y) / gcd(x, y);
  },
  // Returns the median of an array of numbers.
  median: function median(arr) {
    var mid = Math.floor(arr.length / 2),
        nums = [].concat(_toConsumableArray(arr)).sort(function (a, b) {
      return a - b;
    });return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },
  // Returns true if the given string is a palindrome, false otherwise
  palindrome: function palindrome(str) {
    var s = str.toLowerCase().replace(/[\W_]/g, '');return s === s.split('').reverse().join('');
  },
  // Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.
  percentile: function percentile(arr, val) {
    return 100 * arr.reduce(function (acc, v) {
      return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0);
    }, 0) / arr.length;
  },
  // Returns the powerset of a given array of numbers.
  powerset: function powerset(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(a.map(function (r) {
        return [v].concat(r);
      }));
    }, [[]]);
  },
  // Returns a random integer in a specified range.
  randomIntegerInRange: function randomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  // Returnas a randome number in a specified range.
  randomNumberInRange: function randomNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
  },
  // Rounds a number to a specified amount of digits.
  round: function round(x) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number(Math.round(x + 'e' + decimals) + 'e-' + decimals);
  },
  // Returns the standard deviation of an array of numbers.
  standardDeviation: function standardDeviation(arr) {
    var usePopulation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var mean = arr.reduce(function (acc, val) {
      return acc + val;
    }, 0) / arr.length;
    return Math.sqrt(arr.reduce(function (acc, val) {
      return acc.concat(Math.pow(val - mean, 2));
    }, []).reduce(function (acc, val) {
      return acc + val;
    }, 0) / (arr.length - (usePopulation ? 0 : 1)));
  }
};