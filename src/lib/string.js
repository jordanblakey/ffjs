// STRING METHODS //////////////////////////////////////////////////////////////
let string
export default string = {
  // Generates all anagrams of a string (contains duplicates).
  anagrams: str => {
    if (str.length <= 2) return string.length === 2 ? [str, str[1] + str[0]] : [str]
    return str.split('').reduce((acc, letter, i) => acc.concat(string.anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
  },
  // Capitalizes the first letter of a string.
  capitalize: ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join('')),
  // Capitaizes the first letter of every word in a string.
  capitalizeEveryWord: str => str.replace((/\b[a-z]/g), char => char.toUpperCase()),
  // Returns number of vowels in provided string.
  countVowels: str => (str.match(/[aeiou]/ig) || []).length,
  // Escapes a string to use in a regular expression.
  escapeRegExp: str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  // Converts a string from camelcase
  fromCamelCase: (str, separator = '_') => str
    .replace((/([a-z\d])([A-Z])/g), '$1' + separator + '$2')
    .replace((/([A-Z]+)([A-Z][a-z\d]+)/g), '$1' + separator + '$2').toLowerCase(),
  // Reverses a string.
  reverseString: str => str.split('').reverse().join(''),
  // Alphabetically sorts the characters in a string.
  sortCharactersInString: str => str.split('').sort((a, b) => a.localeCompare(b)).join(''),
  // Converts a given string into an array of words.
  stringToArrayOfWords: (str, pattern = (/[^a-zA-Z-]+/)) => str.split(pattern).filter(Boolean),
  // Converts a string to camelcase.
  toCamelCase: str => str.replace((/^([A-Z])|[\s-_]+(\w)/g), (match, p1, p2, offset) => p2 ? p2.toUpperCase() : p1.toLowerCase()),
  // Truncates a string up to a specified length.
  truncateString: (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str
}
