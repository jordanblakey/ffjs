# ffjs

Lightweight, modular utility functions for arrays, browser, dates, strings, math, and more.

## Installation

```sh
npm install ffjs
# OR
yarn add ffjs
```

## Usage

Everything:

``` js
import ff from 'ffjs'
// OR
const ff = require('ffjs').default
```

Single Module:

``` js
import { array } from 'ffjs'
const array = require('ffjs').array
```

## Examples by Function Category

Use these to test any function.

```js
// TEST ARRAY FUNCTIONS ////////////////////////////////////////////////////////
log('arrayGcd:', array.arrayGcd([4, 8, 12]))
log('arrayMax:', array.arrayMax([10, 1, 5]))
log('arrayMin:', array.arrayMin([10, 1, 5]))
log('chunk:', array.chunk([1, 2, 3, 4, 5], 2))
log('compact:', array.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
log('countOccurences:', array.countOccurences([1, 1, 2, 1, 2, 3], 1))
log('flatten:', array.flatten([1, [2], [3, [4]]]))
log('flattenDepth:', array.flattenDepth([1, [2], [[[3], 4], 5]], 2))
log('deepFlatten', array.deepFlatten([1, [2], [[3], 4], 5]))
log('difference:', array.difference([1, 2, 3], [1, 2, 4]))
log('differenceWith:', array.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
log('distictValuesOfArray:', array.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
log('dropElements:', array.dropElements([1, 2, 3, 4], n => n >= 3))
log('dropRight:', array.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
log('everyNth:', array.everyNth([1, 2, 3, 4, 5, 6], 2))
log('filterNonUnique', array.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
log('groupBy:', array.groupBy([6.1, 4.2, 6.3], Math.floor))
log('head:', array.head([1, 2, 3]))
log('initial:', array.initial([1, 2, 3]))
log('initArrayRange:', array.initArrayRange(7, 3))
log('initArrayFill:', array.initArrayFill(5, 2))
log('init2DArray:', array.init2dArray(3, 3, 0))
log('intersection:', array.intersection([1, 2, 3], [4, 3, 2]))
log('last:', array.last([1, 2, 3]))
log('mapObject:', array.mapObject([1, 2, 3, 4], a => a * a))
log('pick:', array.pick({'a':1, 'b':'2', 'c': 3}, ['a', 'c']))
log('pull:', array.pull(['a', 'b', 'c'], 'a'))
log('sample:', array.sample([3, 7, 9, 11]))
log('shuffle:', array.shuffle([1, 2, 3]))
log('similarity:', array.similarity([1, 2, 3], [1, 2, 4]))
log('symmetricDifference:', array.symmetricDifference([1, 2, 3], [1, 2, 4]))
log('tail:', array.tail([1, 2, 3]))
log('take:', array.take([1, 2, 3, 4, 5], 3))
log('takeRight:', array.takeRight([1, 2, 3, 4, 5], 3))
log('union:', array.union([1, 2, 3], [4, 3, 2]))
log('without:', array.without([2, 1, 2, 3], 1, 2))
log('zip:', array.zip(['a'], [1, 2], [true, false]))


// TEST BROWSER FUNCTIONS //////////////////////////////////////////////////////
log('arrayToHtmlList:', browser.arrayToHtmlList(['item 1', 'item 2'],'myListID'))
log('bottomVisible:', browser.bottomVisible())
log('currentUrl:', browser.currentUrl())
log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el))
log('elementIsVisibleInViewport:', browser.elementIsVisibleInViewport(el, true))
log('getScrollPosition:', browser.getScrollPosition())
log('getURLParameters:', browser.getURLParameters('http://url.com/page?name=Adam&surname=Smith'))
log('redirect:', browser.redirect('https://google.com'))
log('scrollToTop:', browser.scrollToTop())


// TEST DATE FUNCTIONS /////////////////////////////////////////////////////////
log('getDaysDiffBetweenDates:', date.getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")))
log('JSONToDate:', date.JSONToDate(/Date(1489525200000)/))
log('toEnglishDate:', date.toEnglishDate('09/21/2010'))


// TEST FUNCTION FUNCTIONS /////////////////////////////////////////////////////
func.chainAsync([
  next => { console.log('0 seconds'); setTimeout(next, 1000); },
  next => { console.log('1 second'); setTimeout(next, 1000); },
  next => { console.log('2 seconds'); }
])

const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = func.compose(add5, multiply)
log(multiplyAndAdd5(5, 2))

func.curry(Math.pow)(2)(10)
func.curry(Math.min, 3)(10)(50)(2)
func.functionName(Math.max)

const add6 = x => x + 6
const multiply2 = (x, y) => x * y
const multiplyAndAdd6 = func.pipeFunctions(multiply2, add6)
log(multiplyAndAdd6(5, 2))

const delay = func.promisify((d, cb) => setTimeout(cb, d))
delay(2000).then(() => console.log('Hi!'))

const delay2 = (d) => new Promise(r => setTimeout(r, d))
func.runPromisesInSeries([() => delay2(1000), () => delay2(2000)])

async function sleepyWork() {
  console.log('I\'m going to sleep for 1 second.');
  await func.sleep(1000);
  console.log('I woke up after 1 second.');
}
sleepyWork()


// TEST MATH FUNCTIONS /////////////////////////////////////////////////////////
log('arrayAverage:', math.arrayAverage([1, 2, 3]))
log('arraySum:', math.arraySum([1, 2, 3, 4]))
log('collatz:', math.collatz(8))
log('digitize:', math.digitize(2334))
log('distance:', math.distance(1, 1, 2, 3))
log('factorial:', math.factorial(6))
log('fibonacci:', math.fibonacci(5))
log('gcd:', math.gcd(8, 36))
log('hammingDisance:', math.hammingDistance(2, 3))
log('isArmstrongNumber:', math.isArmstrongNumber(1634))
log('isArmstrongNumber:', math.isArmstrongNumber(371))
log('isArmstrongNumber:', math.isArmstrongNumber(56))
log('isDivisible:', math.isDivisible(6, 3))
log('isEven:', math.isEven(3))
log('isPrime:', math.isPrime(11))
log('isPrime:', math.isPrime(12))
log('isPrime:', math.isPrime(11))
log('lcm:', math.lcm(12, 7))
log('median:', math.median(5, 6, 50, 1, -5))
log('palindrome:', math.palindrome('taco cat'))
log('percentile:', math.percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6))
log('powerset:', math.powerset([1, 2]))
log('randomIntegerInRange:', math.randomIntegerInRange(0, 5))
log('randomNumberInRange:', math.randomNumberInRange(2, 10))
log('round:', math.round(1.005, 2))
log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21]))
log('standardDeviation:', math.standardDeviation([10, 2, 38, 23, 38, 23, 21], true))


// TEST STRING FUNCTIONS ///////////////////////////////////////////////////////
log('anangrams:', string.anagrams('abc'))
log('capitalize:', string.capitalize('john'))
log('capitalizeEveryWord:', string.capitalizeEveryWord('hello world'))
log('countVowels:', string.countVowels('foobar'))
log('countVowels:', string.countVowels('gym'))
log('escapeRegExp:', string.escapeRegExp('(test)'))
log('fromCamelCase:', string.fromCamelCase('someDatabaseFieldName', ' '))
log('fromCamelCase (snake):', string.fromCamelCase('someDatabaseFieldName', '_'))
log('fromCamelCase (kebab):', string.fromCamelCase('someDatabaseFieldName', '-'))
log('reverseString:', string.reverseString('foobar'))
log('sortCharactersInString:', string.sortCharactersInString('cabbage'))
log('stringToArrayOfWords:', string.stringToArrayOfWords('I love javaScript!!'))
log('stringToArrayOfWords:', string.stringToArrayOfWords('python, javaScript & coffee'))
log('toCamelCase:', string.toCamelCase('some_database_field_name'))
log('toCamelCase:', string.toCamelCase('Some label that needs to be camelized'))
log('toCamelCase:', string.toCamelCase('some-javascript-property'))
log('toCamelCase:', string.toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'))
log('truncateString:', string.truncateString('boomerang', 7))


// TEST UTILITY FUNCTIONS //////////////////////////////////////////////////////
log('coalesce:', util.coalesce(null, undefined, NaN, 'Waldo'))
const customCoalesce = util.coalesceFactory(x => ![null, undefined, '', NaN].includes(x))
log('coalesceFactory:', customCoalesce(null, undefined, '', NaN, 'Waldo'))
log('extendHex:', util.extendHex('#03f'))
log('getType:', util.getType(3))
log('getType:', util.getType(new Set([1, 2, 3])))
log('hexToRGB:', util.hexToRGB('#27ae60ff'))
log('hexToRGB:', util.hexToRGB('27ae60'))
log('hexToRGB:', util.hexToRGB('#fff'))
log('isArray:', util.isArray([1]))
log('isArray:', util.isArray(1))
log('isBoolean:', util.isBoolean(null))
log('isBoolean:', util.isBoolean(true))
log('isFunction:', util.isFunction('x'))
log('isFunction:', util.isFunction(x => x))
log('isNumber:', util.isNumber('1'))
log('isNumber:', util.isNumber(1))
log('isString:', util.isString(10))
log('isString:', util.isString('10'))
log('isSymbol:', util.isSymbol('x'))
log('isSymbol:', util.isSymbol(Symbol('x')))
log('toOrdinalSuffix:', util.toOrdinalSuffix(123))
log('validateEmail:', util.validateEmail('example@example.com'))
log('validateEmail:', util.validateEmail('example'))
log('validateNumber:', util.validateNumber('129387.987987'))
log('validateNumber:', util.validateNumber(129387.987987))
```