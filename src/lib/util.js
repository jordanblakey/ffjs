// UTILITY METHODS /////////////////////////////////////////////////////////////
let util
export default util = {
  // Tests that the module was imported correctly
  test: () => 'Hello from util module',
  // Returns the first non-null/undefined argument
  coalesce: function(...args) {return args.find(x => ![undefined, null].includes(x))},
  // Returns a customized coalesce function that returns the first argument that returns true from the provided argument validation function
  coalesceFactory: valid => (...args) => args.find(valid),
  // Extends a 3-digit color code to a 6-digit color code.
  extendHex: shortHex => '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x + x).join(''),
  // Returns the native type of a value.
  getType: v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase(),
  // Converts a color code to an rgb() or rgba() string if alpha value is provided
  hexToRGB: (hex) => {
    let alpha = false, h = hex.slice(hex.startsWith('#') ? 1 : 0)
    if (h.length === 3) h = [...h].map(x => x + x).join('')
    else if (h.length === 8) alpha = true
    h = parseInt(h, 16)
    return 'rgb' + (alpha ? 'a' : '') + '('
    + (h >>> (alpha ? 24 : 16)) + ', '
    + ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) + ', '
    + ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0))
    + (alpha ? `, ${(h & 0x000000ff)}` : '') + ')'
  },
  isArray: val => !!val && Array.isArray(val),
  isBoolean: val => typeof val === 'boolean',
  isFunction: val => val && typeof val === 'function',
  isNumber: val => typeof val === 'number',
  isString: val => typeof val === 'string',
  isSymbol: val => typeof val === 'symbol',
  toOrdinalSuffix: num => {
    const int = parseInt(num), digits = [(int % 10), (int % 100)],
      ordinals = ['st', 'nd', 'rd', 'th'],
      oPattern = [1, 2, 3, 4],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19]
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3]
  },
  validateEmail: str => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(str),
  validateNumber: n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n
}
