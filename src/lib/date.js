// DATE METHODS /////////////////////////////////////////////////////////////
let date
export default (date = {
  // Returns the difference (in days) between two dates.
  getDaysDiffBetweenDates: (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24),
  // Converts a JSON object to a date.
  JSONToDate: arr => {
    const dt = new Date(parseInt(arr.toString().substr(6), 10))
    return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`
  },
  // Converts a date from American format to English format.
  toEnglishDate: time => {
    try {
      return new Date(time)
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '/')
    } catch (e) {
      return null
    }
  }
})