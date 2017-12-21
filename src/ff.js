import array from './lib/array'
import browser from './lib/browser'
import date from './lib/date'
import func from './lib/func'
import math from './lib/math'
import node from './lib/node'
import string from './lib/string'
import util from './lib/util'

const log = console.log

// TEST ARRAY METHODS //////////////////////////////////////////////////////////
// log('arrayGcd:', array.arrayGcd([4, 8, 12]))
// log('arrayMax:', array.arrayMax([10, 1, 5]))
// log('arrayMin:', array.arrayMin([10, 1, 5]))
// log('chunk:', array.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', array.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', array.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', array.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', array.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', array.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', array.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', array.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', array.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', array.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', array.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', array.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', array.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
// log('groupBy:', array.groupBy([6.1, 4.2, 6.3], Math.floor))
// log('head:', array.head([1, 2, 3]))
// log('initial:', array.initial([1, 2, 3]))
// log('initArrayRange:', array.initArrayRange(7, 3))
// log('initArrayFill:', array.initArrayFill(5, 2))
// log('init2DArray:', array.init2dArray(3, 3, 0))
// log('intersection:', array.intersection([1, 2, 3], [4, 3, 2]))
// log('last:', array.last([1, 2, 3]))
// log('mapObject:', array.mapObject([1, 2, 3, 4], a => a * a))
// log('pick:', array.pick({'a':1, 'b':'2', 'c': 3}, ['a', 'c']))
// log('pull:', array.pull(['a', 'b', 'c'], 'a'))
// log('sample:', array.sample([3, 7, 9, 11]))
// log('shuffle:', array.shuffle([1, 2, 3]))
// log('similarity:', array.similarity([1, 2, 3], [1, 2, 4]))
// log('symmetricDifference:', array.symmetricDifference([1, 2, 3], [1, 2, 4]))
// log('tail:', array.tail([1, 2, 3]))
// log('take:', array.take([1, 2, 3, 4, 5], 3))
// log('takeRight:', array.takeRight([1, 2, 3, 4, 5], 3))
// log('union:', array.union([1, 2, 3], [4, 3, 2]))
// log('without:', array.without([2, 1, 2, 3], 1, 2))
// log('zip:', array.zip(['a'], [1, 2], [true, false]))

// TEST BROWSER METHODS ////////////////////////////////////////////////////////
// log('test:', browser.test())

// log('funcname:', browser.funcname())
// log('funcname:', browser.funcname())


// TEST DATE METHODS ///////////////////////////////////////////////////////////
// log('test:', date.test())

// log('funcname:', date.funcname())
// log('funcname:', date.funcname())


// TEST FUNCTION METHODS ///////////////////////////////////////////////////////
// log('test:', func.test())

// log('funcname:', func.funcname())
// log('funcname:', func.funcname())


// TEST MATH METHODS ///////////////////////////////////////////////////////////
// log('arrayAverage:', math.arrayAverage([1, 2, 3]))
// log('arraySum:', math.arraySum([1, 2, 3, 4]))
// log('collatz:', math.collatz(8))
// log('digitize:', math.digitize(2334))
// log('distance:', math.distance(1, 1, 2, 3))
// log('factorial:', math.factorial(6))
// log('fibonacci:', math.fibonacci(5))
// log('gcd:', math.gcd(8, 36))
// log('hammingDisance:', math.hammingDistance(2, 3))
// log('isArmstrongNumber:', math.isArmstrongNumber(1634))
// log('isArmstrongNumber:', math.isArmstrongNumber(371))
// log('isArmstrongNumber:', math.isArmstrongNumber(56))
// log('isDivisible:', math.isDivisible(6, 3))
// log('isEven:', math.isEven(3))
// log('isPrime:', math.isPrime(11))
// log('isPrime:', math.isPrime(12))
// log('isPrime:', math.isPrime(11))
// log('lcm:', math.lcm(12, 7))
// log('median:', math.median(5, 6, 50, 1, -5))
// log('palindrome:', math.palindrome('taco cat'))
// log('percentile:', math.percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
// log('powerset:', math.powerset([1, 2]))
// log('randomIntegerInRange:', math.randomIntegerInRange(0, 5))
// log('randomNumberInRange:', math.randomNumberInRange(2, 10))
// log('round:', math.round(1.005, 2))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21]))
// log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21], true))


