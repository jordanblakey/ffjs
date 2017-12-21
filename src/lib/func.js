// FUNCTION METHODS ////////////////////////////////////////////////////////////
let func
export default func = {
  // Chains asynchronous functions.
  chainAsync: fns => { let curr = 0; const next = () => fns[curr++](next); next(); },
  // Performs right-to-left function composition.
  compose: (...fns) => fns.reduce((f, g) => (...args) => f(g(...args))),
  // Curries a function.
  curry: (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : func.curry.bind(null, fn, arity, ...args),
  // Performs left-to-right function composition.
  pipeFunctions: (...fns) => fns.reduce((f, g) => (...args) => g(f(...args))),
  // Converts an asynchronous function to return a promise.
  promisify: funct => (...args) => new Promise((resolve, reject) => funct(...args, (err, result) => err ? reject(err) : resolve(result))),
  // Runs an array of promises in series.
  runPromisesInSeries: ps => ps.reduce((p, next) => p.then(next), Promise.resolve())
}
