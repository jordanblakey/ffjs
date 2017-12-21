'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// BROWSER METHODS /////////////////////////////////////////////////////////////
var browser = void 0;
exports.default = browser = {
  // Converts the given array elements into <li> tags and appends them to the list of the given id.
  arrayToHtmlList: function arrayToHtmlList(arr, listID) {
    return arr.map(function (item) {
      return document.querySelector("#" + listID).innerHTML += '<li>' + item + '</li>';
    });
  },
  // Returns true if the bottom of the page is visible, false otherwise.
  bottomVisible: function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  },
  // Returns the current URL.
  currentURL: function currentURL() {
    return window.location.href;
  },
  // Returns true if the element specified is visible in the viewport, false otherwise.
  elementIsVisibleInViewport: function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        bottom = _el$getBoundingClient.bottom,
        right = _el$getBoundingClient.right;

    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  },
  // Returns the scroll position of the current page.
  getScrollPosition: function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return { x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft, y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop };
  },
  // Returns an object containing the parameters of the current URL.
  getURLParameters: function getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
      return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
  },
  // Redirects to a specified URL.
  redirect: function redirect(url) {
    var asLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return asLink ? window.location.href = url : window.location.replace(url);
  },
  // Smooth-scrolls to the top of the page.
  scrollToTop: function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;if (c > 0) {
      window.requestAnimationFrame(browser.scrollToTop);window.scrollTo(0, c - c / 8);
    }
  }
};