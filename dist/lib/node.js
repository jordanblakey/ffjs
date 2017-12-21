'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NODE METHODS ////////////////////////////////////////////////////////////////
var node = void 0;
exports.default = node = {
  fs: _fs2.default,
  // Writes a JSON object to a file.
  JSONToFile: function JSONToFile(obj, filename) {
    return node.fs.writeFile(filename + '.json', JSON.stringify(obj, null, 2));
  },
  // Returns an array of lines from the specified file.
  readFileLines: function readFileLines(filename) {
    return node.fs.readFileSync(filename).toString('UTF8').split('\n');
  }
};