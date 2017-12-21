'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// ARRAY METHODS ///////////////////////////////////////////////////////////////
var array = void 0;
exports.default = array = {
  // Calculates the greatest common denominator of an array of numbers
  arrayGcd: function arrayGcd(arr) {
    var gcd = function gcd(x, y) {
      return !y ? x : gcd(y, x % y);
    };return arr.reduce(function (a, b) {
      return gcd(a, b);
    });
  },
  // Get the max val of an array by spreading its vals as args to Math.max.
  arrayMax: function arrayMax(arr) {
    return Math.max.apply(Math, _toConsumableArray(arr));
  },
  // Returns the minimum value in an array
  arrayMin: function arrayMin(arr) {
    return Math.min.apply(Math, _toConsumableArray(arr));
  },
  // Chunks an array into smaller arrays of a specified size.
  chunk: function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
      return arr.slice(i * size, i * size + size);
    });
  },
  // Remove falsey values from an array.
  compact: function compact(arr) {
    return arr.filter(Boolean);
  },
  // Count the occurences of an value in an array
  countOccurences: function countOccurences(arr, val) {
    return arr.reduce(function (acc, v) {
      return v === val ? acc + 1 : acc + 0;
    }, 0);
  },
  // Flatten an array
  flatten: function flatten(arr) {
    return arr.reduce(function (a, v) {
      return a.concat(v);
    }, []);
  },
  // Flattens an array up to the specified depth.
  flattenDepth: function flattenDepth(arr) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return depth !== 1 ? arr.reduce(function (a, v) {
      return a.concat(Array.isArray(v) ? array.flattenDepth(v, depth - 1) : v);
    }, []) : arr.reduce(function (a, v) {
      return a.concat(v);
    }, []);
  },
  // Deep flattens an array.
  deepFlatten: function deepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
      return Array.isArray(v) ? array.deepFlatten(v) : v;
    })));
  },
  // Returns the difference between two arrays.
  difference: function difference(a, b) {
    var s = new Set(b);return a.filter(function (x) {
      return !s.has(x);
    });
  },
  // Filters out all values from an array for which the comparator function does not return true.
  differenceWith: function differenceWith(arr, val, comp) {
    return arr.filter(function (a) {
      return !val.find(function (b) {
        return comp(a, b);
      });
    });
  },
  // Returns all the distinct values of an array.
  distinceValuesOfArray: function distinceValuesOfArray(arr) {
    return [].concat(_toConsumableArray(new Set(arr)));
  },
  // Removes elements in an array untill the passed function returns true. Returns the remaining elements in the array.
  dropElements: function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr = arr.slice(1);
    }return arr;
  },
  // Returns a new array with n elements removed from the right.
  dropRight: function dropRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return n < arr.length ? arr.slice(0, arr.length - n) : [];
  },
  // Returns every nth element in an array.
  everyNth: function everyNth(arr, nth) {
    return arr.filter(function (e, i) {
      return i % nth === 0;
    });
  },
  // Filters out the non-unique values in an array.
  filterNonUnique: function filterNonUnique(arr) {
    return arr.filter(function (i) {
      return arr.indexOf(i) === arr.lastIndexOf(i);
    });
  },
  // Groups the elements of an array based on the given function
  groupBy: function groupBy(arr, func) {
    return arr.map(typeof func === 'function' ? func : function (val) {
      return val[func];
    }).reduce(function (acc, val, i) {
      acc[val] = (acc[val] || []).concat(arr[i]);return acc;
    }, {});
  },
  // Returns the head of a list
  head: function head(arr) {
    return arr[0];
  },
  // Returns all the elements of an array except the last one
  initial: function initial(arr) {
    return arr.slice(0, -1);
  },
  // Initializes an array containing the numbers in th especified range where start and end are inclusive
  initArrayRange: function initArrayRange(end) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Array.from({ length: end + 1 - start }).map(function (v, i) {
      return i + start;
    });
  },
  // Initializes an array of n length, with 'value' at each index.
  initArrayFill: function initArrayFill(n) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Array(n).fill(value);
  },
  // Intializes a 2D array of given width and height and value.
  init2dArray: function init2dArray(w, h) {
    var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Array(h).fill().map(function () {
      return Array(w).fill(val);
    });
  },
  // Returns a list of elements that exist in both arrays
  intersection: function intersection(a, b) {
    var s = new Set(b);return a.filter(function (x) {
      return s.has(x);
    });
  },
  // Returns the last element in an array.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.
  mapObject: function mapObject(arr, fn) {
    return function (a) {
      return a = [arr, arr.map(fn)], a[0].reduce(function (acc, val, i) {
        return acc[val] = a[1][i], acc;
      }, {});
    }();
  },
  // Picks the key-value pair corresponding to the given keys from an object
  pick: function pick(obj, arr) {
    return arr.reduce(function (acc, curr) {
      return curr in obj && (acc[curr] = obj[curr]), acc;
    }, {});
  },
  // filter out the values specified
  pull: function pull(arr) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return arr.filter(function (v) {
      return !args.toString().split(',').includes(v);
    });
  },
  // Returns a random element from an array
  sample: function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  // Randomizes the order of the values of an array.
  shuffle: function shuffle(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  },
  // Returns an array of elements that appear in both arrays.
  similarity: function similarity(arr, values) {
    return arr.filter(function (v) {
      return values.includes(v);
    });
  },
  // Returns the symmetric difference betreen two arrays.
  symmetricDifference: function symmetricDifference(a, b) {
    var sA = new Set(a),
        sB = new Set(b);return [].concat(_toConsumableArray(a.filter(function (x) {
      return !sB.has(x);
    })), _toConsumableArray(b.filter(function (x) {
      return !sA.has(x);
    })));
  },
  // Returns all elements in an array except for the first one.
  tail: function tail(arr) {
    return arr.length > 1 ? arr.slice(1) : arr;
  },
  // Returns an array with n elements removed from the beginning
  take: function take(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(0, n);
  },
  // Returns an array with n elements removed from the end
  takeRight: function takeRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(arr.length - n, arr.length);
  },
  // Returns every element that exists in any of the two arrays once.
  union: function union(a, b) {
    return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
  },
  // Filters out the elements of an array that have one of the specified values
  without: function without(arr) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return arr.filter(function (v) {
      return !args.includes(v);
    });
  },
  // Creates an array of elements, grouped based on the position in the original arrays.
  zip: function zip() {
    for (var _len3 = arguments.length, arrs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arrs[_key3] = arguments[_key3];
    }

    return Array.from({ length: Math.max.apply(Math, _toConsumableArray(arrs.map(function (x) {
        return x.length;
      }))) }).map(function (_, i) {
      return Array.from({ length: arrs.length }, function (_, k) {
        return arrs[k][i];
      });
    });
  }
};