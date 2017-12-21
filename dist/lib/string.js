'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// STRING METHODS //////////////////////////////////////////////////////////////
var string = void 0;
exports.default = string = {
  // Tests that the module was imported correctly.
  test: function test() {
    return 'Hello from string module';
  },
  // Generates all anagrams of a string (contains duplicates).
  anagrams: function anagrams(str) {
    if (str.length <= 2) return string.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce(function (acc, letter, i) {
      return acc.concat(string.anagrams(str.slice(0, i) + str.slice(i + 1)).map(function (val) {
        return letter + val;
      }));
    }, []);
  },
  // Capitalizes the first letter of a string.
  capitalize: function capitalize(_ref) {
    var _ref2 = _toArray(_ref),
        first = _ref2[0],
        rest = _ref2.slice(1);

    var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
  },
  // Capitaizes the first letter of every word in a string.
  capitalizeEveryWord: function capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, function (char) {
      return char.toUpperCase();
    });
  },
  // Returns number of vowels in provided string.
  countVowels: function countVowels(str) {
    return (str.match(/[aeiou]/ig) || []).length;
  },
  // Escapes a string to use in a regular expression.
  escapeRegExp: function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },
  // Converts a string from camelcase
  fromCamelCase: function fromCamelCase(str) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
  },
  // Reverses a string.
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
  // Alphabetically sorts the characters in a string.
  sortCharactersInString: function sortCharactersInString(str) {
    return str.split('').sort(function (a, b) {
      return a.localeCompare(b);
    }).join('');
  },
  // Converts a given string into an array of words.
  stringToArrayOfWords: function stringToArrayOfWords(str) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[^a-zA-Z-]+/;
    return str.split(pattern).filter(Boolean);
  },
  // Converts a string to camelcase.
  toCamelCase: function toCamelCase(str) {
    return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
      return p2 ? p2.toUpperCase() : p1.toLowerCase();
    });
  },
  // Truncates a string up to a specified length.
  truncateString: function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
  }
};