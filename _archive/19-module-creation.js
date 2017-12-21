
// MODULE CREATION /////////////////////////////////////////////////////////////

module.exports = {
  // Calculates the greatest common denominator of an array of numbers
  gcd: arr => {
    const gcd = (x, y) => !y ? x : gcd(y, x % y)
    return arr.reduce((a, b) => gcd(a, b))
  },
  // Get the max val of an array by spreading its vals as args to Math.max.
  arrayMax: array => Math.max(...array),
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
    ? module.exports.flattenDepth(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []),
  // Deep flattens an array.
  deepFlatten: arr => [].concat(...arr.map(v => Array.isArray(v) ? module.exports.deepFlatten(v) : v)),
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
  // Maps the values of an array to an object using a function, where the key-value pairs
  // consist of the original value as the key and the mapped value.
  mapObject: (arr, fn) =>
  (a => (a = [arr, arr.map(fn)], a[0].reduce((acc, val, i) => (acc[val] = a[1][i], acc), {})))(),
}

// TESTING /////////////////////////////////////////////////////////////////////

// const log = console.log
// log('arrayMax:', module.exports.arrayMax([10, 1, 5]))
// log('arrayMin:', module.exports.arrayMin([10, 1, 5]))
// log('chunk:', module.exports.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', module.exports.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', module.exports.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', module.exports.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', module.exports.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', module.exports.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', module.exports.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', module.exports.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', module.exports.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', module.exports.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', module.exports.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', module.exports.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', module.exports.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
// log('groupBy:', module.exports.groupBy([6.1, 4.2, 6.3], Math.floor))
// log('head:', module.exports.head([1, 2, 3]))
// log('initial:', module.exports.initial([1, 2, 3]))
// log('initArrayRange:', module.exports.initArrayRange(7, 3))
// log('initArrayFill:', module.exports.initArrayFill(5, 2))
// log('intersection:', module.exports.intersection([1, 2, 3], [4, 3, 2]))
// log('last:', module.exports.last([1, 2, 3]))
// log('mapObject:', module.exports.mapObject([1, 2, 3, 4], a => a * a))

// log('funcname:', module.exports.)
