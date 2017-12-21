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
log('test:', browser.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST DATE METHODS ///////////////////////////////////////////////////////////
log('test:', date.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST FUNCTION METHODS ///////////////////////////////////////////////////////
log('test:', func.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST MATH METHODS ///////////////////////////////////////////////////////////
log('test:', math.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST NODE METHODS ///////////////////////////////////////////////////////////
log('test:', node.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST STRING METHODS ///////////////////////////////////////////////////////////
log('test:', string.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


// TEST UTILITY METHODS ///////////////////////////////////////////////////////////
log('test:', util.test())

// log('funcname:', array.funcname())
// log('funcname:', array.funcname())


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
