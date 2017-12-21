'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// DATE METHODS /////////////////////////////////////////////////////////////
var date = void 0;
exports.default = date = {
  // Returns the difference (in days) between two dates.
  getDaysDiffBetweenDates: function getDaysDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
  },
  // Converts a JSON object to a date.
  JSONToDate: function JSONToDate(arr) {
    var dt = new Date(parseInt(arr.toString().substr(6), 10));
    return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
  },
  // Converts a date from American format to English format.
  toEnglishDate: function toEnglishDate(time) {
    try {
      return new Date(time).toISOString().split('T')[0].replace(/-/g, '/');
    } catch (e) {
      return null;
    }
  }
};