// TEST NODE METHODS ///////////////////////////////////////////////////////////
// log('test:', node.test())

// log('funcname:', node.funcname())
// log('funcname:', node.funcname())


// TEST STRING METHODS ///////////////////////////////////////////////////////////
// log('anangrams:', string.anagrams('abc'))
// log('capitalize:', string.capitalize('john'))
// log('capitalizeEveryWord:', string.capitalizeEveryWord('hello world'))
// log('countVowels:', string.countVowels('foobar'))
// log('countVowels:', string.countVowels('gym'))
// log('escapeRegExp:', string.escapeRegExp('(test)'))
// log('fromCamelCase:', string.fromCamelCase('someDatabaseFieldName', ' '))
// log('fromCamelCase (snake):', string.fromCamelCase('someDatabaseFieldName', '_'))
// log('fromCamelCase (kebab):', string.fromCamelCase('someDatabaseFieldName', '-'))
// log('reverseString:', string.reverseString('foobar'))
// log('sortCharactersInString:', string.sortCharactersInString('cabbage'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('I love javaScript!!'))
// log('stringToArrayOfWords:', string.stringToArrayOfWords('python, javaScript & coffee'))
// log('toCamelCase:', string.toCamelCase('some_database_field_name'))
// log('toCamelCase:', string.toCamelCase('Some label that needs to be camelized'))
// log('toCamelCase:', string.toCamelCase('some-javascript-property'))
// log('toCamelCase:', string.toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'))
// log('truncateString:', string.truncateString('boomerang', 7))


// TEST UTILITY METHODS ///////////////////////////////////////////////////////////
// log('coalesce:', util.coalesce(null, undefined, NaN, 'Waldo'))
// const customCoalesce = util.coalesceFactory(x => ![null, undefined, '', NaN].includes(x))
// log('coalesceFactory:', customCoalesce(null, undefined, '', NaN, 'Waldo'))
// log('extendHex:', util.extendHex('#03f'))
// log('getType:', util.getType(3))
// log('getType:', util.getType(new Set([1, 2, 3])))
// log('hexToRGB:', util.hexToRGB('#27ae60ff'))
// log('hexToRGB:', util.hexToRGB('27ae60'))
// log('hexToRGB:', util.hexToRGB('#fff'))
// log('isArray:', util.isArray([1]))
// log('isArray:', util.isArray(1))
// log('isBoolean:', util.isBoolean(null))
// log('isBoolean:', util.isBoolean(true))
// log('isFunction:', util.isFunction('x'))
// log('isFunction:', util.isFunction(x => x))
// log('isNumber:', util.isNumber('1'))
// log('isNumber:', util.isNumber(1))
// log('isString:', util.isString(10))
// log('isString:', util.isString('10'))
// log('isSymbol:', util.isSymbol('x'))
// log('isSymbol:', util.isSymbol(Symbol('x')))
// log('toOrdinalSuffix:', util.toOrdinalSuffix(123))
// log('validateEmail:', util.validateEmail('example@example.com'))
// log('validateEmail:', util.validateEmail('example'))
// log('validateNumber:', util.validateNumber('129387.987987'))
// log('validateNumber:', util.validateNumber(129387.987987))


// COMBINE IMPORTED MODULES INTO A DEFAULT EXPORT //////////////////////////////
let module = {}
module = Object.assign(module, array)
module = Object.assign(module, browser)
module = Object.assign(module, date)
module = Object.assign(module, func)
module = Object.assign(module, math)
module = Object.assign(module, node)
module = Object.assign(module, string)
module = Object.assign(module, util)

// Check methods added
// console.log(module)
export default module


// ALSO ALLOW THEM TO BE IMPORTED INDEPENDENTLY ////////////////////////////////
export {
  array,
  browser,
  date,
  func,
  math,
  node,
  string,
  util
}
