"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// FUNCTION METHODS ////////////////////////////////////////////////////////////
var func = void 0;
exports.default = func = {
  // Chains asynchronous functions.
  chainAsync: function chainAsync(fns) {
    var curr = 0;var next = function next() {
      return fns[curr++](next);
    };next();
  },
  // Performs right-to-left function composition.
  compose: function compose() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  },
  // Curries a function.
  curry: function curry(fn) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var _func$curry;

    var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;
    return arity <= args.length ? fn.apply(undefined, args) : (_func$curry = func.curry).bind.apply(_func$curry, [null, fn, arity].concat(args));
  },
  // Performs left-to-right function composition.
  pipeFunctions: function pipeFunctions() {
    for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      fns[_key3] = arguments[_key3];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  },
  // Converts an asynchronous function to return a promise.
  promisify: function promisify(funct) {
    return function () {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return new Promise(function (resolve, reject) {
        return funct.apply(undefined, args.concat([function (err, result) {
          return err ? reject(err) : resolve(result);
        }]));
      });
    };
  },
  // Runs an array of promises in series.
  runPromisesInSeries: function runPromisesInSeries(ps) {
    return ps.reduce(function (p, next) {
      return p.then(next);
    }, Promise.resolve());
  }
};