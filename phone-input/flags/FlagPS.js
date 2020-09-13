"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPS(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURdgfMhAQEBuARB4eHhgYGN8iNRyGR/z8/PT09B+OTBl7QdAcLyUlJSIiIp0wMk1qQORvezoaHmQcI95DU/LU1+ynrkSdJgMAAAGpSURBVEjHpZKBtoIgDIYXCoEkeq3e/1XvYEyGWaH9I9gm39jOCcLtJ4H2f7exxONtTIq56G+/yZh4rZfxvCKvw23sxm5X+GH3G+cTjzOkFG3jatX1/TzxOEN3Tszr0PXf1PUdrjq38jhDvPDGegFW+cJrWPrjEjzO8COPM1xQPRotOjm3l695gCV/6RkRqMhTClfNpxkuR7TlAWiGMzzkAsshHgjMTtrma7MgMZCPXEHfHwf5AsdiWO7ZykMCNB1QWplt6/s8QOVA4wyQtTZQ/DQDd2FXt/Rl0QQGtY+arcU7aWOjjXRN/CfNNle4WmbZy8c3XAD8bmkD1yf8abcSVbLiPU8/X8jo3h+2QUStFchiNNsmgaQ8V/I7vb99f8faeqf3X2Df2ju/7/Pm8zG5dgFDvCAcwSMvhFFw7hxPo0/uMC9awN4NJk0zbqr+g0HUmPRLh3PsS8m85CdK5gpOXKe6rkpTAKJ3c0IrHxRG6jQ/KaVMMtpYsSTHez7k3tVWqdB3AfV+Wuk/M6ghSg1KRZdPVoxRwzYXY8Deczy8Sm3yXKPkIAw/6R9yCkQrTVVihQAAAABJRU5ErkJggg==",
    alt: "PS"
  }, props));
}