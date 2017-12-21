// BROWSER METHODS /////////////////////////////////////////////////////////////
let browser
export default browser = {
  // Converts the given array elements into <li> tags and appends them to the list of the given id.
  arrayToHtmlList: (arr, listID) => arr.map(item => document.querySelector("#" + listID).innerHTML += `<li>${item}</li>`),
  // Returns true if the bottom of the page is visible, false otherwise.
  bottomVisible: () => document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight),
  // Returns the current URL.
  currentURL: () => window.location.href,
  // Returns true if the element specified is visible in the viewport, false otherwise.
  elementIsVisibleInViewport: (el, partiallyVisible = false) => { const { top, left, bottom, right } = el.getBoundingClientRect(); return partiallyVisible ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth; },
  // Returns the scroll position of the current page.
  getScrollPosition: (el = window) => ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft, y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop}),
  // Returns an object containing the parameters of the current URL.
  getURLParameters: url => url.match(/([^?=&]+)(=([^&]*))/g).reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}),
  // Redirects to a specified URL.
  redirect: (url, asLink = true) => asLink ? window.location.href = url : window.location.replace(url),
  // Smooth-scrolls to the top of the page.
  scrollToTop: () => { const c = document.documentElement.scrollTop || document.body.scrollTop; if (c > 0) { window.requestAnimationFrame(browser.scrollToTop); window.scrollTo(0, c - c / 8); } }
}
