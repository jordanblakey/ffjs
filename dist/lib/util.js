'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// UTILITY METHODS /////////////////////////////////////////////////////////////
var util = void 0;
exports.default = util = {
  // Tests that the module was imported correctly
  test: function test() {
    return 'Hello from util module';
  },
  // Returns the first non-null/undefined argument
  coalesce: function coalesce() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.find(function (x) {
      return ![undefined, null].includes(x);
    });
  },
  // Returns a customized coalesce function that returns the first argument that returns true from the provided argument validation function
  coalesceFactory: function coalesceFactory(valid) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return args.find(valid);
    };
  },
  // Extends a 3-digit color code to a 6-digit color code.
  extendHex: function extendHex(shortHex) {
    return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {
      return x + x;
    }).join('');
  },
  // Returns the native type of a value.
  getType: function getType(v) {
    return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  },
  // Converts a color code to an rgb() or rgba() string if alpha value is provided
  hexToRGB: function hexToRGB(hex) {
    var alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [].concat(_toConsumableArray(h)).map(function (x) {
      return x + x;
    }).join('');else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return 'rgb' + (alpha ? 'a' : '') + '(' + (h >>> (alpha ? 24 : 16)) + ', ' + ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) + ', ' + ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) + (alpha ? ', ' + (h & 0x000000ff) : '') + ')';
  },
  isArray: function isArray(val) {
    return !!val && Array.isArray(val);
  },
  isBoolean: function isBoolean(val) {
    return typeof val === 'boolean';
  },
  isFunction: function isFunction(val) {
    return val && typeof val === 'function';
  },
  isNumber: function isNumber(val) {
    return typeof val === 'number';
  },
  isString: function isString(val) {
    return typeof val === 'string';
  },
  isSymbol: function isSymbol(val) {
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'symbol';
  },
  toOrdinalSuffix: function toOrdinalSuffix(num) {
    var int = parseInt(num),
        digits = [int % 10, int % 100],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
  },
  validateEmail: function validateEmail(str) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
    );
  },
  validateNumber: function validateNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
  }
};