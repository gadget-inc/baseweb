"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURfLz8/j4+P39/Qg9xAtBywxE0QU5vH6a3h9PykVt0sfS7aW45ip9VEYAAAFaSURBVDjL7ZQxTwJBEIVnjQVS7Wyjxoalk4rEBAk0FCS0NvYmJtaQK85YkVgoHScWlBL8AcD9Qd/MgYjGXex9uZuZnfft5LKXLF2HdUVRoBtWJw5chFXfH7iVt6FJY0ObjTrdhXUTB6phVb4DtRhweBABJi9hoNZshYHz4egH4Jz3vupk5ar5Kl85KdAR+Qqh9l6hWpqmz+n9U5o+SMeBYW+pML3Uj5tjH7LDmsWxhEIkRLIsZcxTkw8KG0EAdvognGTJjN18MFWfxWcBpNI5Z5c95ONemz/lCmCj1w4CdbMvrV0gzwxak+UOYKxl89sEazHBMBgVvgHwaa9trVmLSSYgY4YxpXEyszzvT41sMcVOEBAhW5ssSmMinENfJ6ClQSCraXuSaICwsFXwAFF5+y9ItpIpkiLrTPkiX6j1m46GIwqq3GyFAZqMI8D7WwQo05/1f0ftd0d9AIXiBmT8X5+DAAAAAElFTkSuQmCC",
    alt: "IL"
  }, props));
}