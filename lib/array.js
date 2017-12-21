
// ARRAY METHODS ///////////////////////////////////////////////////////////////
let array
export default array = {
  // Calculates the greatest common denominator of an array of numbers
  arrayGcd: arr => { const gcd = (x, y) => !y ? x : gcd(y, x % y); return arr.reduce((a, b) => gcd(a, b)) },
  // Get the max val of an array by spreading its vals as args to Math.max.
  arrayMax: arr => Math.max(...arr),
  // Returns the minimum value in an array
  arrayMin: arr => Math.min(...arr),
  // Chunks an array into smaller arrays of a specified size.
  chunk: (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size)),
  // Remove falsey values from an array.
  compact: arr => arr.filter(Boolean),
  // Count the occurences of an value in an array
  countOccurences: (arr, val) => arr.reduce((acc, v) => v === val ? acc + 1 : acc + 0, 0),
  // Flatten an array
  flatten: arr => arr.reduce((a, v) => a.concat(v), []),
  // Flattens an array up to the specified depth.
  flattenDepth: (arr, depth = 1) => depth !== 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v)
    ? array.flattenDepth(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []),
  // Deep flattens an array.
  deepFlatten: arr => [].concat(...arr.map(v => Array.isArray(v) ? array.deepFlatten(v) : v)),
  // Returns the difference between two arrays.
  difference: (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x))},
  // Filters out all values from an array for which the comparator function does not return true.
  differenceWith: (arr, val, comp) => arr.filter(a => !val.find(b => comp(a, b))),
  // Returns all the distinct values of an array.
  distinceValuesOfArray: arr => [...new Set(arr)],
  // Removes elements in an array untill the passed function returns true. Returns the remaining elements in the array.
  dropElements: (arr, func) => { while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1); return arr },
  // Returns a new array with n elements removed from the right.
  dropRight: (arr, n = 1) => n < arr.length ? arr.slice(0, arr.length - n) : [],
  // Returns every nth element in an array.
  everyNth: (arr, nth) => arr.filter((e, i) => i % nth === 0),
  // Filters out the non-unique values in an array.
  filterNonUnique: arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)),
  // Groups the elements of an array based on the given function
  groupBy: (arr, func) => arr.map(typeof func === 'function' ? func : val => val[func])
    .reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {}),
  // Returns the head of a list
  head: arr => arr[0],
  // Returns all the elements of an array except the last one
  initial: arr => arr.slice(0, -1),
  // Initializes an array containing the numbers in th especified range where start and end are inclusive
  initArrayRange: (end, start = 0) => Array.from({ length: (end + 1) - start}).map((v, i) => i + start),
  // Initializes an array of n length, with 'value' at each index.
  initArrayFill: (n, value = 0) => Array(n).fill(value),
  // Intializes a 2D array of given width and height and value.
  init2dArray: (w, h, val = null) => Array(h).fill().map(() => Array(w).fill(val)),
  // Returns a list of elements that exist in both arrays
  intersection: (a, b) => { const s = new Set(b); return a.filter(x => s.has(x))},
  // Returns the last element in an array.
  last: arr => arr[arr.length - 1],
  // Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.
  mapObject: (arr, fn) =>
  (a => (a = [arr, arr.map(fn)], a[0].reduce((acc, val, i) => (acc[val] = a[1][i], acc), {})))(),
  // Picks the key-value pair corresponding to the given keys from an object
  pick: (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {}),
  // filter out the values specified
  pull: (arr, ...args) => arr.filter((v) => !args.toString().split(',').includes(v)),
  // Returns a random element from an array
  sample: arr => arr[Math.floor(Math.random() * arr.length)],
  // Randomizes the order of the values of an array.
  shuffle: arr => arr.sort(() => Math.random() - 0.5),
  // Returns an array of elements that appear in both arrays.
  similarity: (arr, values) => arr.filter(v => values.includes(v)),
  // Returns the symmetric difference betreen two arrays.
  symmetricDifference: (a, b) => { const sA = new Set(a), sB = new Set(b); return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))] },
  // Returns all elements in an array except for the first one.
  tail: arr => arr.length > 1 ? arr.slice(1) : arr,
  // Returns an array with n elements removed from the beginning
  take: (arr, n = 1) => arr.slice(0, n),
  // Returns an array with n elements removed from the end
  takeRight: (arr, n = 1) => arr.slice(arr.length - n, arr.length),
  // Returns every element that exists in any of the two arrays once.
  union: (a, b) => Array.from(new Set([...a, ...b])),
  // Filters out the elements of an array that have one of the specified values
  without: (arr, ...args) => arr.filter(v => !args.includes(v)),
  // Creates an array of elements, grouped based on the position in the original arrays.
  zip: function(...arrs) {return Array.from({length: Math.max(...arrs.map(x => x.length))}).map((_, i) => Array.from({length: arrs.length}, (_, k) => arrs[k][i]))}
}
