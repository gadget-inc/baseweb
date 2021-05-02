"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURRuyayClzxmbxCGn0usWRBueyB6izB67cuEOO+YSQCKp0yOp1CSq1Pj09e+HnfTCzepJa3j8Uc0AAAE3SURBVEjH7ZHbbsMgEEQHsDEQY+f/v7YsZmHj4EQtldqHHDYwexlQZKzrGtYQbuGWWW9riueTezxLmkAwJphQSUmGaqbT45w1zBhQShllUqhvwR6oMWCVssqmOHLW5xrRq4NbDWWva2cU7Biw8w+WrQrzGL/l17NOITta1FmX4A75dWXWfebrltbQYwz7pzH+o9+ndbDtcb/3jf6Ygz8o+YOe9hi3SeRipuQeeeeilN5vMe4yFzPZTcB3+uVIz9/plu2p1+j4KzHGKe8vZuCadhS0CvJ91yZKHMNwDXYmkXX6/1u5lMIJTZE1ypN5yauIPV9Qcs9Vob2T71dfJX9/9wq4Mf7cv4zx8Y/6sfTjTe04APotZYGvE9XHhEdbwgN1uDmAk7WNVjMe9lPeirK5vOij6/hwyRfCyDhXXggXBgAAAABJRU5ErkJggg==",
    alt: "AZ"
  }, props));
}